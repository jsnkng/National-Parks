import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import MapLive__Component from './maplive'

const VisitorInfo = props => {
  const [park, setPark] = useState(props.park)
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  const [campgrounds, setCampgrounds] = useState(props.campgrounds)
  let markers = []
  // markers.push({id: park.id, latLong: park.latLong, name: park.name, description: park.description})
          
  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container>
          <h3>Visitor Information</h3>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        <Col__Container xs={12}>
          <MapLive__Wrapper style={{ display : park.latLong != '' ? ' block' : ' none'}}>
            <MapLive__Component
              latLong={park.latLong}
              name={park.name}
              designation={park.designation}
              zoom={10}
              markers={markers}
            />
          </MapLive__Wrapper>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        <Col__Container xs={12} md={6}>
          <h4>Directions</h4>
          <p>{park.directionsInfo}</p>
        </Col__Container>
        <Col__Container xs={12} md={6}>
          <h4>Weather</h4>
          <p>{park.weatherInfo}</p>
        </Col__Container>
      </Row__Container>
      { visitorCenters !== undefined && visitorCenters.length != 0 &&
      <>
      <Row__Container>
        <Col__Container>
          <h3>Visitor Centers</h3>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        <Col__Container xs={12} >
          { visitorCenters.slice(0).map((item) => {
            markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description})
  
            return(
              <details key={item.id}>
                <summary>{item.name}</summary>
                <p>{item.description}</p>
                <p>{item.directionsInfo}</p>
              </details>
              )}
            )
          }
        </Col__Container>
      </Row__Container> 
      </>
      }
      
      
      
      { campgrounds !== undefined && campgrounds.length != 0 &&
      <>
      <Row__Container>
        <Col__Container xs={12}>
          <h3>Campgrounds</h3>
        </Col__Container>
      </Row__Container>
      { campgrounds.slice(0).map((item) => {  
      markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description})
  
      return(
      <Row__Container key={item.id}>
        <Col__Container xs={12}>
        <details>
          <summary>
            {item.name}
          </summary>
         
      <Row__Container>
        <Col__Container xs={12}>
          {item.images !== undefined && item.images != 0 && 
          <CampgroundImagesWrapper> 
            <CampgroundImages backgroundURL={item.images[0].url} /> 
          </CampgroundImagesWrapper>
          }
          <p>{item.description}</p>
        </Col__Container>
        </Row__Container>
      
      <Row__Container>
        <Col__Container xs={12} sm={6}>

          {item.directionsoverview !== undefined && item.directionsoverview != 0 && 
            <span>
              <h5>Directions</h5>
              <p>{item.directionsoverview}<br /><a href={item.directionsUrl} target="_blank">{item.directionsUrl}</a></p>
              <h5>Campsites</h5>
              {item.campsites !== undefined && item.campsites != 0 && 
                <ul> 
                  { Object.entries(item.campsites).map((item) => item[1] !== '0' ? <li key={item[0]}><strong>{item[0]}:</strong> {item[1]} </li> : '') }
                </ul>
              }
            </span>
          }
        </Col__Container>
      
        <Col__Container xs={12} sm={6}>
          <MapLive__Wrapper style={{ display : item.latLong != '' ? ' block' : ' none'}}>
            <MapLive__Component
              latLong={item.latLong}
              name={item.name}
              designation={item.description}
              zoom={13}
              markers={[{id: item.id, latLong: item.latLong, name: item.name, description: item.description}]}
  
            />
          </MapLive__Wrapper> 
        </Col__Container>
        </Row__Container>
      
        <Row__Container>
        <Col__Container xs={12}>
          <h5>Accessibility</h5>
          <ul>
            {item.accessibility.accessroads !== undefined && item.accessibility.accessroads != 0 && 
              <li><strong>Access Roads:</strong> {item.accessibility.accessroads}</li>
            }
            {item.accessibility.classifications !== undefined && item.accessibility.classifications != 0 && 
              <li><strong>Classifications:</strong> {item.accessibility.classifications}</li>
            }
            {item.accessibility.adainfo !== undefined && item.accessibility.adainfo != 0 && 
              <li><strong>ADA Info:</strong> {item.accessibility.adainfo}</li>
            }
            {item.accessibility.additionalinfo !== undefined && item.accessibility.additionalinfo != 0 && 
              <li><strong>Additional Info:</strong> {item.accessibility.additionalinfo}</li>
            }
            {item.accessibility.cellphoneinfo !== undefined && item.accessibility.cellphoneinfo != 0 && 
              <li><strong>Cellphone Info:</strong> {item.accessibility.cellphoneinfo}</li>
            }
            {item.accessibility.firestovepolicy !== undefined && item.accessibility.firestovepolicy != 0 && 
              <li><strong>Fire/Stove Policy:</strong> {item.accessibility.firestovepolicy}</li>
            }
            {item.accessibility.internetinfo !== undefined && item.accessibility.internetinfo != 0 && 
              <li><strong>Internet Info:</strong> {item.accessibility.internetinfo}</li>
            }
            {item.accessibility.rvallowed !== undefined && item.accessibility.rvallowed != 0 && 
              <li><strong>RV Allowed:</strong> {item.accessibility.rvallowed}</li>
            }
            {item.accessibility.rvmaxlength !== undefined && item.accessibility.rvmaxlength != 0 && 
              <li><strong>RV Maxlength:</strong> {item.accessibility.rvmaxlength}</li>
            }
            {item.accessibility.trailerallowed !== undefined && item.accessibility.trailerallowed != 0 && 
              <li><strong>Trailer Allowed:</strong> {item.accessibility.trailerallowed}</li>
            }
            {item.accessibility.trailermaxlength !== undefined && item.accessibility.trailermaxlength != 0 && 
              <li><strong>Trailer Max Length:</strong> {item.accessibility.trailermaxlength}</li>
            }
            {item.accessibility.wheelchairaccess !== undefined && item.accessibility.wheelchairaccess != 0 && 
              <li><strong>Wheelchair Access:</strong> {item.accessibility.wheelchairaccess}</li>
            }
          </ul>
        </Col__Container>
        <Col__Container xs={12}  className="amenities">


          <h5>Amenities</h5>
          <ul>
            {item.amenities.trashrecyclingcollection !== undefined && item.amenities.trashrecyclingcollection != 0 && 
              <li><strong>Trash/Recycling:</strong> {item.amenities.trashrecyclingcollection}</li>
            }
            {item.amenities.internetconnectivity !== undefined && item.amenities.internetconnectivity != 0 && 
              <li><strong>Internet Connectivity:</strong> {item.amenities.internetconnectivity}</li>
            }
            {item.amenities.cellphonereception !== undefined && item.amenities.cellphonereception != 0 && 
              <li><strong>Cell Phone Reception:</strong> {item.amenities.cellphonereception}</li>
            }
            {item.amenities.amphitheater !== undefined && item.amenities.amphitheater != 0 && 
              <li><strong>Amphitheater:</strong> {item.amenities.amphitheater}</li>
            }
            {item.amenities.campstore !== undefined && item.amenities.campstore != 0 && 
              <li><strong>Camp Store:</strong> {item.amenities.campstore}</li>
            }
            {item.amenities.dumpstation !== undefined && item.amenities.dumpstation != 0 && 
              <li><strong>Dump Station:</strong> {item.amenities.dumpstation}</li>
            }
            {item.amenities.stafforvolunteerhostonsite !== undefined && item.amenities.stafforvolunteerhostonsite != 0 && 
              <li><strong>Staff or Volunteer Host on Site:</strong> {item.amenities.stafforvolunteerhostonsite}</li>
            }
            {item.amenities.iceavailableforsale !== undefined && item.amenities.iceavailableforsale != 0 && 
              <li><strong>Ice Available For Sale:</strong> {item.amenities.iceavailableforsale}</li>
            }
            {item.amenities.foodstoragelockers !== undefined && item.amenities.foodstoragelockers != 0 && 
              <li><strong>Food Storage Lockers:</strong> {item.amenities.foodstoragelockers}</li>
            }
            {item.amenities.firewoodforsale !== undefined && item.amenities.firewoodforsale != 0 && 
              <li><strong>Firewood For Sale:</strong> {item.amenities.firewoodforsale}</li>
            }
            {item.amenities.potablewater !== undefined && item.amenities.potablewater != 0 && 
              <li><strong>Potable Water:</strong> {item.amenities.potablewater}</li>
            }
            {item.amenities.showers !== undefined && item.amenities.showers != 0 && 
              <li><strong>Showers:</strong> {item.amenities.showers}</li>
            }
            {item.amenities.toilets !== undefined && item.amenities.toilets != 0 && 
              <li><strong>Toilets:</strong> {item.amenities.toilets}</li>
            }
          </ul>
        
          </Col__Container>
          
        <Col__Container xs={12} className="details">

        {item.regulationsoverview !== undefined && item.regulationsoverview != 0 && 
            <span>
              <h5>Regulations</h5>
              <p>{item.regulationsoverview}</p>
              <p><a href={item.regulationsurl} target="_blank">{item.regulationsurl}</a></p>
            </span>
          }

          {item.reservationsdescription !== undefined && item.reservationsdescription != 0 && 
            <span>
              <h5>Reservations</h5>
              <p>{item.reservationsdescription}</p>
            </span>
          }

          {item.reservationssitesfirstcome !== undefined && item.reservationssitesfirstcome != 0 && 
            <span>
              <h5>Reservations Sites First Come</h5>
              <p>{item.reservationssitesfirstcome}</p>
            </span>
          }

          {item.reservationssitesreservable !== undefined && item.reservationssitesreservable != 0 && 
            <span>
              <h5>Reservations Reservable</h5>
              <p>{item.reservationssitesreservable}</p>
            </span>
          }

          {item.reservationsurl !== undefined && item.reservationsurl != 0 && 
            <span>
              <h5>Reservations URL</h5>
              <p><a href={item.reservationsurl} target="_blank">{item.reservationsurl}</a></p>
            </span>
          }


          {item.weatheroverview !== undefined && item.weatheroverview != 0 && 
            <span>
              <h5>Weather Overview</h5>
              <p>{item.weatheroverview}</p>
            </span>
          }
          </Col__Container>
        </Row__Container>
        </details> 
  
        </Col__Container>
        </Row__Container>)
      })}
      </>
      }



    </Grid__Container>
  )
}
  
