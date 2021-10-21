import { createVar, globalStyle } from '@vanilla-extract/css';
import {
  SCREEN_XL,
  SCREEN_MD_XL,
} from '../../constants/media';

export const formElementSize = createVar();

globalStyle(':root', {
  vars: {
    [formElementSize]: '46px',
  },
  '@media': {
    [SCREEN_MD_XL]: {
      vars: {
        [formElementSize]: '50px',
      },
    },
    [SCREEN_XL]: {
      vars: {
        [formElementSize]: '56px',
      },
    }
  }
});