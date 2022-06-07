import { Children, ReactNode, cloneElement } from 'react';

import { SplitDivider } from '../SplitDivider';
import { useSplitViewState } from './hooks';

import StyledSplitView from './StyledSplitView';

type SplitViewProps = {
  /**
   * The children of the SplitView.
   */
  children: ReactNode[];
};

/**
 * SplitView is a component that allows you to split the available space into multiple panels.
 */
export default function SplitView({ children }: SplitViewProps) {
  const { panelsRef, onMouseDown, onMouseUp, onMouseMove } =
    useSplitViewState();

  return (
    <StyledSplitView onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      {Children.map(children, (child, index) => (
        <>
          {index !== 0 && (
            <SplitDivider index={index} onMouseDown={onMouseDown} />
          )}
          {cloneElement(child as never, {
            ref: (ref: HTMLElement) => (panelsRef.current[index] = ref),
          })}
        </>
      ))}
    </StyledSplitView>
  );
}
