import React from "react";
import { ghostButtonSmallStyle } from './GhostButtonSmall.css';
import { ButtonProps } from './types';
import { useButton } from '../../hooks/useButton';

export function GhostButtonSmall(buttonProps: ButtonProps) {
  const [Tag, props] = useButton(buttonProps, {
    className: ghostButtonSmallStyle,
  });

  return (
    <Tag {...props} />
  );
}