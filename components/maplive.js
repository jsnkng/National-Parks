import React, {useState} from 'react'
import styled from 'styled-components'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { useRouter } from 'next/router'
import SuperQuery from '@themgoncalves/super-query'

const mapStyles = {
    
}

const MapLive = props => {
  let markers = []
  const router = useRouter()

  const onMarkerClick = (props, marker, e) => {
    // alert(props.name)
    router.push('/state/nj')
  }

  const cleanLatLong = (dirtyLatLong) => {
    const desired = dirtyLatLong.replace(/[^\w\s-:,.]/gi, '')
    const clean = desired.replace(/lng/gi, 'long')
    
    const lat = clean !== undefined && clean.length !==0 ? clean.split(",")[0].slice(4) : ""
    const lng = clean !== undefined && clean.length !==0 ? clean.split(",")[1].slice(6) : ""

    return {lat: lat, lng: lng}
  }



    return (
      <MapStyled
        google={google}
        zoom={props.zoom}
        style={mapStyles}
        initialCenter={cleanLatLong(props.latLong)}>
        { props.markers.map((item) => {
          return (
        
          <Marker key={item.id} 
            onClick={onMarkerClick}
            name={item.name} 
            title={item.name}
            position={cleanLatLong(item.latLong)} />

         
          )
        })}
      </MapStyled>
    )
  
}
export default GoogleApiWrapper({
  apiKey: process.env.GOO_KEY
})(MapLive);

const MapStyled = styled(Map)`
  max-height: 400px;
`