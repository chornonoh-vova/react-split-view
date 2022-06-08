import { PointerEvent } from 'react';

import StyledSplitDivider from './StyledSplitDivider';

type SplitDividerProps = {
  index: number;
  orientation: 'horizontal' | 'vertical';
  color?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
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
