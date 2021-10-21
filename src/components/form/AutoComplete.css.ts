import { style } from '@vanilla-extract/css';

export const autocompleteStyle = style({
  position: 'relative',
});

export const autocompleteListStyle = style({
  paddingTop: 8,
  position: 'absolute',
  top: '100%',
  width: '100%',
  zIndex: 50,
});