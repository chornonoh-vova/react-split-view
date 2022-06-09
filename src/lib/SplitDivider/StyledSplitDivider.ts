import styled from 'styled-components';
import { Orientation } from '../common/types';

export default styled.div<{
  orientation: Orientation;
  color: string;
  hoverColor: string;
  hoverBorderColor: string;
  width?: number;
  borderWidth?: number;
}>(
  ({
    orientation,
    color,
    hoverColor,
    hoverBorderColor,
    width = 1,
    borderWidth = 3,
  }) => ({
    backgroundColor: color,
    zIndex: 1,

    boxSizing: 'border-box',
    backgroundClip: 'padding-box',

    ...(orientation === 'vertical' && {
      height: '100%',
      width: borderWidth * 2 + width,
      margin: `0 -${borderWidth}px`,
      borderInline: `${borderWidth}px solid transparent`,
    }),

    ...(orientation === 'horizontal' && {
      width: '100%',
      height: borderWidth * 2 + width,
      margin: `-${borderWidth}px 0`,
      borderBlock: `${borderWidth}px solid transparent`,
    }),

    '&:active, &:hover': {
      backgroundColor: hoverColor,

      ...(orientation === 'vertical' && {
        borderInline: `${borderWidth}px solid ${hoverBorderColor}`,
        cursor: 'col-resize',
      }),

      ...(orientation === 'horizontal' && {
        borderBlock: `${borderWidth}px solid ${hoverBorderColor}`,
        cursor: 'row-resize',
      }),
    },
  })
);
