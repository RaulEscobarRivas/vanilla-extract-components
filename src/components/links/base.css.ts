import { style } from "@vanilla-extract/css";
import { theme } from "../../theme.css";

export const linkBase = style({
  padding: 0,
  margin: 0,
  color: theme.color.gray["800"],
  fontFamily: "Source Sans Pro, sans-serif",
  cursor: "pointer",
  fontStyle: "normal",
  fontStretch: "normal",
  appearance: "none",
  textDecoration: "none",
  outline: "none",
  letterSpacing: 0,
});
