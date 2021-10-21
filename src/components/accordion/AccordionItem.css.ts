import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const itemStyle = style({
  selectors: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.color.gray['300']}`,
    }
  }
});