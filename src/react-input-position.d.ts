declare module 'react-input-position' {
  import { Component, ReactNode, CSSProperties } from 'react';

  export interface ReactInputPositionProps {
    children?: ReactNode;
    style?: CSSProperties;
    className?: string;
    mouseActivationMethod?: string;
    touchActivationMethod?: string;
    trackItemPosition?: boolean;
    trackPreviousPosition?: boolean;
    trackPassivePosition?: boolean;
    centerItemOnActivatePos?: boolean;
    centerItemOnLoad?: boolean;
    centerItemOnActivate?: boolean;
    alignItemOnActivePos?: boolean;
    itemPositionMinX?: number;
    itemPositionMaxX?: number;
    itemPositionMinY?: number;
    itemPositionMaxY?: number;
    itemPositionLimitBySize?: boolean;
    itemPositionLimitInternal?: boolean;
    linkItemToActive?: boolean;
    minUpdateSpeedInMs?: number;
    onUpdate?: (changes: any) => void;
    onActivate?: () => void;
    onDeactivate?: () => void;
    [key: string]: any;
  }

  export default class ReactInputPosition extends Component<ReactInputPositionProps> {}

  export const MOUSE_ACTIVATION: {
    CLICK: string;
    DOUBLE_CLICK: string;
    HOVER: string;
    MOUSE_DOWN: string;
  };

  export const TOUCH_ACTIVATION: {
    TOUCH: string;
    TAP: string;
    DOUBLE_TAP: string;
    LONG_TOUCH: string;
  };

  export const defaultState: any;
}
