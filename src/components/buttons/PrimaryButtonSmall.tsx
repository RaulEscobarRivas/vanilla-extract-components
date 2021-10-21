import React from "react";
import { primaryButtonSmallStyle } from './PrimaryButtonSmall.css';
import { ButtonProps } from './types';
import { useButton } from '../../hooks/useButton';

export function PrimaryButtonSmall(buttonProps: ButtonProps) {
  const [Tag, props] = useButton(buttonProps, {
    className: primaryButtonSmallStyle,
  });

  return (
    <Tag {...props} />
  );
}