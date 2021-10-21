import React from 'react';
import { Item } from '@radix-ui/react-accordion';
import { itemStyle } from './AccordionItem.css';

export const AccordionItem: React.FC<any> = (props) => (
  <Item {...props} className={itemStyle} />
);