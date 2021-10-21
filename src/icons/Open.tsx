import React from 'react';
import { Svg, SvgProps } from '../components/svg/Svg';

export function OpenIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="M11.944.934v1.83h-9.18v16.472h16.472v-9.18h1.83V20.15a.964.964 0 0 1-.915.915H1.85a.964.964 0 0 1-.915-.915V1.85a.964.964 0 0 1 .915-.915h10.095zm2.091.915c0-.505.41-.915.915-.915h5.201l.08.003c.46.061.815.446.835.912v5.2a.915.915 0 1 1-1.83 0V2.765H14.95a.916.916 0 0 1-.915-.915z"/>
      <path d="M20.52 2.774l-8.874 8.873a.915.915 0 0 1-1.293-1.294l8.873-8.873 1.294 1.294z"/>
    </Svg>
  );
};
