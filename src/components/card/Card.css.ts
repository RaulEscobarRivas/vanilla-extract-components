import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../theme.css";
import {
  SCREEN_BELOW_MD,
  SCREEN_MD,
  SCREEN_BELOW_SM,
  SCREEN_SM_LG,
  SCREEN_LG,
  SCREEN_SM,
} from "../../constants/media";

export const cardStyle = style({
  backgroundColor: theme.color.white,
  boxShadow: theme.shadow.soft,
  height: "100%",
  width: "100%",
});

export const radiusStyle = styleVariants({
  xl: {
    "@media": {
      [SCREEN_BELOW_MD]: {
        borderRadius: "15px",
      },
      [SCREEN_MD]: {
        borderRadius: "20px",
      },
    },
  },
  lg: {
    "@media": {
      [SCREEN_BELOW_SM]: {
        borderRadius: "5px",
      },
      [SCREEN_SM_LG]: {
        borderRadius: "10px",
      },
      [SCREEN_LG]: {
        borderRadius: "15px",
      },
    },
  },
  md: {
    "@media": {
      [SCREEN_BELOW_SM]: {
        borderRadius: "5px",
      },
      [SCREEN_SM]: {
        borderRadius: "10px",
      },
    },
  },
  sm: {
    borderRadius: "4px",
  },
});

export const hoverStyle = style({
  transition: "box-shadow 0.3s ease-in-out",
  ":hover": {
    boxShadow: theme.shadow.strong,
  },
});
