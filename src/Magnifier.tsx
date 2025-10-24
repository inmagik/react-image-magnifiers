import React from "react";
import utils from "./utils";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import MagnifierRenderer from "./MagnifierRenderer";
import { CommonMagnifierProps } from "./types";

const Magnifier: React.FC<CommonMagnifierProps> = (props) => {
  const {
    imageSrc,
    largeImageSrc,
    imageAlt = "",
    cursorStyle = "zoom-in",
    cursorStyleActive,
    renderOverlay,
    dragToMove = true,
    className,
    style,
    mouseActivation = MOUSE_ACTIVATION.CLICK,
    touchActivation = TOUCH_ACTIVATION.TAP,
    interactionSettings = {},
    onImageLoad = utils.noop,
    onLargeImageLoad = utils.noop,
    onImageError,
    onLargeImageError,
    onZoomStart,
    onZoomEnd
  } = props;

  const finalActiveCursorStyle =
    cursorStyleActive || dragToMove ? "move" : "zoom-out";

  return (
    <ReactInputPosition
      style={style}
      className={className}
      touchActivationMethod={touchActivation}
      mouseActivationMethod={mouseActivation}
      trackItemPosition
      centerItemOnActivatePos={dragToMove}
      alignItemOnActivePos={!dragToMove}
      onActivate={onZoomStart}
      onDeactivate={onZoomEnd}
      itemPositionLimitBySize
      {...interactionSettings}
    >
      <MagnifierRenderer
        imageSrc={imageSrc}
        largeImageSrc={largeImageSrc}
        imageAlt={imageAlt}
        renderOverlay={renderOverlay}
        cursorStyle={cursorStyle}
        cursorStyleActive={finalActiveCursorStyle}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
        onImageError={onImageError}
        onLargeImageError={onLargeImageError}
      />
    </ReactInputPosition>
  );
};

export default Magnifier;
