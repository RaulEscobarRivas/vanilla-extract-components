import React from 'react';
import { Svg, SvgProps } from '../../components/svg/Svg';

export function NLFlag(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 16" {...props}>
      <path fill="#FFF" d="M0 5.333h24v5.33H0z"/>
      <path fill="#F44653" d="M2 0h20a2 2 0 012 2v3.333H0V2a2 2 0 012-2z"/>
      <path fill="#1035BB" d="M0 10.667h24V14a2 2 0 01-2 2H2a2 2 0 01-2-2v-3.333z"/>
    </Svg>
  );
}