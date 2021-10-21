import React from "react";
import { ghostButtonStyle } from './GhostButton.css';
import { ButtonProps } from './types';
import { useButton } from '../../hooks/useButton';

export function GhostButton(buttonProps: ButtonProps) {
  const [Tag, props] = useButton(buttonProps, {
    className: ghostButtonStyle,
  });

  return (
    <Tag {...props} />
  );
}
