import React from "react";
import { listboxOptionStyle } from "./ListBoxOption.css";

export function ListBoxOption({ id, label, onSelect }) {
  function handleSelect() {
    onSelect(id);
  }

  return (
    <li className={listboxOptionStyle} onClick={handleSelect}>
      {label}
    </li>
  );
}
