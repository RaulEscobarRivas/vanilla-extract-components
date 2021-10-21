import React from 'react';
import { Svg, SvgProps } from '../components/svg/Svg';

export function LoveLetterIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="M6 11.134V4h12v7.134l2-1.143v-7.99H4v7.99zM15.266 15H8.735L2 11.152V20a2 2 0 002 2h16a2 2 0 002-2v-8.848l-6.734 3.849z"/>
      <path d="M12 13s4-2.909 4-5.064c0-2.046-3.111-2.935-4-.247C11.111 5 8 5.89 8 7.936c0 2.155 4 5.065 4 5.065"/>
    </Svg>
  );
}