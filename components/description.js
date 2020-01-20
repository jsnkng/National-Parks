import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from './elements/mapdiagram'

const Component = ({ park }) => {
  return (
    <Description>
      <Grid>
        {/* <Row>
          <Col xs={12}>
            <h1><div dangerouslySetInnerHTML={{__html: park.name }}></div> <span>{park.designation}</span></h1>
          </Col>
        </Row> */}
        <Row>
          <Col xs={12} sm={7} md={8}>
            <p className='introduction'>{park.description}</p>
          </Col>
          <Col xs={12} sm={5} md={4}>
            <MapDiagram__Wrapper>
              <MapDiagram territories={park.states} highlighted={null} onHighlight={(terr) => setHighlight(terr)} />
            </MapDiagram__Wrapper>
          </Col>
        </Row>
      </Grid>
    </Description>
  )
}
  
export default Component

const Description = styled.div`
`
const MapDiagram__Wrapper = styled.div`
  margin: .625rem auto;
  width: 80%;
  ${SuperQuery().minWidth.sm.css`
    width: 90%;
    margin: .75rem auto 0 auto;
  `}
`
