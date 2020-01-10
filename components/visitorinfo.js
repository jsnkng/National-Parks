import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import MapLive__Component from './maplive'

const Component = ({ park, markers }) => {
  return (
    <VisitorInfo>
      <Row__Decorated>
        <Col xs={12}>
          <h2>Visitor Information</h2>
        </Col>
      </Row__Decorated>
      <Row__Decorated>
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
      </Row__Decorated>
      <Row__Decorated>
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
      </Row__Decorated>
    </VisitorInfo>
  )
}
export default Component

const VisitorInfo = styled(Grid)`
  padding: 1rem .25rem;
`

const MapLive__Wrapper = styled.div`
  position:relative;
  height: 42vh;
  margin: .5rem .125rem .5rem .125rem;
  padding:  0;
  z-index: 10;

  ${SuperQuery().maxWidth.of('896px').and.maxHeight.of('414px').and.landscape.css`
    height: 100vh;
  `}  
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
