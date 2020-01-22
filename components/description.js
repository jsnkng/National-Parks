import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from './elements/mapdiagram'

const Component = ({ park, markers  }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={8}>
          <p className='introduction'>{park.description}</p>
        </Col>
        <Col xs={12} smOffset={1} sm={10} mdOffset={0} md={4}>
          <MapDiagram__Wrapper>
            <MapDiagram territories={park.states} highlighted={null} onHighlight={(terr) => setHighlight(terr)} />
          </MapDiagram__Wrapper>
        </Col>
      </Row>
    </Grid>
  )
}
  
export default Component

const MapDiagram__Wrapper = styled.div`
  margin: .625rem auto;
  width: 80%;
  ${SuperQuery().minWidth.sm.css`
    width: 90%;
    margin: .75rem auto 0 auto;
  `}
`
const MapLive__Wrapper = styled.div`
  position:relative;
  height: 25rem;
  padding: .5rem 0 1.25rem 0;
  padding:  0;
  z-index: 10;
  ${SuperQuery().maxWidth.of('896px').and.maxHeight.of('414px').and.landscape.css`
    height: 80vh;
  `}  
`

