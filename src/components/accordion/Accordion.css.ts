import { style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const accordionStyle = style({
  background: theme.color.white,
  borderRadius: 4,
  boxShadow: theme.shadow.soft,
  overflow: 'hidden',
});