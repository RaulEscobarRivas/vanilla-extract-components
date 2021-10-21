import { style, styleVariants } from '@vanilla-extract/css';
import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
} from '../../constants/media';

export const sizeStyle = styleVariants({
  superhero: {
    fontSize: '52px',
    lineHeight: '62px',
    '@media': {
      [SCREEN_SM]: {
        fontSize: '66px',
        lineHeight: '78px',
      },
      [SCREEN_LG]: {
        fontSize: '82px',
        lineHeight: '98px',
      },
      [SCREEN_XL]: {
        fontSize: '102px',
        lineHeight: '116px',
      },
    },
  },
  h1: {
    fontSize: '34px',
    lineHeight: '40px',
    '@media': {
      [SCREEN_SM]: {
        fontSize: '42px',
        lineHeight: '48px',
      },
      [SCREEN_MD]: {
        fontSize: '48px',
        lineHeight: '58px',
      },
      [SCREEN_LG]: {
        fontSize: '64px',
        lineHeight: '74px',
      },
      [SCREEN_XL]: {
        fontSize: '72px',
        lineHeight: '88px',
      },
    },
  },
  h2: {
    fontSize: '26px',
    lineHeight: '34px',
    '@media': {
      [SCREEN_MD]: {
        fontSize: '32px',
        lineHeight: '38px',
      },
      [SCREEN_LG]: {
        fontSize: '38px',
        lineHeight: '46px',
      },
      [SCREEN_XL]: {
        fontSize: '42px',
        lineHeight: '54px',
      },
    },
  },
  h3: {
    fontSize: '22px',
    lineHeight: '30px',
    '@media': {
      [SCREEN_SM]: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      [SCREEN_MD]: {
        fontSize: '26px',
        lineHeight: '34px',
      },
      [SCREEN_LG]: {
        fontSize: '28px',
        lineHeight: '36px',
      },
      [SCREEN_XL]: {
        fontSize: '30px',
        lineHeight: '40px',
      },
    },
  },
  h4: {
    fontSize: '14px',
    lineHeight: '18px',
    '@media': {
      [SCREEN_SM]: {
        lineHeight: '20px',
      },
      [SCREEN_LG]: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      [SCREEN_XL]: {
        fontSize: '18px',
        lineHeight: '28px',
      },
    },
  },
  h5: {
    fontSize: '12px',
    lineHeight: '16px',
    '@media': {
      [SCREEN_LG]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      [SCREEN_XL]: {
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
  },
  h6: {
    fontSize: '10px',
    lineHeight: '14px',
    '@media': {
      [SCREEN_LG]: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      [SCREEN_XL]: {
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
  },
});

export const headingBase = style({
  fontFamily: '"Playfair Display", serif',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  fontWeight: 'bold',
  margin: 0,
});

export const subheadingBase = style({
  fontFamily: 'Montserrat, sans-serif',
  fontStretch: 'normal',
  letterSpacing: '4px',
  textTransform: 'uppercase',
  fontWeight: 600,
  margin: 0,
});
