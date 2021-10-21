import React from "react";
import classNames from 'classnames';
import { inputAddonLeftStyle } from './InputAddon.css';
import { InputAddonProps } from './types';

export function InputAddonLeft(props: InputAddonProps) {
  const { className, ...otherProps } = props;
  const classes = classNames(
    inputAddonLeftStyle,
    className,
  );

  return (
    <div className={classes} {...otherProps} />
  );
}