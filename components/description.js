import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from './elements/mapdiagram'
import MapLive from './elements/maplive'

const Component = ({ park, markers  }) => {
  return (
    <Description>
      <Grid>
        {/* <Row>
          <Col xs={12}>
            <h1><div dangerouslySetInnerHTML={{__html: park.name }}></div> <span>{park.designation}</span></h1>
          </Col>
        </Row> */}
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

const MapLive__Wrapper = styled.div`
  position:relative;
  height: 25rem;
  margin: .5rem -0.5rem 1.25rem -0.5rem;
  padding:  0;
  z-index: 10;

  ${SuperQuery().maxWidth.of('896px').and.maxHeight.of('414px').and.landscape.css`
    height: 80vh;
  `}  
`

