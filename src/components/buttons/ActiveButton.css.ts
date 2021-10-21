import { composeStyles, style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import {
  buttonBase,
  buttonLarge,
  buttonRaised,
} from './base.css';

export const activeButtonStyle = composeStyles(
  buttonBase,
  buttonLarge,
  buttonRaised,
  style({
    background: theme.color.white,
    color: theme.color.green['300'],
    ':active': {
      background: theme.color.gray['200'],
    },
  })
);