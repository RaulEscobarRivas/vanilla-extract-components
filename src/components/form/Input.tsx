import React, { useCallback, useContext } from "react";
import classNames from "classnames";
import { inputStyle, inputErrorStyle } from "./Input.css";
import { useInput } from "../../hooks/useInput";
import { InputContext } from "./context";
import { InputProps } from "./types";

export function Input(props: InputProps) {
  const {
    className,
    initialValue,
    isInvalid,
    onChange,
    onBlur,
    onFocus,
    ...otherProps
  } = props;
  const { setIsFocused } = useContext(InputContext);
  const inputClasses = classNames(inputStyle, className, {
    [inputErrorStyle]: isInvalid,
  });

  const handleBlur = useCallback(
    (event) => {
      if (onBlur) {
        onBlur(event);
      }

      // Here we inform the InputGroup that we have lost focus.
      if (setIsFocused) {
        setIsFocused(false);
      }
    },
    [onBlur]
  );

  const handleFocus = useCallback(
    (event) => {
      if (onFocus) {
        onFocus(event);
      }

      // Here we inform the InputGroup that we have gained focus.
      if (setIsFocused) {
        setIsFocused(true);
      }
    },
    [onFocus]
  );

  // Here we setup a controlled value to manage the input value. It will be
  // kept in sync with the field value or a control prop.
  const [value, setValue] = useInput({
    value: props.value || initialValue,
    onChange,
  });

  return (
    <input
      {...otherProps}
      className={inputClasses}
      onBlur={handleBlur}
      onChange={setValue}
      onFocus={handleFocus}
      value={value}
    />
  );
}

Input.defaultProps = {
  type: "text",
};
