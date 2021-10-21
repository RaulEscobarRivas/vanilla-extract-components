import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import { formElementSize } from "../_shared/styles.css";
import { inputAddonStyle } from './InputAddon.css';
import { SCREEN_MD_XL, SCREEN_XL } from '../../constants/media';

export const inputStyle = style({
  background: 'transparent',
  border: `1px solid ${theme.color.gray['400']}`,
  borderRadius: '4px',
  color: theme.color.gray['800'],
  fontFamily: 'inherit',
  fontSize: '16px',
  height: formElementSize,
  outline: 'none',
  padding: '12px',
  width: '100%',
  ':focus': {
    borderColor: theme.color.green['400'],
  },
  '@media': {
    [SCREEN_MD_XL]: {
      fontSize: '18px',
    },
    [SCREEN_XL]: {
      fontSize: '20px',
    }
  },
  selectors: {
    [`${inputAddonStyle} + &`]: {
      paddingLeft: formElementSize,
    },
  },
});

export const inputErrorStyle = style({
  borderColor: theme.color.red['600'],
});