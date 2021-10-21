import React from "react";
import { Svg, SvgProps } from "../components/svg/Svg";

export function RowsIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="M20 20v-3.2H4V20h16zm0-6.4v-3.2H4v3.2h16zM4 7.2h16V4H4v3.2z" />
    </Svg>
  );
}
