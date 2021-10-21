import { composeStyles, style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import { linkBase } from './base.css';

export const primaryLinkStyle = composeStyles(
  linkBase,
  style({
    color: theme.color.green['300'],
    transition: 'color 0.1s ease-out 0s, transform 0.1s ease-out 0s',
    ':hover': {
      color: theme.color.green['400']
    },
    ':active': {
      color: theme.color.green['400']
    },
  })
);
