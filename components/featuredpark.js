import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from './mapdiagram'

const FeaturedPark = props => {
  const [park, setPark] = useState(props.park)
  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container xs={12}>
          <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${props.stateCode}/park/${props.data.parkCode}`}>
      
          <a href={item.url} target="_blank"><Image backgroundURL={park.images[0].url === undefined || park.images[0].url.length == 0 ? "" : park.images[0].url  }  /></a>  
          </Link>
          <h2>{park.name} {park.designation}</h2>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        <Col__Container xs={12} sm={12} md={8} lg={8} xl={8}>
          <p>{park.description}</p>
        </Col__Container>
        <Col__Container xs={12} sm={12} md={4} lg={4} xl={4}>
          <MapDiagram__Wrapper>
            <MapDiagram highlighted={null} onHighlight={(terr) => setHighlight(terr)} states={park.states} />
          </MapDiagram__Wrapper>
          
        </Col__Container>
      </Row__Container>
    </Grid__Container>
  )
}
  
export default FeaturedPark


const MapDiagram__Wrapper = styled.div`
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
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  width: 100%;
  height: 12em;
  margin: 0 0 1em 0;
  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
`