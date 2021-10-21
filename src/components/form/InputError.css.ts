import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import { SCREEN_LG } from '../../constants/media';

export const inputErrorStyle = style({
  color: theme.color.red['600'],
  marginTop: 8,
  marginBottom: 0,
  '@media': {
    [SCREEN_LG]: {
      marginTop: 12,
    }
  }
});