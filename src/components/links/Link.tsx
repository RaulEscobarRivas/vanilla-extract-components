import React from 'react';
import classNames from 'classnames';
import { linkBase } from './base.css';
import { LinkProps } from './types';

export function Link(props: LinkProps) {
  const { className, ...otherProps} = props;
  const classes = classNames(linkBase, className);

  return (
    <a className={classes} {...otherProps} />
  );
}
