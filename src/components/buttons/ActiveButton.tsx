import React from "react";
import { activeButtonStyle } from './ActiveButton.css';
import { ButtonProps } from './types';
import { useButton } from '../../hooks/useButton';

export const ActiveButton = React.forwardRef<HTMLButtonElement, ButtonProps>((buttonProps, ref) => {
  const [Tag, props]: [React.ComponentType | string, any] = useButton(buttonProps, {
    className: activeButtonStyle,
  });

  return (
    <Tag {...props} ref={ref} />
  );
});

