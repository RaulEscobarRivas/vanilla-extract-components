import React from "react";
import { Svg, SvgProps } from "../components/svg/Svg";

export function MinusIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 4a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-3 0v-13A1.5 1.5 0 0 1 12 4z"
        transform="rotate(90 12 12)"
      />
    </Svg>
  );
}
