import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from './mapdiagram'

const Description = props => {
  const [park, setPark] = useState(props.park)

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>{park.name} <span>{park.designation}</span></h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
          <p>{park.description}</p>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <MapDiagram__Wrapper>
            <MapDiagram highlighted={null} onHighlight={(terr) => setHighlight(terr)} states={park.states} />
          </MapDiagram__Wrapper>
        </Col>
      </Row>
    </Grid>
  )
}
  
export default Description

const MapDiagram__Wrapper = styled.div`
  margin: 1.75em auto 2.5em auto;
  width: 60%;
  ${SuperQuery().minWidth.md.css`
    width: 100%;
    margin: .75em auto;
  `}
`