import React from "react";
import { Input } from './Input';
import { InputProps } from './types';

export function InputPassword(props: InputProps) {
  return (
    <Input {...props} type="password" />
  );
}
