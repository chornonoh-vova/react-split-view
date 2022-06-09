import { Children, ReactNode, cloneElement, Fragment } from 'react';
import {
  DEFAULT_DIVIDER_COLOR,
  DEFAULT_DIVIDER_HOVER_BORDER_COLOR,
  DEFAULT_DIVIDER_HOVER_COLOR,
} from '../common/config';
import { Orientation } from '../common/types';

import { SplitDivider } from '../SplitDivider';
import { useSplitViewState } from './hooks';

import StyledSplitView from './StyledSplitView';

type SplitViewProps = {
  /**
   * The children of the SplitView.
   */
  children: ReactNode[];

  /**
   * Orientation of the SplitView.
   * Can be either `horizontal` or `vertical`.
   * Defaults to `vertical`.
   */
  orientation?: Orientation;

  /**
   * Options for customizing dividers
   */
  divider?: {
    /**
     * Color of the dividers
     */
    color?: string;

    /**
     * Color of the dividers when the mouse is over them
     */
    hoverColor?: string;

    /**
     * Color of the dividers border when the mouse is over them
     */
    hoverBorderColor?: string;
  };
};

/**
 * SplitView is a component that allows you to split the available space into multiple panels.
 */
export default function SplitView({
  children,
  orientation = 'vertical',
  divider,
}: SplitViewProps) {
  const { panelsRef, onPointerDown, onPointerUp, onPointerMove } =
    useSplitViewState(orientation);

  const {
    color = DEFAULT_DIVIDER_COLOR,
    hoverColor = DEFAULT_DIVIDER_HOVER_COLOR,
    hoverBorderColor = DEFAULT_DIVIDER_HOVER_BORDER_COLOR,
  } = divider || {};

  const filteredChild = Children.toArray(children).filter(Boolean);

  return (
    <StyledSplitView
      orientation={orientation}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {filteredChild.map((child, index) => (
        <Fragment key={index}>
          {cloneElement(child as never, {
            key: `split-panel-${index}`,
            orientation,
            ref: (ref: HTMLElement) => (panelsRef.current[index] = ref),
          })}

          {index !== filteredChild.length - 1 && (
            <SplitDivider
              key={`split-divider-${index}`}
              index={index}
              orientation={orientation}
              color={color}
              hoverColor={hoverColor}
              hoverBorderColor={hoverBorderColor}
              onPointerDown={onPointerDown}
            />
          )}
        </Fragment>
      ))}
    </StyledSplitView>
  );
}
