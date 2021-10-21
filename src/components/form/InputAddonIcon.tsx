import React, { useContext } from "react";
import classNames from 'classnames';
import { inputAddonIconStyle, inputAddonIconFocusedStyle } from './InputAddon.css';
import { InputContext } from './context';
import { InputIconProps } from './types';

export function InputAddonIcon(props: InputIconProps) {
  const { className, ...otherProps } = props;
  const { isFocused } = useContext(InputContext);
  const classes = classNames(
    inputAddonIconStyle,
    className,
    {
      [inputAddonIconFocusedStyle]: isFocused,
    }
  );

  return (
    <span className={classes} {...otherProps} />
  );
}