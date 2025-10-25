import React from "react";
import Image from "./Image";
import styles from "./styles";
import { RendererProps } from "./types";

const MagnifierRenderer: React.FC<Partial<RendererProps>> = (props) => {
  const {
    itemPosition,
    active,
    elementDimensions,
    itemDimensions,
    imageSrc,
    largeImageSrc,
    imageAlt,
    itemRef,
    renderOverlay,
    cursorStyle = "zoom-in",
    cursorStyleActive = "zoom-out",
    onImageLoad,
    onLargeImageLoad,
    onLoadRefresh
  } = props;

  const legalSize = itemDimensions.width > elementDimensions.width;
  const isActive = legalSize && active;
  const finalCursorStyle = !legalSize
    ? "default"
    : active
    ? cursorStyleActive
    : cursorStyle;

  return (
    <div style={{ position: "relative", cursor: finalCursorStyle }}>
      <Image
        style={{
          display: "block",
          visibility: isActive ? "hidden" : "visible",
          width: "100%"
        }}
        src={imageSrc}
        alt={imageAlt}
        onImageLoad={onImageLoad}
        onLoadRefresh={onLoadRefresh}
      />
      <div
        style={styles.getZoomContainerStyle(
          elementDimensions.width,
          elementDimensions.height,
          true,
          false
        )}
      >
        <Image
          style={styles.getLargeImageStyle(
            itemPosition.x,
            itemPosition.y,
            isActive
          )}
          src={largeImageSrc || imageSrc}
          alt={imageAlt}
          ref={itemRef}
          onImageLoad={onLargeImageLoad}
          onLoadRefresh={onLoadRefresh}
        />
      </div>
      {renderOverlay ? renderOverlay(active) : null}
    </div>
  );
};

export default MagnifierRenderer;
