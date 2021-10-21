import React from 'react';
import { Svg, SvgProps } from '../../components/svg/Svg';

export function UKFlag(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 16" {...props}>
      <g fill="none" fillRule="evenodd" transform="translate(-4 -8)">
        <rect width="24" height="16" x="4" y="8" fill="#0A17A7" fillRule="nonzero" rx="1.64"/>
        <path fill="#FFF" fillRule="nonzero" d="M18.857 8v4.888l7.33-4.62a1.077 1.077 0 011.434.277l.105.145a.933.933 0 01-.26 1.346l-5.23 3.297H28v5.334l-5.653-.001 5.144 3.222a.933.933 0 01.262 1.352l-.122.17c-.332.452-.951.58-1.435.297l-7.339-4.528V24h-5.714l-.001-4.933L5.73 23.74a1.077 1.077 0 01-1.434-.277l-.105-.145a.933.933 0 01.26-1.346l5.242-3.306H4v-5.332h5.382l-4.93-3.041a.987.987 0 01-.312-1.377l.209-.334a1.01 1.01 0 011.381-.321l7.411 4.64V8h5.716z"/>
        <path stroke="#DB1F35" strokeLinecap="round" strokeWidth=".548" d="M21.067 12.858l6.363-3.97M20.5 18.958l6.346 3.994M11.29 13.084l-6.326-4.03M11.4 19l-6.25 3.947"/>
        <path fill="#E6273E" fillRule="nonzero" d="M4 17.6h10.286V24h3.428v-6.4H28v-3.2H17.714V8h-3.428v6.4H4z"/>
      </g>
    </Svg>
  );
}