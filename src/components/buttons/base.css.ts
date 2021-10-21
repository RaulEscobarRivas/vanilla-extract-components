import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import {
  SCREEN_SM,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_MD_LG,
  SCREEN_LG_XL,
} from '../../constants/media'

export const buttonBase = style({
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 600,
  letterSpacing: '4px',
  outline: 'none',
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'box-shadow 0.1s ease-out, transform 0.1s ease-out',
  ':active': {
    boxShadow: theme.shadow.strong,
    transform: 'translateY(2px)',
  },
  ':focus': {
    boxShadow: theme.shadow.strong,
  },
  ':hover': {
    boxShadow: theme.shadow.strong,
  },
});

export const buttonSmall = style({
  fontSize: '12px',
  lineHeight: '16px',
  padding: '8px 16px',
  '@media': {
    [SCREEN_MD_LG]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    [SCREEN_LG_XL]: {
      fontSize: '14px',
    },
    [SCREEN_LG]: {
      lineHeight: '20px',
      paddingLeft: '24px',
      paddingRight: '24px',
    },
    [SCREEN_XL]: {
      fontSize: '16px',
    },
  },
});

export const buttonLarge = style({
  fontSize: '14px',
  lineHeight: 1.25,
  padding: '14px 32px',
  '@media': {
    [SCREEN_SM]: {
      lineHeight: 1.5,
    },
    [SCREEN_LG]: {
      fontSize: '16px',
    },
    [SCREEN_XL]: {
      paddingTop: '16px',
      paddingBottom: '16px',
    }
  },
});

export const buttonRaised = style({
  border: 0,
  boxShadow: theme.shadow.soft,
});