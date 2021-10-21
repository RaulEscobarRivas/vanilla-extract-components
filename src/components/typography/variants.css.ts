import { style, styleVariants } from "@vanilla-extract/css";
import flatten from "flat";
import { theme } from "../../theme";

export const colorStyle = styleVariants(flatten({ ...theme.color, current: "currentColor" }), (color) => ({
  color,
}));

export const shadowStyle = style({
  textShadow: "0 2px 4px rgba(63, 65, 68, 0.3)",
});

export const ellipsisStyle = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const extraLightStyle = style({
  fontWeight: 200,
});

export const boldStyle = style({
  fontWeight: 600,
});

export const textAlignStyle = styleVariants({
  left: { textAlign: "left" },
  right: { textAlign: "right" },
  center: { textAlign: "center" },
});
