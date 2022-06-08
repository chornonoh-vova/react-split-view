import { forwardRef, ForwardedRef, HTMLAttributes, ReactNode } from 'react';

type SplitPanelProps = {
  /**
   * The children of the SplitPanel.
   */
  children: ReactNode;

  /**
   * @private
   */
  orientation?: 'horizontal' | 'vertical';

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
  if (orientation === 'vertical') {
    const width = !grow ? initialSize || minSize : undefined;

    return (
      <div
        ref={ref}
        style={{
          width,
          minWidth: minSize,
          maxWidth: maxSize,
          flexGrow: grow ? 1 : 0,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  } else {
    const height = !grow ? initialSize || minSize : undefined;

    return (
      <div
        ref={ref}
        style={{
          height,
          minHeight: minSize,
          maxHeight: maxSize,
          flexGrow: grow ? 1 : 0,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
});
