import React from "react";
import { Svg, SvgProps } from "../components/svg/Svg";

export function FullScreenIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="M19.667 21h-5.334a1.333 1.333 0 0 1 0-2.667h4v-4a1.333 1.333 0 0 1 2.667 0v5.334c0 .736-.597 1.333-1.333 1.333z" />
      <path
        d="M19.667 11h-5.334a1.333 1.333 0 0 1 0-2.667h4v-4a1.333 1.333 0 0 1 2.667 0v5.334c0 .736-.597 1.333-1.333 1.333z"
        transform="matrix(1 0 0 -1 0 14)"
      />
      <path
        d="M9.667 21H4.333a1.333 1.333 0 0 1 0-2.667h4v-4a1.333 1.333 0 0 1 2.667 0v5.334C11 20.403 10.403 21 9.667 21z"
        transform="matrix(-1 0 0 1 14 0)"
      />
      <path
        d="M9.667 11H4.333a1.333 1.333 0 0 1 0-2.667h4v-4a1.333 1.333 0 0 1 2.667 0v5.334C11 10.403 10.403 11 9.667 11z"
        transform="rotate(180 7 7)"
      />
    </Svg>
  );
}