export default VisitorInfo

const MapLive__Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 60vw !important;
  max-width: 100%;
  max-height: 400px !important;
  z-index: 10;
  ${SuperQuery().minWidth.md.css`
  width: 100%;
  margin: 2em 0 0 0;
  `}
`
const CampgroundImagesWrapper = styled.div`
  display: flex;
`
const CampgroundImages = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 20em;
  margin: 0;
`

const Grid__Container = styled(Grid)`
  padding: 1em 1em 0 1em;
  h3 {
    font-size: 2em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  h4 {
    font-size: 1.5em;
    line-height: 1.125;
    float: left;
    width: 100%;
    margin: 0;
    ${SuperQuery().minWidth.md.css`
      margin: 0 0 .5em 0;
    `}
  }
  p {
    font-size: 1em;
    clear: both;
    padding: 0 1em 1em 0;
    ${SuperQuery().minWidth.md.css`
      font-size: .825em;
    `}
  }
  details {
    padding: 0;
    p {
      padding: 0;
    }
  }
  summary {
    color: #a1dde9;
    font-size: 1.25em;
    font-weight: 600;
    padding:  .5em 0 ;
    border-bottom: 1px solid #3c3a3c;
  }
`
const Row__Container = styled(Row)`
  padding: 0 0 1em 0;
  margin: 0;
  &:nth-of-type(1) {
    padding: 0;
    margin: 0 0 1em 0;
    border-bottom: 1px solid;
  }
  &:last-child {
    border: none;
  }
`
const Col__Container = styled(Col)`
  position: relative;
  padding:  0;

`

// const MapLive__Wrapper = styled.div`
//   z-index: -10; 
//   width: 100%;
//   height: 60vh;
  
//   max-height: 400px !important;
//   ${SuperQuery().minWidth.md.css`
//     height: 45vh;
//   `}
// `
