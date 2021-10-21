import React from "react";
import { primaryButtonStyle } from './PrimaryButton.css';
import { ButtonProps } from './types';
import { useButton } from '../../hooks/useButton';

export function PrimaryButton(buttonProps: ButtonProps) {
  const [Tag, props] = useButton(buttonProps, {
    className: primaryButtonStyle,
  });

  return (
    <Tag {...props} />
  );
}