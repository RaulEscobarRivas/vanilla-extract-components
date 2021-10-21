import React from 'react';
import { Svg, SvgProps } from '../components/svg/Svg';

export function CaretIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path fillRule="evenodd" d="M18 8H6l6 8z"/>
    </Svg>
  );
}