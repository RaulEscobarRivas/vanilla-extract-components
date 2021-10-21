import React, { useState } from "react";
import classNames from "classnames";
import { inputGroupStyle } from "./InputGroup.css";
import { InputContext } from "./context";
import { InputGroupProps } from "./types";

export function InputGroup(props: InputGroupProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { className, ...otherProps } = props;
  const classes = classNames(inputGroupStyle, className);

  return (
    <InputContext.Provider value={{ isFocused, setIsFocused }}>
      <div className={classes} {...otherProps} />
    </InputContext.Provider>
  );
}
