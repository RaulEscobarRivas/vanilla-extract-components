import React from "react";
import { Svg, SvgProps } from "../components/svg/Svg";

export function CrossIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="M10.514 11.744L4.21 5.31l-.708-.724L4.918 3.14l.708.723 6.305 6.435 6.443-6.575.708-.723L20.5 4.446l-.708.723-6.443 6.575 6.944 7.087.708.723L19.583 21l-.708-.723-6.944-7.087-6.806 6.947-.708.723L3 19.414l.708-.724 6.806-6.946z" />
    </Svg>
  );
}
