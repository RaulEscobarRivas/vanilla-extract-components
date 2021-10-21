import React from 'react';
import classNames from 'classnames';
import { darkLinkStyle } from './DarkLink.css';
import { LinkProps } from './types';

export function DarkLink(props: LinkProps) {
  const { className, ...otherProps} = props;
  const classes = classNames(darkLinkStyle, className);

  return (
    <a className={classes} {...otherProps} />
  );
}
