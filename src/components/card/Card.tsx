import React from "react";
import classNames from "classnames";
import { useAsProp } from "../../hooks/useAsProp";
import { cardStyle, radiusStyle, hoverStyle } from "./Card.css";
import { CardProps } from "./types";

export function Card({ radius = "sm", withHover = false, ...rest }: CardProps) {
  const [Tag, props] = useAsProp(
    { as: "div", ...rest },
    {
      className: classNames(cardStyle, radiusStyle[radius], {
        [hoverStyle]: withHover,
      }),
    }
  );

  return <Tag {...props} />;
}
