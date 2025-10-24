import React, { Component } from "react";
import { defaultState } from "react-input-position";
import utils from "./utils";
import { MagnifierContainerProps } from "./types";

interface ContainerDimensions {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface PreviewSize {
  width: number;
  height: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

interface MagnifierContainerState {
  inputPositionState: any;
}

export const MagnifierContext = React.createContext<any>(null);

class MagnifierContainer extends Component<MagnifierContainerProps, MagnifierContainerState> {

  state: MagnifierContainerState = {
    inputPositionState: defaultState
  };

  zoomContainerRef = React.createRef<HTMLDivElement>();
  zoomImageRef = React.createRef<HTMLImageElement>();
  zoomImageDimensions = { width: 0, height: 0 };

  getZoomContainerDimensions = (): ContainerDimensions => {
    if (!this.zoomContainerRef.current) {
      return { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0 };
    }

    const {
      width,
      height,
      left,
      right,
      top,
      bottom
    } = this.zoomContainerRef.current.getBoundingClientRect();

    return { width, height, left, right, top, bottom };
  };

  getZoomImageDimensions() {
    if (!this.zoomImageDimensions.width && this.zoomImageRef.current) {
      const rect = this.zoomImageRef.current.getBoundingClientRect();
      this.zoomImageDimensions = {
        width: rect.width,
        height: rect.height
      };
    }
    return this.zoomImageDimensions;
  }

  onUpdate = (changes: any) => {
    this.setState({ inputPositionState: changes });
  };

  onZoomImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const rect = (e.target as HTMLImageElement).getBoundingClientRect();
    this.zoomImageDimensions = {
      width: rect.width,
      height: rect.height
    };
  };

  getContextValue() {
    return {
      stateOverride: this.state.inputPositionState,
      isActive: this.state.inputPositionState.active,
      onUpdate: this.onUpdate,
      zoomImageDimensions: this.zoomImageDimensions,
      zoomRef: this.zoomContainerRef,
      zoomImageRef: this.zoomImageRef,
      onZoomImageLoad: this.onZoomImageLoad,
      ...this.calculatePositions()
    };
  }

  calculatePositions() {
    const { elementDimensions, itemPosition } = this.state.inputPositionState;
    const zoomContainerDimensions = this.getZoomContainerDimensions();
    const zoomImageDimensions = this.getZoomImageDimensions();

    let inPlace = false;
    const { autoInPlace, inPlaceMinBreakpoint = 0 } = this.props;

    if (autoInPlace || inPlaceMinBreakpoint) {
      try {
        const { left, right } = zoomContainerDimensions;
        const windowWidth = window.innerWidth;

        if (
          windowWidth < inPlaceMinBreakpoint ||
          left < 0 ||
          right > windowWidth
        ) {
          inPlace = true;
        }
      } catch (e) {}
    }

    const smallImageSize = {
      width: elementDimensions.width,
      height: elementDimensions.height
    };

    const previewSize: PreviewSize = {
      width: Math.floor(
        smallImageSize.width *
          (zoomContainerDimensions.width / zoomImageDimensions.width)
      ),
      height: Math.floor(
        smallImageSize.height *
          (zoomContainerDimensions.height / zoomImageDimensions.height)
      )
    };

    let position = { x: 0, y: 0 };
    const itemPositionAdj = { ...itemPosition };

    const previewOffset = {
      x: inPlace ? 0 : previewSize.width / 2,
      y: inPlace ? 0 : previewSize.height / 2
    };

    itemPositionAdj.x = Math.max(previewOffset.x, itemPositionAdj.x);
    itemPositionAdj.x = Math.min(
      smallImageSize.width - previewOffset.x,
      itemPositionAdj.x
    );
    itemPositionAdj.y = Math.max(previewOffset.y, itemPositionAdj.y);
    itemPositionAdj.y = Math.min(
      smallImageSize.height - previewOffset.y,
      itemPositionAdj.y
    );

    position = { ...itemPositionAdj };

    const zoomContainerSize = inPlace
      ? smallImageSize
      : zoomContainerDimensions;

    position.x = utils.convertRange(
      previewOffset.x,
      smallImageSize.width - previewOffset.x,
      zoomImageDimensions.width * -1 + zoomContainerSize.width,
      0,
      position.x
    );
    position.y = utils.convertRange(
      previewOffset.y,
      smallImageSize.height - previewOffset.y,
      zoomImageDimensions.height * -1 + zoomContainerSize.height,
      0,
      position.y
    );

    position.x = utils.invertNumber(
      zoomImageDimensions.width * -1 + zoomContainerSize.width,
      0,
      position.x
    );
    position.y = utils.invertNumber(
      zoomImageDimensions.height * -1 + zoomContainerSize.height,
      0,
      position.y
    );

    previewSize.left = Math.floor(itemPositionAdj.x - previewOffset.x) || 0;
    previewSize.right = Math.floor(itemPositionAdj.x + previewOffset.x) || 0;
    previewSize.top = Math.floor(itemPositionAdj.y - previewOffset.y) || 0;
    previewSize.bottom = Math.floor(itemPositionAdj.y + previewOffset.y) || 0;

    return {
      position,
      smallImageSize,
      previewSize,
      zoomContainerDimensions,
      inPlace
    };
  }

  render() {
    const { style, className } = this.props;

    return (
      <div style={style} className={className}>
        <MagnifierContext.Provider value={this.getContextValue()}>
          {this.props.children}
        </MagnifierContext.Provider>
      </div>
    );
  }
}

export default MagnifierContainer;
