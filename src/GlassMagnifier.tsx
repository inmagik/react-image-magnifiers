import React from "react";
import utils from "./utils";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import GlassRenderer from "./GlassRenderer";
import { GlassMagnifierProps } from "./types";

const GlassMagnifier: React.FC<GlassMagnifierProps> = (props) => {
  const {
    imageSrc,
    largeImageSrc,
    imageAlt = "",
    magnifierBorderSize = 3,
    magnifierBorderColor = "rgba(255, 255, 255, 0.5)",
    magnifierBackgroundColor = "rgba(225, 225, 225, 0.5)",
    magnifierSize = "25%",
    magnifierOffsetX = 0,
    magnifierOffsetY = 0,
    square = false,
    cursorStyle = "none",
    renderOverlay,
    allowOverflow = false,
    style,
    className,
    onImageLoad = utils.noop,
    onLargeImageLoad = utils.noop,
    onZoomStart,
    onZoomEnd
  } = props;

  return (
    <ReactInputPosition
      style={{
        ...style,
        position: "relative",
        overflow: allowOverflow ? "visible" : "hidden"
      }}
      className={className}
      touchActivationMethod={TOUCH_ACTIVATION.TOUCH}
      mouseActivationMethod={MOUSE_ACTIVATION.HOVER}
      onActivate={onZoomStart}
      onDeactivate={onZoomEnd}
      trackItemPosition
      alignItemOnActivePos
      itemPositionLimitBySize
    >
      <GlassRenderer
        magnifierBorderSize={magnifierBorderSize}
        magnifierBorderColor={magnifierBorderColor}
        magnifierBackgroundColor={magnifierBackgroundColor}
        magnifierSize={magnifierSize}
        imageSrc={imageSrc}
        largeImageSrc={largeImageSrc}
        imageAlt={imageAlt}
        square={square}
        magnifierOffsetX={magnifierOffsetX}
        magnifierOffsetY={magnifierOffsetY}
        renderOverlay={renderOverlay}
        cursorStyle={cursorStyle}
        onImageLoad={onImageLoad}
        onLargeImageLoad={onLargeImageLoad}
      />
    </ReactInputPosition>
  );
};

export default GlassMagnifier;
