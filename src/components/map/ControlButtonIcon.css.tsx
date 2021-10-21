import { style } from '@vanilla-extract/css';
import { SCREEN_BELOW_LG, SCREEN_LG_XL, SCREEN_XL } from '../../constants/media';

export const controlButtonIconStyle = style({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  fill: "currentcolor",
  '@media': {
    [SCREEN_BELOW_LG]: {
      width: "20px",
      height: "20px" 
    },
    [SCREEN_LG_XL]: {
      width: "22px",
      height: "22px",
    },
    [SCREEN_XL]: {
      width: "24px",
      height: "24px",
    },
  },
});