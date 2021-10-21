import React from "react";
import { Svg, SvgProps } from "../components/svg/Svg";

export function PlusIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="M12 4a1.5 1.5 0 0 1 1.5 1.5v5h5a1.5 1.5 0 0 1 0 3h-5v5a1.5 1.5 0 0 1-3 0v-5h-5a1.5 1.5 0 0 1 0-3l5-.001V5.5A1.5 1.5 0 0 1 12 4z" />
    </Svg>
  );
}
