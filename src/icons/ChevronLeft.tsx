import React from "react";
import { Svg, SvgProps } from "../components/svg/Svg";

export function ChevronLeftIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path
        fillRule="evenodd"
        d="M14.725 5.5L7 11.999l7.725 6.501L16 17.041 10.011 12 16 6.959z"
      />
    </Svg>
  );
}
