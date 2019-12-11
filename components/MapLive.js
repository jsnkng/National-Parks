import React from 'react'
import styled from 'styled-components';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import SuperQuery from '@themgoncalves/super-query'
const mapStyles = {
    
  };

const MapLive = props => {
  console.log(props.zoom)
  const onMarkerClick = (props, marker, e) => {
      alert(props.name)
  }
  if (props.latLong !== undefined && props.latLong !== "") {
    console.log(props.latLong)
    var desired = props.latLong.replace(/[^\w\s-:,.]/gi, '')
    var clean = desired.replace(/lng/gi, 'long')
    const lat = clean.split(",")[0].slice(4)
    const lng = clean.split(",")[1].slice(6)
  
    return (
      <MapStyled
        google={google}
        zoom={props.zoom}
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
})(MapLive);

const MapStyled = styled(Map)`
  max-height: 60vh;

  ${SuperQuery().minWidth.md.css`
    max-height: 45vh;
  `}

`