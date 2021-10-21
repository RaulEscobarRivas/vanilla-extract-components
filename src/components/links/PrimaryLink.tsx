import React from 'react';
import classNames from 'classnames';
import { primaryLinkStyle } from './PrimaryLink.css';
import { LinkProps } from './types';

export function PrimaryLink(props: LinkProps) {
  const { className, ...otherProps} = props;
  const classes = classNames(primaryLinkStyle, className);

  return (
    <a className={classes} {...otherProps} />
  );
}
