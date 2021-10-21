import React from 'react';
import { Svg, SvgProps } from '../components/svg/Svg';

export function MagnifierIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="M12.35 14.76l7 5.998 1.301-1.519-7-5.998z"/>
      <path d="M9.5 6A4.505 4.505 0 005 10.5C5 12.981 7.019 15 9.5 15s4.5-2.019 4.5-4.5S11.981 6 9.5 6m0 11A6.508 6.508 0 013 10.5C3 6.916 5.916 4 9.5 4S16 6.916 16 10.5 13.084 17 9.5 17"/>
    </Svg>
  );
}