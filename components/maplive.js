import React from 'react'
import styled from 'styled-components'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import SuperQuery from '@themgoncalves/super-query'

const mapStyles = {
    
}

const MapLive = props => {
  console.log('deez',props.markers)
  let markers = []
  const onMarkerClick = (props, marker, e) => {
    alert(props.name)
  }

  const cleanLatLong = (dirtyLatLong) => {
    const desired = dirtyLatLong.replace(/[^\w\s-:,.]/gi, '')
    const clean = desired.replace(/lng/gi, 'long')
    
    const lat = clean !== undefined && clean.length !==0 ? clean.split(",")[0].slice(4) : ""
    const lng = clean !== undefined && clean.length !==0 ? clean.split(",")[1].slice(6) : ""

    return {lat: lat, lng: lng}
  }

  // console.log(cleanLatLong(props.markers))

//   const markers = props.markers !== undefined || props.markers.length !== 0
//     ? () => {
//       console.log("no marker", marker)
//       return (
//         <Marker onClick={onMarkerClick}
//           name={props.name} 
//           title={props.designation}
//           position={{lat: "44.4534555", lng: "-33.234234"}} />
//       )
//     } 
//     : () => {
//       props.markers.map((marker) => {
//         console.log("no marker", marker)
//         return (
//           <Marker onClick={onMarkerClick}
//             name={props.name} 
//             title={props.designation}
//             position={cleanLatLong(marker.latLong)} />
//         )
//       })
//     }
// console.log(markers)



    return (
      <MapStyled
        google={google}
        zoom={props.zoom}
        style={mapStyles}
        initialCenter={markers[0]}>
        { props.markers.map((item) => {
          console.log("markers", item)
          console.log("READY", cleanLatLong(item.latLong))
          return (
          <Marker key={item.id} 
            onClick={onMarkerClick}
            name={item.name} 
            title={item.description}
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
  max-height: 60vh;

  ${SuperQuery().minWidth.md.css`
    max-height: 45vh;
  `}
`