import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import MapLive__Component from './maplive'

const Component = props => {
  const [park, setPark] = useState(props.park)
  const [markers, setMarkers] = useState(props.markers)
   
  return (
    <VisitorInfo>
      <Row>
        <Col xs={12}>
          <h2>Visitor Information</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            <MapLive__Wrapper style={{ display : park.latLong != '' ? ' block' : ' none'}}>
              <MapLive__Component
                latLong={park.latLong}
                name={park.name}
                designation={park.designation}
                zoom={10}
                markers={markers}
              />
            </MapLive__Wrapper>
        </Col>
      </Row>
      <Row>
      {park.directionsInfo !== "" && 
        <Col xs={12} md={6}>
          <h3>Directions</h3>
          <p>{park.directionsInfo}</p>
        </Col>
      }
      {park.weatherInfo !== "" && 
        <Col xs={12} md={6}>
          <h3>Weather</h3>
          <p>{park.weatherInfo}</p>
        </Col>
      }
      </Row>
    </VisitorInfo>
  )
}
export default Component

const VisitorInfo = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
`

const MapLive__Wrapper = styled.div`
  position:relative;
  height: 50vh;
  z-index: 10;
  margin: .5em .125em .5em .125em;
  padding:  0;
  ${SuperQuery().minWidth.md.css`
    height: 33vh;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 50vh;
  `}
`
