import React from "react";
import classNames from "classnames";
import { listboxSizes, listboxStyle } from "./ListBox.css";

export function ListBox(props) {
  const classes = classNames(listboxStyle, props?.className, {
    [listboxSizes[String(props.visibleItems)]]: props.visibleItems,
  });

  return <ul className={classes}>{props.children}</ul>;
}
