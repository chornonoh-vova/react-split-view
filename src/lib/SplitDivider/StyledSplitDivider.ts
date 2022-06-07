import styled from 'styled-components';
import Color from 'color';

export default styled.div<{
  color?: string;
  width?: number;
  borderWidth?: number;
}>(({ color = '#000', width = 2, borderWidth = 4 }) => {
  const inputColor = new Color(color);

  const backgroundColor = inputColor.rgb().string();
  const hoverColor = inputColor.alpha(0.5).rgb().string();

  return {
    background: backgroundColor,
    opacity: 0.5,
    zIndex: 1,

    boxSizing: 'border-box',
    backgroundClip: 'padding-box',

    width: borderWidth * 2 + width,
    margin: `0 -${borderWidth}px`,
    borderLeft: `${borderWidth}px solid transparent`,
    borderRight: `${borderWidth}px solid transparent`,

    '&:active, &:hover': {
      borderLeft: `${borderWidth}px solid ${hoverColor}`,
      borderRight: `${borderWidth}px solid ${hoverColor}`,
      cursor: 'col-resize',
    },
  };
});
