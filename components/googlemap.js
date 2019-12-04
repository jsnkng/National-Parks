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
  if (props.latLong !== undefined && props.latLong !== "") {
    const lat = props.latLong.split(",")[0].slice(4)
    const lng = props.latLong.split(",")[1].slice(6)
  
    return (
      <MapStyled
        google={google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
        "lat": lat,
        "lng": lng
        }}>
        <Marker onClick={onMarkerClick}
          name={props.name} 
          title={props.designation}
          position={{lat: lat, lng: lng}} />
      </MapStyled>
    )
  } else {
    return false
  }
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