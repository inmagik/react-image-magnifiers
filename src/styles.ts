import { CSSProperties } from 'react';

function getLargeImageStyle(
  positionX: number,
  positionY: number,
  active: boolean
): CSSProperties {
  return {
    position: "absolute",
    boxSizing: "border-box",
    display: "block",
    top: 0,
    left: 0,
    transform: `translate(${positionX}px, ${positionY}px)`,
    zIndex: "1",
    visibility: !active ? "hidden" : "visible",
    width: "auto"
  };
}

function getZoomContainerStyle(
  width: number,
  height: number,
  inPlace: boolean,
  switchSides: boolean
): CSSProperties {
  const style: CSSProperties = {
    position: "absolute",
    boxSizing: "border-box",
    pointerEvents: "none",
    width: `${width}px`,
    height: `${height}px`,
    top: "0",
    overflow: "hidden"
  };

  if (inPlace) {
    style.left = "0px";
  } else if (switchSides) {
    style.right = `${width}px`;
  } else {
    style.left = `${width}px`;
  }

  return style;
}

function getOverlayCenterStyle(
  width: number,
  height: number,
  left: number,
  top: number,
  opacity: number,
  transitionSpeed: number,
  color: string,
  backgroundImage?: string,
  backgroundImageSize?: string
): CSSProperties {
  const backgroundStyle: CSSProperties = {};

  if (backgroundImage) {
    backgroundStyle.backgroundImage = `url("${backgroundImage}")`;
  }

  if (backgroundImageSize) {
    backgroundStyle.backgroundSize = backgroundImageSize;
  }

  return {
    position: "absolute",
    width: `${width}px`,
    height: `${height}px`,
    left: 0,
    top: 0,
    boxSizing: "border-box",
    transform: `translate(${left}px, ${top}px)`,
    border: `1px solid ${color}`,
    opacity: opacity,
    transition: `opacity ${transitionSpeed}s ease`,
    zIndex: "15",
    pointerEvents: "none",
    ...backgroundStyle
  };
}

function getOverlayTopStyle(
  width: number,
  height: number,
  opacity: number,
  transitionSpeed: number,
  backgroundColor: string
): CSSProperties {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: 0,
    left: 0,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: "10",
    transition: `opacity ${transitionSpeed}s ease`,
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}

function getOverlayLeftStyle(
  width: number,
  height: number,
  top: number,
  opacity: number,
  transitionSpeed: number,
  backgroundColor: string
): CSSProperties {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    width: `${width}px`,
    top: `${top}px`,
    left: 0,
    height: `${height}px`,
    zIndex: "10",
    transition: `opacity ${transitionSpeed}s ease`,
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}

function getOverlayRightStyle(
  width: number,
  height: number,
  top: number,
  opacity: number,
  transitionSpeed: number,
  backgroundColor: string
): CSSProperties {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: `${top}px`,
    right: 0,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: "10",
    transition: `opacity ${transitionSpeed}s ease`,
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}

function getOverlayBottomStyle(
  width: number,
  height: number,
  top: number,
  opacity: number,
  transitionSpeed: number,
  backgroundColor: string
): CSSProperties {
  return {
    backgroundColor: backgroundColor,
    position: "absolute",
    boxSizing: "border-box",
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: "10",
    transition: `opacity ${transitionSpeed}s ease`,
    opacity: opacity,
    transform: "scale3d(1,1,1)",
    pointerEvents: "none"
  };
}

function getMagnifierZoomStyle(active: boolean, transitionSpeed: number): CSSProperties {
  return {
    position: "relative",
    opacity: active ? 1 : 0,
    transition: `opacity ${transitionSpeed}s ease`
  };
}

export default {
  getLargeImageStyle,
  getZoomContainerStyle,
  getOverlayCenterStyle,
  getOverlayTopStyle,
  getOverlayLeftStyle,
  getOverlayRightStyle,
  getOverlayBottomStyle,
  getMagnifierZoomStyle
};
