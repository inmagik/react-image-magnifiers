import React from "react";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import SideBySideRenderer from "./SideBySideRenderer";
import { SideBySideMagnifierProps } from "./types";

const SideBySideMagnifier: React.FC<SideBySideMagnifierProps> = (props) => {
  const {
    imageSrc,
    largeImageSrc,
    imageAlt,
    overlayOpacity,
    overlayBoxOpacity,
    overlayBackgroundColor,
    overlayBoxColor,
    overlayBoxImage,
    overlayBoxImageSize,
    cursorStyle,
    alwaysInPlace,
    transitionSpeed,
    transitionSpeedInPlace,
    renderOverlay,
    className,
    style,
    onImageLoad,
    onLargeImageLoad,
    switchSides,
    onZoomStart,
    onZoomEnd,
    fillAvailableSpace,
    fillAlignTop,
    fillGapLeft,
    fillGapRight,
    fillGapTop,
    fillGapBottom,
    inPlaceMinBreakpoint,
    zoomContainerBorder,
    zoomContainerBoxShadow,
    mouseActivation,
    touchActivation
  } = props;

  return (
    <ReactInputPosition
      style={style}
      className={className}
      touchActivationMethod={touchActivation}
      mouseActivationMethod={mouseActivation}
      onActivate={onZoomStart}
      onDeactivate={onZoomEnd}
      trackItemPosition
      linkItemToActive
    >
      <SideBySideRenderer
        imageSrc={imageSrc}
        largeImageSrc={largeImageSrc}
        imageAlt={imageAlt}
        overlayOpacity={overlayOpacity}
        overlayBoxOpacity={overlayBoxOpacity}
        overlayBackgroundColor={overlayBackgroundColor}
        overlayBoxColor={overlayBoxColor}
        overlayBoxImage={overlayBoxImage}
        overlayBoxImageSize={overlayBoxImageSize}
        alwaysInPlace={alwaysInPlace}
        transitionSpeed={transitionSpeed}
        transitionSpeedInPlace={transitionSpeedInPlace}
        renderOverlay={renderOverlay}
        cursorStyle={cursorStyle}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
        switchSides={switchSides}
        fillAvailableSpace={fillAvailableSpace}
        fillAlignTop={fillAlignTop}
        fillGapLeft={fillGapLeft}
        fillGapRight={fillGapRight}
        fillGapTop={fillGapTop}
        fillGapBottom={fillGapBottom}
        inPlaceMinBreakpoint={inPlaceMinBreakpoint}
        zoomContainerBorder={zoomContainerBorder}
        zoomContainerBoxShadow={zoomContainerBoxShadow}
      />
    </ReactInputPosition>
  );
};

export default SideBySideMagnifier;
