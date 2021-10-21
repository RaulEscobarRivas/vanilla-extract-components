import React from 'react';
import { Content } from '@radix-ui/react-accordion';
import { contentStyle } from './AccordionContent.css';

export const AccordionContent: React.FC<any> = (props) => (
  <Content {...props} className={contentStyle} />
);