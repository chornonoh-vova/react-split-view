import { forwardRef, ForwardedRef, HTMLAttributes, ReactNode } from 'react';

type SplitPanelProps = {
  /**
   * The children of the SplitPanel.
   */
  children: ReactNode;

  /**
   * Let panel to take all available space
   */
  grow?: boolean;

  /**
   * Minimum size of the split panel (in pixels)
   */
  minWidth?: number | string;

  /**
   * Maximum size of the split panel (in pixels)
   */
  maxWidth?: number | string;
} & HTMLAttributes<HTMLDivElement>;

/**
 * SplitPanel is an element that can be resized by the user.
 */
export default forwardRef(function SplitPanel(
  { children, grow, minWidth, maxWidth, ...rest }: SplitPanelProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      style={{ minWidth, maxWidth, flexGrow: grow ? 1 : 0 }}
      {...rest}
    >
      {children}
    </div>
  );
});
