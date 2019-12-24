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
        <Col__Container xs={12}>
          <h3>Visitor Information</h3>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        <Col__Container xs={12}>
          <LazyLoad height={400} offset={400}>
            <MapLive__Wrapper style={{ display : park.latLong != '' ? ' block' : ' none'}}>
              <MapLive__Component
                latLong={park.latLong}
                name={park.name}
                designation={park.designation}
                zoom={10}
                markers={markers}
              />
            </MapLive__Wrapper>
          </LazyLoad>
        </Col__Container>
      </Row__Container>
      <Row__Container>
      {park.directionsInfo !== "" && 
        <Col__Container xs={12} md={6} className="content">
          <h4>Directions</h4>
          <p>{park.directionsInfo}</p>
        </Col__Container>
      }
      {park.weatherInfo !== "" && 
        <Col__Container xs={12} md={6} className="content">
          <h4>Weather</h4>
          <p>{park.weatherInfo}</p>
        </Col__Container>
      }
      </Row__Container>
    </Grid__Container>
  )
}
  
export default VisitorInfo

const Grid__Container = styled(Grid)`
  padding: 0;
 
  h3 {
    font-size: 2.5em;
    line-height: 1;
    margin: .05em;
    padding: .425em .575em .425em .25em;
    border: 0;
    border-bottom: 1px solid #ffffff;
    ${SuperQuery().minWidth.md.css`
      padding: .425em .25em .425em 0;
    `}
  }
  h4 {
    font-size: 1.375em;
    line-height: 1.125;
    letter-spacing: -1px;
    margin: 1em 0 0 0;
  }
  p {
    font-size: 1em;
    font-weight: 300;
    overflow-wrap: break-word;
  }
`
const Row__Container = styled(Row)`
  margin: 0;
`
const Col__Container = styled(Col)`
  padding:  0;
  &.content {
    padding: 0 1.25em 0 1.25em;
   
    ${SuperQuery().minWidth.md.css`
      &:first-child {
        padding: 0 1.5em 0 0;
      }
    `}
  }
`
const MapLive__Wrapper = styled.div`
  position:relative;
  height: 12.5em;
  z-index: 10;
  margin: .125em .54em;
  padding:  0;
  ${SuperQuery().minWidth.md.css`
    margin: .5em 0 1.5em 0;
    padding:  0;
  `}
`
