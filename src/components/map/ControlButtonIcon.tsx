import React from "react";
import { controlButtonIconStyle } from "./ControlButtonIcon.css";

type ControlButtonIconProps = React.HTMLAttributes<SVGAElement> & {
  icon: React.FunctionComponent
};

export function ControlButtonIcon({ icon: Icon, ...props }: ControlButtonIconProps) {
  return (
    <Icon className={controlButtonIconStyle} {...props} />
  );
};
