import styled from 'styled-components';

export default styled.div<{ orientation: 'horizontal' | 'vertical' }>(
  ({ orientation }) => ({
    display: 'flex',
    height: '100%',
    width: '100%',

    flexDirection: orientation === 'vertical' ? 'row' : 'column',

    '&:active': {
      cursor: orientation === 'vertical' ? 'col-resize' : 'row-resize',
    },
  })
);
