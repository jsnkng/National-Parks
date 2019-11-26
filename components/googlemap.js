import React from 'react'
import styled from 'styled-components';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
    width: '100%',
    height: '100%'
  };

const MapContainer = props => {
    const onMarkerClick = (props, marker, e) => {
        alert(props.name)
    }

    return (
    <MapStyled
        google={google}
        zoom={9}
        style={mapStyles}
        initialCenter={{
        "lat": props.lat,
        "lng": props.lng
        }}
      >
        <Marker onClick={onMarkerClick}
                name={props.name} 
                title={props.designation}
                position={{lat: props.lat, lng: props.lng}} />

    </MapStyled>
    )
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyD0bj9Rnm0zlgFyNLtrbKyMe6mxTOEuHAA'
})(MapContainer);

const MapStyled = styled(Map)`
  width: 100%;
  height: 60vw !important;
  max-width: 100%;
  max-height: 400px !important;
`