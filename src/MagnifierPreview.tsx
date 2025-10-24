import React from "react";
import ReactInputPosition from "react-input-position";
import MagnifierPreviewRenderer from "./MagnifierPreviewRenderer";
import { MagnifierContext } from "./MagnifierContainer";
import { MagnifierPreviewProps } from "./types";

const MagnifierPreview: React.FC<MagnifierPreviewProps> = (props) => {
  const {
    imageSrc,
    imageAlt,
    largeImageSrc,
    className,
    style,
    cursorStyle,
    onImageLoad,
    onLargeImageLoad,
    renderOverlay,
    overlayOpacity,
    overlayBoxOpacity,
    overlayBackgroundColor,
    overlayBoxColor,
    overlayBoxImage,
    overlayBoxImageSize,
    transitionSpeed,
    onZoomStart,
    onZoomEnd,
    mouseActivation,
    touchActivation
  } = props;

  const {
    stateOverride,
    onUpdate,
    zoomImageDimensions,
    previewSize,
    smallImageSize,
    position,
    inPlace
  } = React.useContext(MagnifierContext);

  return (
    <ReactInputPosition
      touchActivationMethod={touchActivation}
      mouseActivationMethod={mouseActivation}
      onActivate={onZoomStart}
      onDeactivate={onZoomEnd}
      className={className}
      style={style}
      cursorStyle={cursorStyle}
      trackItemPosition
      linkItemToActive
      stateOverride={stateOverride}
      onUpdate={onUpdate}
    >
      <MagnifierPreviewRenderer
        image={imageSrc}
        largeImage={largeImageSrc}
        alt={imageAlt}
        zoomImageDimensions={zoomImageDimensions}
        previewSize={previewSize}
        smallImageSize={smallImageSize}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
        renderOverlay={renderOverlay}
        overlayOpacity={overlayOpacity}
        overlayBoxOpacity={overlayBoxOpacity}
        overlayBackgroundColor={overlayBackgroundColor}
        overlayBoxColor={overlayBoxColor}
        overlayBoxImage={overlayBoxImage}
        overlayBoxImageSize={overlayBoxImageSize}
        transitionSpeed={transitionSpeed}
        inPlace={inPlace}
        position={position}
      />
    </ReactInputPosition>
  );
}

export default MagnifierPreview;
