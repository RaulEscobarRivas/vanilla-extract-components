import React from 'react';
import { Svg, SvgProps } from '../components/svg/Svg';

export function HouseIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="M10 20v-6h4v6h5v-8h.999c1.105 0 1.33-.604.515-1.338l-7.77-6.993a1.136 1.136 0 00-1.487 0l-7.77 6.993C2.664 11.402 2.9 12 4 12h1v8h5z"/>
    </Svg>
  );
}