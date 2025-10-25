import React from "react";
import styles from "./styles";
import { MagnifierContext } from "./MagnifierContainer";
import Image from "./Image";
import { MagnifierZoomProps } from "./types";

const MagnifierZoom: React.FC<MagnifierZoomProps> = (props) => {
  const {
    imageSrc,
    imageAlt,
    className,
    style,
    onImageLoad,
    transitionSpeed
  } = props;

  const {
    zoomImageDimensions,
    zoomContainerDimensions,
    position,
    onZoomImageLoad,
    zoomRef,
    zoomImageRef,
    isActive,
    inPlace
  } = React.useContext(MagnifierContext);

  let invalidVertical =
    zoomImageDimensions.height <= zoomContainerDimensions.height;
  let invalidHorizontal =
    zoomImageDimensions.width <= zoomContainerDimensions.width;

  return (
    <div
      className={className}
      style={{
        ...styles.getMagnifierZoomStyle(isActive && !inPlace, transitionSpeed),
        ...style,
        overflow: "hidden",
        pointerEvents: "none"
      }}
      ref={zoomRef}
    >
      <Image
        ref={zoomImageRef}
        style={{
          ...styles.getLargeImageStyle(
            invalidHorizontal ? 0 : position.x,
            invalidVertical ? 0 : position.y,
            true
          )
        }}
        src={imageSrc}
        alt={imageAlt}
        onImageLoad={e => {
          onZoomImageLoad(e);
          onImageLoad(e);
        }}
      />
    </div>
  );
}

export default MagnifierZoom;
