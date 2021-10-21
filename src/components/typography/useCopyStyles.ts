import classNames from "classnames";
import { CopyProps } from "./types";
import { copyBase, sizeStyle } from "./Copy.css";
import {
  shadowStyle,
  colorStyle,
  textAlignStyle,
  ellipsisStyle,
  boldStyle,
  extraLightStyle,
} from "./variants.css";

export const useCopyStyles = ({
  bold,
  color,
  ellipsis,
  extraLight,
  shadow,
  size,
  textAlign,
}: CopyProps) =>
  classNames(
    copyBase,
    colorStyle[color],
    textAlignStyle[textAlign],
    sizeStyle[size],
    {
      [shadowStyle]: shadow,
      [ellipsisStyle]: ellipsis,
      [boldStyle]: bold,
      [extraLightStyle]: extraLight,
    }
  );
