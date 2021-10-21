import React from 'react'
import { Polyline, PolylineProps } from '@react-google-maps/api';
import { theme } from '../../theme.css';
import { preparePath } from './utils';

type MapPolylineProps = {
  path?:
    | {
        lat?: number | string
        lng?: number | string
      }[]
    | google.maps.MVCArray<google.maps.LatLng>
    | google.maps.LatLng[]
    | google.maps.LatLngLiteral[]
  strokeColor?: string | null
  strokeWeight?: number
  strokeOpacity?: number
  zIndex?: number
  options?: any
} & Omit<PolylineProps, 'path'>

export const MapPolyline = ({
  path,
  strokeColor = theme.color.black,
  strokeWeight = 2,
  strokeOpacity = 1,
  options,
  zIndex,
  ...props
}: MapPolylineProps) => (
  <Polyline
    path={preparePath(path)}
    options={{
      zIndex,
      strokeColor,
      strokeOpacity,
      strokeWeight,
      ...options,
    }}
    {...props}
  />
);