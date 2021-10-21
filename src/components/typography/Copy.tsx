import React from "react";
import { useAsProp } from "../../hooks/useAsProp";
import { useCopyStyles } from "./useCopyStyles";
import { CopyProps } from "./types";

export function Copy({
  bold,
  color = "gray.800",
  ellipsis,
  extraLight,
  shadow,
  size = "md",
  textAlign,
  ...rest
}: CopyProps) {
  const [Tag, props] = useAsProp(
    { as: "p", ...rest },
    {
      className: useCopyStyles({
        bold,
        color,
        ellipsis,
        extraLight,
        shadow,
        size,
        textAlign,
      }),
    }
  );

  return <Tag {...props} />;
}
