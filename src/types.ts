import React from 'react';

// Common types for react-input-position
export interface ItemPosition {
  x: number;
  y: number;
}

export interface ActivePosition {
  x: number;
  y: number;
}

export interface ElementDimensions {
  width: number;
  height: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export interface ItemDimensions {
  width: number;
  height: number;
}

// Common props used across magnifier components
export interface CommonMagnifierProps {
  imageSrc: string;
  largeImageSrc?: string;
  imageAlt?: string;
  cursorStyle?: string;
  cursorStyleActive?: string;
  renderOverlay?: (active: boolean) => React.ReactNode;
  dragToMove?: boolean;
  className?: string;
  style?: React.CSSProperties;
  mouseActivation?: string;
  touchActivation?: string;
  interactionSettings?: Record<string, any>;
  onImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onLargeImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onImageError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onLargeImageError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onZoomStart?: () => void;
  onZoomEnd?: () => void;
}

// Props passed to renderer components
export interface RendererProps {
  itemPosition: ItemPosition;
  active: boolean;
  elementDimensions: ElementDimensions;
  itemDimensions: ItemDimensions;
  imageSrc: string;
  largeImageSrc?: string;
  imageAlt?: string;
  itemRef: React.RefObject<HTMLImageElement>;
  renderOverlay?: (active: boolean) => React.ReactNode;
  cursorStyle?: string;
  cursorStyleActive?: string;
  onImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onLargeImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onLoadRefresh?: () => void;
  [key: string]: any; // Allow additional props
}

// Glass magnifier specific props
export interface GlassMagnifierProps extends CommonMagnifierProps {
  magnifierBorderSize?: number;
  magnifierBorderColor?: string;
  magnifierBackgroundColor?: string;
  magnifierSize?: string | number;
  magnifierOffsetX?: number;
  magnifierOffsetY?: number;
  square?: boolean;
  allowOverflow?: boolean;
}

export interface GlassRendererProps extends RendererProps {
  activePosition: ActivePosition;
  magnifierBorderSize: number;
  magnifierBorderColor: string;
  magnifierBackgroundColor: string;
  magnifierSize: string | number;
  magnifierOffsetX: number;
  magnifierOffsetY: number;
  square: boolean;
}

// Side by side magnifier specific props
export interface SideBySideMagnifierProps extends CommonMagnifierProps {
  alwaysInPlace?: boolean;
  overlayOpacity?: number;
  overlayBoxOpacity?: number;
  overlayBackgroundColor?: string;
  overlayBoxColor?: string;
  overlayBoxImage?: string;
  overlayBoxImageSize?: string;
  switchSides?: boolean;
  zoomContainerBorder?: string;
  zoomContainerBoxShadow?: string;
  fillAvailableSpace?: boolean;
  fillAlignTop?: boolean;
  fillGapLeft?: number;
  fillGapRight?: number;
  fillGapTop?: number;
  fillGapBottom?: number;
  inPlaceMinBreakpoint?: number;
  transitionSpeed?: number;
  transitionSpeedInPlace?: number;
  zoomPosition?: string;
}

// Picture in Picture magnifier specific props
export interface PictureInPictureMagnifierProps extends CommonMagnifierProps {
  previewSizePercentage?: number;
  previewHorizontalPos?: string;
  previewVerticalPos?: string;
  previewOpacity?: number;
  previewOverlayOpacity?: number;
  previewOverlayBoxOpacity?: number;
  previewOverlayBackgroundColor?: string;
  previewOverlayBoxColor?: string;
  previewOverlayBoxImage?: string;
  previewOverlayBoxImageSize?: string;
  cursorStyleActive?: string;
  shadow?: boolean;
  shadowColor?: string;
}

// MagnifierContainer props
export interface MagnifierContainerProps {
  className?: string;
  style?: React.CSSProperties;
  autoInPlace?: boolean;
  inPlaceMinBreakpoint?: number;
  children?: React.ReactNode;
}

// MagnifierPreview props
export interface MagnifierPreviewProps {
  className?: string;
  style?: React.CSSProperties;
  overlayOpacity?: number;
  overlayBoxOpacity?: number;
  overlayBackgroundColor?: string;
  overlayBoxColor?: string;
  overlayBoxImage?: string;
  overlayBoxImageSize?: string;
  transitionSpeed?: number;
  imageSrc?: string;
  largeImageSrc?: string;
  imageAlt?: string;
  renderOverlay?: (active: boolean) => React.ReactNode;
  cursorStyle?: string;
  onImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onLargeImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onZoomStart?: () => void;
  onZoomEnd?: () => void;
  mouseActivation?: string;
  touchActivation?: string;
}

// MagnifierZoom props
export interface MagnifierZoomProps {
  className?: string;
  style?: React.CSSProperties;
  imageSrc?: string;
  imageAlt?: string;
  transitionSpeed?: number;
  onImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

// ImagePreviewOverlay props
export interface ImagePreviewOverlayProps {
  previewWidth: number;
  previewHeight: number;
  previewPosLeft: number;
  previewPosRight: number;
  previewPosTop: number;
  previewPosBottom: number;
  imageWidth: number;
  imageHeight: number;
  overlayOpacity: number;
  overlayBoxOpacity: number;
  active: boolean;
  transitionSpeed: number;
  overlayBackgroundColor: string;
  overlayBoxColor: string;
  overlayBoxImage?: string;
  overlayBoxImageSize?: string;
}
