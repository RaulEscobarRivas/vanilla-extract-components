import React from 'react';
import { Marker, MarkerProps } from '@react-google-maps/api';
import { theme } from '../../theme';
import { getIconSize } from './utils';

export const MapMarker = ({ position, label, ...props } : MarkerProps) => (
  //@ts-expect-error Props mismatch
  <Marker
    position={position}
    icon={{
      url: "https://tourlane-ui.imgix.net/iconography/v2.93.1/Icons/Map/MapMarker.svg",
      ...getIconSize(),
    }}
    label={{
      text: label,
      color: theme.color.white,
      fontFamily: '"Source Sans Pro", sans-serif',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '26px',
      textAlign: 'center',
    }}
    {...props}
  />
);
