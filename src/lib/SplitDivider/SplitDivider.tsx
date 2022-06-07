import { MouseEvent } from 'react';

import StyledSplitDivider from './StyledSplitDivider';

type SplitDividerProps = {
  index: number;
  color?: string;
  onMouseDown: (event: MouseEvent<HTMLDivElement>, index: number) => void;
};

export default function SplitDivider({
  index,
  color = '#000',
  onMouseDown,
}: SplitDividerProps) {
  return (
    <StyledSplitDivider
      color={color}
      onMouseDown={(event) => onMouseDown(event, index)}
    />
  );
}
