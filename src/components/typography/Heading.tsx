import React from "react";
import { useAsProp } from "../../hooks/useAsProp";
import { useHeadingStyles } from "./useHeadingStyles";
import { HeadingProps } from "./types";

const defaultAsAndSize = "h1";

export function Heading({
  color = "gray.800",
  ellipsis,
  size = defaultAsAndSize,
  shadow,
  textAlign,
  ...rest
}: HeadingProps) {
  const [Tag, props] = useAsProp(
    { as: defaultAsAndSize, ...rest },
    {
      className: useHeadingStyles({
        color,
        ellipsis,
        size,
        shadow,
        textAlign,
      }),
    }
  );

  return <Tag {...props} />;
}
