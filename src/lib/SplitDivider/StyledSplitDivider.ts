import styled from 'styled-components';

const DEFAULT_COLOR = 'rgb(128, 128, 128)';
const DEFAULT_HOVER_COLOR = 'rgb(72, 66, 245)';
const DEFAULT_HOVER_BORDER_COLOR = 'rgba(72, 66, 245, 0.2)';

export default styled.div<{
  orientation: 'horizontal' | 'vertical';
  color?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  width?: number;
  borderWidth?: number;
}>(
  ({
    orientation,
    color = DEFAULT_COLOR,
    hoverColor = DEFAULT_HOVER_COLOR,
    hoverBorderColor = DEFAULT_HOVER_BORDER_COLOR,
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
