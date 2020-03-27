import React, { useState } from 'react';
import './ExchangePointsMap.scss';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { Layout } from '../index';
import * as exchangePointsData from '.././../googlemap';

function Map() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 49.985950, lng: 36.273540}}
    >
      {exchangePointsData.points.map(point => (
        <Marker
          key={point.id}
          position={{lat: point.lat, lng: point.lng}}
          onClick={() => setSelectedPoint(point)}
        />
        ))}
      {selectedPoint && (
        <InfoWindow
          position={{lat: selectedPoint.lat, lng: selectedPoint.lng}}
          onCloseClick={() => setSelectedPoint(null)}
        >
          <h2>{selectedPoint.address}</h2>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function ExchangePointsMap() {
  return (
    <Layout>
      <div style={{width: '100%', height: '100vh'}}>
        <WrappedMap
          googleMapURL={exchangePointsData.MAP_URL}
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `100%`}}/>}
          mapElement={<div style={{height: `100%`}}/>}
        />
      </div>
    </Layout>
  );
}

export default ExchangePointsMap;
