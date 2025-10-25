import React from "react";
import styles from "./styles";
import { ImagePreviewOverlayProps } from "./types";

const ImagePreviewOverlay: React.FC<ImagePreviewOverlayProps> = (props) => {
  const {
    previewWidth,
    previewHeight,
    previewPosLeft,
    previewPosRight,
    previewPosTop,
    previewPosBottom,
    imageWidth,
    imageHeight,
    overlayOpacity,
    overlayBoxOpacity,
    active,
    transitionSpeed,
    overlayBackgroundColor,
    overlayBoxColor,
    overlayBoxImage,
    overlayBoxImageSize
  } = props;

  const opacity = active ? overlayOpacity : 0;
  const boxOpacity = active ? overlayBoxOpacity : 0;

  return (
    <React.Fragment>
      <div
        style={styles.getOverlayCenterStyle(
          previewWidth,
          previewHeight,
          previewPosLeft,
          previewPosTop,
          boxOpacity,
          transitionSpeed,
          overlayBoxColor,
          overlayBoxImage,
          overlayBoxImageSize
        )}
      ></div>
      <div
        style={styles.getOverlayTopStyle(
          imageWidth,
          previewPosTop,
          opacity,
          transitionSpeed,
          overlayBackgroundColor
        )}
      ></div>
      <div
        style={styles.getOverlayLeftStyle(
          previewPosLeft,
          previewHeight,
          previewPosTop,
          opacity,
          transitionSpeed,
          overlayBackgroundColor
        )}
      ></div>
      <div
        style={styles.getOverlayRightStyle(
          imageWidth - previewPosRight,
          previewHeight,
          previewPosTop,
          opacity,
          transitionSpeed,
          overlayBackgroundColor
        )}
      ></div>
      <div
        style={styles.getOverlayBottomStyle(
          imageWidth,
          imageHeight - previewPosBottom,
          previewPosBottom,
          opacity,
          transitionSpeed,
          overlayBackgroundColor
        )}
      ></div>
    </React.Fragment>
  );
};

export default ImagePreviewOverlay;
