import React from 'react';
import { Svg, SvgProps } from '../components/svg/Svg';

export function ArrowUpIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path fillRule="evenodd" d="M11 21V6.83l-3.59 3.58L6 9l6-6 6 6-1.41 1.41L13 6.83V21z"/>
    </Svg>
  );
}