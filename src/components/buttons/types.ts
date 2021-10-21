import React from "react";
export interface ButtonProps {
  as?: 'a' | 'button',
  [x: string]: any,
  ref?: React.Ref<HTMLButtonElement>
}