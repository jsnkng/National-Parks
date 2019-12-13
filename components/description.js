import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from './mapdiagram'

const Description = props => {
  const [park, setPark] = useState(props.park)

  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container xs={12}>
          <h2>{park.name} {park.designation}</h2>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        <Col__Container xs={12} sm={12} md={8} lg={8} xl={8}>
          <p>{park.description}</p>
        </Col__Container>
        <Col__Container xs={12} sm={12} md={4} lg={4} xl={4}>
          <MapDiagramWrapper>
            <MapDiagram highlighted={null} onHighlight={(terr) => setHighlight(terr)} states={park.states} />
          </MapDiagramWrapper>
          {/* <a href="{park.url}">National Park Service’s {park.name} Resource.</a> */}
        </Col__Container>
      </Row__Container>
    </Grid__Container>
  )
}
  
export default Description

const MapDiagramWrapper = styled.div`
  margin: 1.75em auto 2.5em auto;
  width: 60%;
  ${SuperQuery().minWidth.md.css`
    width: 100%;
    margin: -1.5em 0 0 0;
  `}
`


const Grid__Container = styled(Grid)`
  padding: 1em 1em 0 1em;
  h2 {
    font-size: 2em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  p {
  ${SuperQuery().minWidth.md.css`
    padding: 0 1em 0 0;
  `}
  }
  
`
const Row__Container = styled(Row)`
  padding: 0;
  margin: 0;
`
const Col__Container = styled(Col)`
  margin: 0;
  padding: 0;
`