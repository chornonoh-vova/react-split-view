import {
  forwardRef,
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  CSSProperties,
} from 'react';
import { Orientation } from '../common/types';

type SplitPanelProps = {
  /**
   * The children of the SplitPanel.
   */
  children: ReactNode;

  /**
   * @private
   */
  orientation?: Orientation;

  /**
   * Let panel to take all available space
   */
  grow?: boolean;

  /**
   * Initial size of the split panel (in pixels)
   */
  initialSize?: number | string;

  /**
   * Minimum size of the split panel (in pixels)
   */
  minSize?: number | string;

  /**
   * Maximum size of the split panel (in pixels)
   */
  maxSize?: number | string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * SplitPanel is an element that can be resized by the user.
 */
export default forwardRef(function SplitPanel(
  {
    children,
    grow,
    orientation,
    initialSize,
    minSize,
    maxSize,
    ...rest
  }: SplitPanelProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const flexGrow = grow ? 1 : 0;

  let style: CSSProperties = { flexGrow };

  if (orientation === 'vertical') {
    const width = !grow ? initialSize || minSize : undefined;
    const maxWidth = !grow ? maxSize : undefined;

    style = Object.assign(style, { width, maxWidth, minWidth: minSize });
  } else {
    const height = !grow ? initialSize || minSize : undefined;
    const maxHeight = !grow ? maxSize : undefined;

    style = Object.assign(style, { height, maxHeight, minHeight: minSize });
  }

  return (
    <div ref={ref} style={style} {...rest}>
      {children}
    </div>
  );
});
