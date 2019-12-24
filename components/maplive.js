import React, {useState} from 'react'
import styled from 'styled-components'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

import Router from 'next/router'
const mapStyles = {
}

const MapLive = props => {
  const [showingInfoWindow, setShowingInfoWindow] = useState()
  const [activeMarker, setActiveMarker] = useState()
  const [selectedPlace, setSelectedPlace] = useState()

  let markers = []
  const onMarkerClick = (props, marker, e) => {
    setShowingInfoWindow(true)
    setActiveMarker(marker)
    setSelectedPlace(props)
  }

  const cleanLatLong = (dirtyLatLong) => {
    const desired = dirtyLatLong.replace(/[^\w\s-:,.]/gi, '')
    const clean = desired.replace(/lng/gi, 'long')
    const lat = clean !== undefined && clean.length !==0 ? clean.split(",")[0].slice(4) : ""
    const lng = clean !== undefined && clean.length !==0 ? clean.split(",")[1].slice(6) : ""
    return {lat: lat, lng: lng}
  }

  return (
    <Map
      google={google}
      zoom={props.zoom}
      style={mapStyles}
      initialCenter={cleanLatLong(props.latLong)}>
      { props.markers.map((item) => {
          return (
            <Marker key={item.id}
              onClick={onMarkerClick}
              stateCode={item.stateCode}
              parkCode={item.parkCode}
              name={item.name} 
              description={item.description}
              position={cleanLatLong(item.latLong)} />
          )
        })
      }
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}>
        <div>
          <h3 style={{color: '#444444'}}>{ selectedPlace !== undefined ? selectedPlace.name : "Not Known" }</h3>
          <p style={{color: '#444444'}}>{ selectedPlace !== undefined ? selectedPlace.description : "Not Known" }</p>
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOO_KEY
})(MapLive);

