import { PointerEvent } from 'react';
import { Orientation } from '../common/types';

import StyledSplitDivider from './StyledSplitDivider';

type SplitDividerProps = {
  index: number;
  orientation: Orientation;
  color: string;
  hoverColor: string;
  hoverBorderColor: string;
  onPointerDown: (event: PointerEvent<HTMLDivElement>, index: number) => void;
};

export default function SplitDivider({
  index,
  orientation,
  color,
  hoverColor,
  hoverBorderColor,
  onPointerDown,
}: SplitDividerProps) {
  return (
    <StyledSplitDivider
      orientation={orientation}
      color={color}
      hoverColor={hoverColor}
      hoverBorderColor={hoverBorderColor}
      onPointerDown={(event) => onPointerDown(event, index)}
    />
  );
}
