import React from 'react';
import classNames from 'classnames';
import { linkStyle } from './Link.css';
import { LinkProps } from './types';

export function Link(props: LinkProps) {
  const { className, ...otherProps} = props;
  const classes = classNames(linkStyle, className);

  return (
    <a className={classes} {...otherProps} />
  );
}
