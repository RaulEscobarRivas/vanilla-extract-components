import { composeStyles, style } from '@vanilla-extract/css';
import { formElementSize } from '../_shared/styles.css';
import { theme } from '../../theme.css';

export const inputAddonStyle = style({
  alignItems: 'center',
  display: 'flex',
  height: formElementSize,
  justifyContent: 'center',
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  width: formElementSize,
});

export const inputAddonLeftStyle = composeStyles(
  inputAddonStyle,
  style({
    left: 0,
  }),
);

export const inputAddonRightStyle = composeStyles(
  inputAddonStyle,
  style({
    right: 0,
  }),
);

export const inputAddonIconStyle = style({
  fill: theme.color.gray['400'],
  height: '20px',
  width: '20px',
  selectors: {
    [`${inputAddonStyle} &`]: {
      marginLeft: '6px',
    },
  }
});

export const inputAddonIconFocusedStyle = style({
  fill: theme.color.green['400'],
});