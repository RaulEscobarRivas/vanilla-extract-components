import { composeStyles, style } from '@vanilla-extract/css';
import { theme } from '../../theme.css';
import { listboxStyle } from "../listbox/ListBox.css";

export const menuStyle = composeStyles(
  listboxStyle,
  style({
    marginTop: 6,
    marginBottom: 6,
  }),
);

export const menuItemStyle = style({
  background: 'transparent',
  border: 0,
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  height: 48,
  outline: 'none',
  padding: 12,
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  ':focus': {
    background: theme.color.green['300'],
    color: theme.color.white,
  },
  ':hover': {
    background: theme.color.green['300'],
    color: theme.color.white,
  },
  ':first-child': {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  ':last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  }
});

export const menuItemSelectedStyle = style({
  color: theme.color.green['300']
});
