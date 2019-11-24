import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '40%'
  };

const MapContainer = props => {

    return (
    <Map
        google={google}
        zoom={13}
        style={mapStyles}
        initialCenter={{
        "lat": props.lat,
        "lng": props.lng
        }}
      />
    )
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyD0bj9Rnm0zlgFyNLtrbKyMe6mxTOEuHAA'
})(MapContainer);