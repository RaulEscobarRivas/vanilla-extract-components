import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const listboxOptionStyle = style({
  cursor: "pointer",
  display: "flex",
  height: 48,
  outline: "none",
  padding: 12,
  ":hover": {
    background: theme.color.green["300"],
    color: theme.color.white,
  },
  ":first-child": {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  ":last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});
