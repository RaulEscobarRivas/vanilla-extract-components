import { composeStyles, style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import {
  buttonBase,
  buttonLarge,
} from './base.css';

export const ghostButtonStyle = composeStyles(
  buttonBase,
  buttonLarge,
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