import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from './mapdiagram'

const Description = props => {
  const [park, setPark] = useState(props.park)

  return (
    <Container>
      <Row>
        <Item>
          {/* {park.fullName}<br /> */}
          <h2>{park.name} {park.designation}</h2>
          <p>{park.description}<br />
          <a href="{park.url}">National Park Service’s {park.name} Resource.</a><br /><br /></p>
          {/* {park.parkCode}<br /> */}
          {/* {park.id}<br /> */}
          {/* {park.states} */}

          <MapDiagramWrapper>
            <MapDiagram highlighted={null} onHighlight={(terr) => setHighlight(terr)} states={park.states} />
          </MapDiagramWrapper>

        </Item>
      </Row>
    </Container>
  )
}
  
export default Description

const Container = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px 0;
  a {
    float: left;
    width: 66%;
  }
  p {
    float: left;
    width: 66%;
  }
  h2 {
    line-height: 1;
    float: left;
    width: 66%;
  }
`
const Item = styled(Col)`
  flex: 1 1 300px;
  align-items: stretch;
  line-height: 1.25;
`
const MapDiagramWrapper = styled.div`
  float: right;
  width: 32%;
  margin-top: -.75em;
  ${SuperQuery().minWidth.md.css`
    margin-top: -2em;
  `}
`
