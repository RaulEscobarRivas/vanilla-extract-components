import React from 'react';
import { Svg, SvgProps } from '../../components/svg/Svg';

export function DEFlag(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 16" {...props}>
      <path fill="#262626" d="M0 5.333h24V2.001A2.003 2.003 0 0021.995 0H2.005A2.009 2.009 0 000 2.001v3.332z"/>
      <path fill="#F01515" d="M0 5.333h24v5.33H0z"/>
      <path fill="#FFD521" d="M0 13.993c0 1.105.897 2 2.005 2h19.99a2.008 2.008 0 002.005-2v-3.33H0v3.33z"/>
    </Svg>
  );
}