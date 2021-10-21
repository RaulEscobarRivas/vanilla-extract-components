import React from 'react';
import { Svg, SvgProps } from '../../components/svg/Svg';

export function FRFlag(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 16" {...props}>
      <path fill="#FFF" d="M6 0h12v16H6z"/>
      <path fill="#F44653" d="M16 0h6a2 2 0 012 2v12a2 2 0 01-2 2h-6V0z"/>
      <path fill="#1035BB" d="M2 0h6v16H2a2 2 0 01-2-2V2a2 2 0 012-2z"/>
    </Svg>
  );
}