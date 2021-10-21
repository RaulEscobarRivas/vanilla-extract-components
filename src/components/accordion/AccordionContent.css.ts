import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import {
  SCREEN_BELOW_SM,
  SCREEN_SM_MD,
  SCREEN_MD_XL,
  SCREEN_XL,
} from '../../constants/media';

export const contentStyle = style({
  borderTop: `1px solid ${theme.color.gray['300']}`,
  '@media': {
    [SCREEN_BELOW_SM]: {
      padding: 16,
    },
    [SCREEN_SM_MD]: {
      padding: '20px 24px',
    },
    [SCREEN_MD_XL]: {
      padding: '24px 32px',
    },
    [SCREEN_XL]: {
      padding: 32,
    },
  }
});