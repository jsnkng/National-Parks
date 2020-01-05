import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from './mapdiagram'

const Component = ({ park }) => {
  return (
    <Description>
      <Row__Decorated>
        <Col xs={12}>
          <h1>{park.name.replace(/&#333;/gi, "ō").replace(/&#257;/gi, "ā")} <span>{park.designation}</span></h1>
        </Col>
      </Row__Decorated>
      <Row__Decorated>
        <Col xs={12} sm={7} md={8}>
          <p>{park.description}</p>
        </Col>
        <Col xs={12} sm={5} md={4}>
          <MapDiagram__Wrapper>
            <MapDiagram territories={park.states} highlighted={null} onHighlight={(terr) => setHighlight(terr)} />
          </MapDiagram__Wrapper>
        </Col>
      </Row__Decorated>
    </Description>
  )
}
  
export default Component

const Description = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
`
const MapDiagram__Wrapper = styled.div`
  margin: 1em auto 0 auto;
  width: 70%;
  ${SuperQuery().minWidth.sm.css`
    width: 100%;
    margin: .75em auto 0 auto;
  `}
  ${SuperQuery().minWidth.lg.css`
    width: 100%;
    margin: 0 auto;
  `}
`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
