import React from "react";
import { Root as Menu, Content, Item, Trigger as MenuTrigger } from '@radix-ui/react-dropdown-menu';
import classNames from "classnames";
import { menuStyle, menuItemStyle, menuItemSelectedStyle } from "./Menu.css";

function MenuList(props) {
  const classes = classNames(menuStyle, props.className);

  return (
    <Content {...props} className={classes} />
  );
}

function MenuListItem(props) {
  const { className, active, ...otherProps } = props;
  const classes = classNames(
    menuItemStyle,
    className,
    {
      [menuItemSelectedStyle]: active,
    }
  );

  return (
    <Item
      className={classes}
      {...otherProps}
    />
  );
};

export { Menu, MenuList, MenuListItem, MenuTrigger };