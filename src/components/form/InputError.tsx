import React from "react";
import classNames from 'classnames';
import { inputErrorStyle } from './InputError.css';
import { InputErrorProps } from './types';

export function InputError(props: InputErrorProps) {
  const { className, ...otherProps } = props;
  const classes = classNames(
    inputErrorStyle,
    className,
  );

  return (
    <p className={classes} {...otherProps} />
  );
}