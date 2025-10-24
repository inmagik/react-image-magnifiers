import React from "react";
import utils from "./utils";

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  onImageLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onLoadRefresh?: () => void;
  src: string | string[];
  alt?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(function Image(props, ref) {
  const { onImageLoad = utils.noop, onLoadRefresh = utils.noop, src, alt, ...otherProps } = props;

  const [imageIdx, setImageIdx] = React.useState(0);
  const imageErrorRef = React.useRef(false);
  const imageArr = Array.isArray(src) ? src : [src];

  return (
    <img
      ref={ref}
      src={imageArr[imageIdx]}
      alt={alt}
      onLoad={e => {
        onImageLoad(e);

        if (imageErrorRef.current) {
          onLoadRefresh();
        }
      }}
      onError={_e => {
        if (imageIdx < imageArr.length) {
          imageErrorRef.current = true;
          setImageIdx(idx => idx + 1);
        }
      }}
      {...otherProps}
    />
  );
});

export default Image;
