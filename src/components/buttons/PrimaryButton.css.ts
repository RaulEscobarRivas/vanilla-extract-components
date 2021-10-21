import { composeStyles, style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import {
  buttonBase,
  buttonLarge,
  buttonRaised,
} from './base.css';

export const primaryButtonStyle = composeStyles(
  buttonBase,
  buttonLarge,
  buttonRaised,
  style({
    background: theme.color.green['300'],
    color: theme.color.white,
    ':active': {
      background: theme.color.green['400'],
    },
  })
);