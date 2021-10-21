import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  GoogleMapProps,
  useJsApiLoader,
} from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';
import { FullScreenIcon, PlusIcon, MinusIcon } from '../../icons';
import { theme } from '../../theme';
import { ControlButton } from './ControlButton';
import { ControlButtonIcon } from './ControlButtonIcon';
import { toggleFullScreen } from './utils';
import { MapControl } from './MapControl';
import { controlsWrapperStyle, loadingMapStyle } from './Map.css';

const mapStyles = (): google.maps.MapTypeStyle[] => [
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: theme.color.gray[800],
      },
    ],
  },
  {
    featureType: 'landscape',
    stylers: [
      {
        color: theme.color.gray[200],
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#f8f29d',
      },
    ],
  },
];

const LIBRARIES: Libraries = ['geometry', 'drawing', 'places'];

type MapPropsTypes = GoogleMapProps & {
  apiKey: string;
  renderTopControl: Function;
  children(map: google.maps.Map): React.ReactElement;
};

export const Map: React.FC<MapPropsTypes> = ({
  apiKey,
  renderTopControl,
  children,
  onLoad,
  ...rest
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    id: 'google-map-script',
    libraries: LIBRARIES,
  });

  const [map, setMap] = useState<google.maps.Map>(null);
  const [isInFullScreen, setInFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    toggleFullScreen(map.getDiv().firstChild, isInFullScreen);
    setInFullScreen(!isInFullScreen);
  };

  const onMapLoad = (map) => {
    setMap(map);
    onLoad && onLoad(map);
  };

  const onMapUnmount = () => setMap(null);

  if(!isLoaded) return <div className={loadingMapStyle} />;

  return (
    <GoogleMap
      mapContainerStyle={{ height: '100%', width: '100%' }}
      onLoad={onMapLoad}
      onUnmount={onMapUnmount}
      options={{
        disableDefaultUI: true,
        keyboardShortcuts: false,
        styles: mapStyles(),
      }}
      {...rest}
    >
      {map && (
        <MapControl
          map={map}
          position={window.google.maps.ControlPosition.RIGHT_TOP}
        >
          <div className={controlsWrapperStyle}>
            <ControlButton
              aria-label={'Toggle full-screen'}
              onClick={handleToggleFullScreen}
            >
              <ControlButtonIcon icon={FullScreenIcon}/>
            </ControlButton>
              <ControlButton
                aria-label={'Zoom-in'}
                onClick={() => map.setZoom(map.getZoom() + 1)}
              >
                <ControlButtonIcon icon={PlusIcon}/>
              </ControlButton>
            <ControlButton
              aria-label={'Zoom-out'}
              onClick={() => map.setZoom(map.getZoom() - 1)}
            >
              <ControlButtonIcon icon={MinusIcon}/>
            </ControlButton>
          </div>
        </MapControl>
      )}
      {map && children(map)}
    </GoogleMap>
  );
};
