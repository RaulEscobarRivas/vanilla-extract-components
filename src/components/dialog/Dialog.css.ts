import { style, keyframes } from "@vanilla-extract/css";
import {
  SCREEN_BELOW_LG,
  SCREEN_LG_XL,
  SCREEN_XL,
} from "../../constants/media";
import { theme } from "../../theme.css";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const overlayStyle = style({
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  animation: `${fadeIn} 250ms`,
  position: "fixed",
  inset: 0,
});

export const closeStyle = style({
  position: "absolute",
  zIndex: 1,
  top: "16px",
  right: "16px",
  borderRadius: "100%",
  padding: 0,
  lineHeight: 0,
  transition: "color 0.15s ease-out 0s",
  color: theme.color.gray[800],
  ":hover": {
    color: theme.color.green[300],
  },
  "@media": {
    [SCREEN_BELOW_LG]: {
      width: "32px",
      height: "32px",
    },
    [SCREEN_LG_XL]: {
      width: "34px",
      height: "34px",
    },
    [SCREEN_XL]: {
      width: "36px",
      height: "36px",
    },
  },
});

export const crossIconStyle = style({
  fill: "currentcolor",
  "@media": {
    [SCREEN_BELOW_LG]: {
      width: "20px",
      height: "20px",
    },
    [SCREEN_LG_XL]: {
      width: "22px",
      height: "22px",
    },
    [SCREEN_XL]: {
      width: "24px",
      height: "24px",
    },
  },
});

export const contentStyle = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
