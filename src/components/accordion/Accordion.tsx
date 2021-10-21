import React from 'react';
import classNames from 'classnames';
import { Root } from '@radix-ui/react-accordion';
import type { AccordionPrimitive } from '@radix-ui/react-accordion';
import { accordionStyle } from './Accordion.css';

interface AccordionType extends AccordionPrimitive {
  className?: string,
  type: 'single' | 'multiple',
};

export const Accordion: React.FC<AccordionType> = (props) => {
  const classes = classNames(accordionStyle, props.className);

  return <Root {...props} className={classes} />;
}