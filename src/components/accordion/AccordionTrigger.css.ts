import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import {
  SCREEN_BELOW_MD,
  SCREEN_BELOW_LG,
  SCREEN_MD_LG,
  SCREEN_MD_XL,
  SCREEN_LG_XL,
  SCREEN_LG,
  SCREEN_XL,
} from '../../constants/media';

export const headerStyle = style({
  margin: 0,
});

export const iconStyle = style({
  fill: theme.color.gray['400'],
  marginLeft: 16,
  transition: 'transform 0.3s ease-in-out', 
  '@media': {
    [SCREEN_BELOW_LG]: {
      width: 28,
    },
    [SCREEN_LG_XL]: {
      width: 30,
    },
    [SCREEN_XL]: {
      width: 32,
    },
  },
  selectors: {
    '[data-state="closed"] &': {
      transform: 'rotate(-90deg)',
    },
    '[data-state="open"] &': {
      transform: 'rotate(90deg)',
    }
  }
});

export const triggerStyle = style({
  alignItems: 'start',
  background: 'none',
  border: 0,
  color: theme.color.gray['800'],
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'inherit',
  fontWeight: 600,
  justifyContent: 'space-between',
  textAlign: 'left',
  width: '100%',
  ':focus': {
    background: theme.color.gray['200'],
  },
  ':hover': {
    background: theme.color.gray['200'],
  },
  '@media': {
    [SCREEN_BELOW_MD]: {
      fontSize: 18,
      lineHeight: '24px',
      padding: '16px 24px',
    },
    [SCREEN_MD_LG]: {
      padding: 24,
    },
    [SCREEN_MD_XL]: {
      fontSize: 20,
      lineHeight: '28px',
    },
    [SCREEN_LG]: {
     padding: 32,
    },
    [SCREEN_XL]: {
     fontSize: 22,
     lineHeight: '32px',
    }
  },
});