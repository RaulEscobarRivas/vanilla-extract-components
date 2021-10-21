import classNames from "classnames";
import { HeadingProps } from "./types";
import { headingBase, subheadingBase, sizeStyle } from "./Heading.css";
import {
  shadowStyle,
  colorStyle,
  textAlignStyle,
  ellipsisStyle,
} from "./variants.css";

const subheadings = ["h4", "h5", "h6"];

const isSubheading = (size: string) => subheadings.includes(size);

export const useHeadingStyles = ({
  color,
  ellipsis,
  shadow,
  size,
  textAlign,
}: HeadingProps) => {
  const shouldApplySubheadingBase = isSubheading(size);

  return classNames(
    colorStyle[color],
    textAlignStyle[textAlign],
    sizeStyle[size],
    {
      [shadowStyle]: shadow,
      [ellipsisStyle]: ellipsis,
      [headingBase]: !shouldApplySubheadingBase,
      [subheadingBase]: shouldApplySubheadingBase,
    }
  );
};
