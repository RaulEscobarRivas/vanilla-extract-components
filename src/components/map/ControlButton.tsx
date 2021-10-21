import React from "react";
import classNames from "classnames";
import { ActiveButton } from "../buttons/ActiveButton";
import { controlButtonStyle } from "./ControlButton.css";

export function ControlButton({ className, ...props}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <ActiveButton className={classNames(controlButtonStyle, className)} {...props} />
  );
}

