import styled from 'styled-components';
import { Orientation } from '../common/types';

export default styled.div<{ orientation: Orientation }>(({ orientation }) => ({
  display: 'flex',
  height: '100%',
  width: '100%',

  flexDirection: orientation === 'vertical' ? 'row' : 'column',

  '&:active': {
    cursor: orientation === 'vertical' ? 'col-resize' : 'row-resize',
  },
}));
