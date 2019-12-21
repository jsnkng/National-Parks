import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

import MapLive__Component from './maplive'

const VisitorInfo = props => {
  const [park, setPark] = useState(props.park)
  const [markers, setMarkers] = useState(props.markers)
   
  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container>
          <h3>Visitor Information</h3>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        <Col__Container xs={12}>
        <LazyLoad height={200} offset={100}><MapLive__Wrapper style={{ display : park.latLong != '' ? ' block' : ' none'}}>
            <MapLive__Component
              latLong={park.latLong}
              name={park.name}
              designation={park.designation}
              zoom={10}
              markers={markers}
            />
          </MapLive__Wrapper></LazyLoad>
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
    </Grid__Container>
  )
}
  
export default VisitorInfo

const MapLive__Wrapper = styled.div`
  position:relative;
  height: 400px !important;
  z-index: 10;
`
const Grid__Container = styled(Grid)`
  h3 {
    font-size: 1.625em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  h4 {
    font-size: 1.375em;
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
    font-weight: 300;
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
  padding: 1em 0 0 0;
  margin: 0;
  
  &:first-child {
    padding: .125em;
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