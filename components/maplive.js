import React, {useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import SuperQuery from '@themgoncalves/super-query'

const mapStyles = {
    
}

const MapLive = props => {
  let markers = []

  const [showingInfoWindow, setShowingInfoWindow] = useState()
  const [activeMarker, setActiveMarker] = useState()
  const [selectedPlace, setSelectedPlace] = useState()

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
    <MapStyled
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
      
      <InfoWindowStyled
        marker={activeMarker}
        visible={showingInfoWindow}>
          <div>
          <h3 style={{color: '#444444'}}>{ selectedPlace !== undefined ? selectedPlace.name : "Not Known" }</h3>
          <p style={{color: '#444444'}}>{ selectedPlace !== undefined ? selectedPlace.description : "Not Known" }</p>

          { selectedPlace !== undefined && selectedPlace.parkCode !== undefined &&
            <Link href={`/state/${selectedPlace.stateCode}/park/${selectedPlace.parkCode}/`}><a>More Information</a></Link> }
          </div>
      </InfoWindowStyled>
        
    </MapStyled>
  )
  
}
export default GoogleApiWrapper({
  apiKey: process.env.GOO_KEY
})(MapLive);

const MapStyled = styled(Map)`
  max-height: 400px;
`

const InfoWindowStyled = styled(InfoWindow)`
color: #333333;
  h1 {color: #333333;}

`