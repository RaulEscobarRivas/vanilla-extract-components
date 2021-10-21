import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import { SCREEN_BELOW_SM, SCREEN_SM_MD, SCREEN_MD, SCREEN_BELOW_LG, SCREEN_LG_XL, SCREEN_XL } from '../../constants/media';

export const controlButtonStyle = style({
  position: "relative",
  padding: 0,
  transition: "color 0.15s ease-out 0s",
  color: theme.color.gray[800],
  ":hover": {
    color: theme.color.green[300],
  },
  '@media': {
    [SCREEN_BELOW_LG]: {
      width: "30px",
      height: "30px" 
    },
    [SCREEN_LG_XL]: {
      width: "32px",
      height: "32px",
    },
    [SCREEN_XL]: {
      width: "34px",
      height: "34px",
    },
  },
  selectors:{
    '&:first-child': {
      '@media': {
        [SCREEN_BELOW_SM]: {
          marginBottom: '16px',
        },
        [SCREEN_SM_MD]: {
          marginBottom: '18px',
        },
        [SCREEN_MD]: {
          marginBottom: '20px',
        },
      },
    },
    '&:nth-child(2n)': {
      marginBottom: '1px',
    },
  },
});