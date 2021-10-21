import { style, styleVariants } from '@vanilla-extract/css';
import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
} from '../../constants/media';

export const sizeStyle = styleVariants({
  xs: {
    fontSize: '12px',
    lineHeight: '18px',
    '@media': {
      [SCREEN_LG]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      [SCREEN_XL]: {
        lineHeight: '22px',
      },
    },
  },
  sm: {
    fontSize: '14px',
    lineHeight: '20px',
    '@media': {
      [SCREEN_MD]: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      [SCREEN_XL]: {
        fontSize: '18px',
        lineHeight: '26px',
      },
    },
  },
  md: {
    fontSize: '16px',
    lineHeight: '22px',
    '@media': {
      [SCREEN_SM]: {
        lineHeight: '24px',
      },
      [SCREEN_MD]: {
        fontSize: '18px',
        lineHeight: '26px',
      },
      [SCREEN_XL]: {
        fontSize: '20px',
        lineHeight: '28px',
      },
    },
  },
  lg: {
    fontSize: '18px',
    lineHeight: '24px',
    '@media': {
      [SCREEN_MD]: {
        fontSize: '20px',
        lineHeight: '28px',
      },
      [SCREEN_XL]: {
        fontSize: '22px',
        lineHeight: '32px',
      },
    },
  },
  xl: {
    fontSize: '24px',
    lineHeight: '32px',
    '@media': {
      [SCREEN_MD]: {
        fontSize: '28px',
        lineHeight: '36px',
      },
      [SCREEN_XL]: {
        fontSize: '34px',
        lineHeight: '42px',
      },
    },
  },
});

export const copyBase = style({
  fontFamily: 'Source Sans Pro, sans-serif',
  margin: 0,
});