import { composeStyles, style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import {
  buttonBase,
  buttonSmall,
  buttonRaised,
} from './base.css';

export const primaryButtonSmallStyle = composeStyles(
  buttonBase,
  buttonSmall,
  buttonRaised,
  style({
    background: theme.color.green['300'],
    color: theme.color.white,
    ':active': {
      background: theme.color.green['400'],
    },
  })
);