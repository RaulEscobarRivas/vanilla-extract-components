import { composeStyles, style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import {
  buttonBase,
  buttonSmall,
} from './base.css';

export const ghostButtonSmallStyle = composeStyles(
  buttonBase,
  buttonSmall,
  style({
    background: 'none',
    border: '1px solid currentColor',
    color: theme.color.white,
    ':active': {
      background: theme.color.white,
      borderColor: theme.color.white,
      color: theme.color.gray['200'],
    },
    ':focus': {
      background: theme.color.white,
      borderColor: theme.color.white,
      color: theme.color.gray['800'],
    },
    ':hover': {
      background: theme.color.white,
      borderColor: theme.color.white,
      color: theme.color.gray['800'],
    },
  })
);