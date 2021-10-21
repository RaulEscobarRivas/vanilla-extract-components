import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const listboxStyle = style({
  background: theme.color.white,
  borderRadius: 4,
  boxShadow: theme.shadow.strong,
  color: theme.color.gray['800'],
  fontSize: 18,
  listStyle: 'none',
  margin: 0,
  overflow: 'auto',
  paddingLeft: 0,
});

export const listboxSizes = styleVariants({
  '3': { maxHeight: 48 * 3 },
  '4': { maxHeight: 48 * 4 },
  '5': { maxHeight: 48 * 5 },
  '6': { maxHeight: 48 * 6 },
});