import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

const VisitorCenters = props => {
  const [park, setPark] = useState(props.park)
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container>
          <h3>Visitor Centers at {props.park.name}</h3>
        </Col__Container>
      </Row__Container>
      
      <Row__Container>
        <Col__Container xs={12} >
          { visitorCenters.slice(0).map((item) => {
            return(
              <details key={item.id}>
                <summary>{item.name}</summary>
                <p>{item.description}</p>
                <p>{item.directionsInfo}</p>
              </details>
              )}
            )
          }
        </Col__Container>
      </Row__Container>
    </Grid__Container>
  )
}
  
export default VisitorCenters

const Grid__Container = styled(Grid)`
  word-wrap:break-word;
  :nth-of-type(1) {
    padding: 1em 1em 0 1em;
  }
  h3 {
    font-size: 2em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  summary {
    color: #a1dde9;
    font-size: 1.25em;
    font-weight: 600;
    padding:  .5em 0 ;
    border-bottom: 1px solid #3c3a3c;
  }
  h4 {
    display: inline;
  }
  h5 {
    font-size: 1.5em;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: .9em;
    padding: 0 1em;
  }
  ul {
    font-size: .9em;
    column-count: 1;
    list-style-type: none;
    padding: .25em 0 .5em 0;
    margin: 0;
    ${SuperQuery().minWidth.sm.css`
    column-count: 2;
    `}
  }
  li {
    list-style-type: none;
    padding: .3125em 0;
    font-weight: 200;
  }
`
const Row__Container = styled(Row)`
  margin: 0;
  &:first-child {
  padding: 0 0 .5em 0;
    border-bottom: 1px solid;
  }
  &:last-child {
    border: none;
  }
`
const Col__Container = styled(Col)`
  &.amenities {
    ul {
    column-count: 2;
    ${SuperQuery().minWidth.sm.css`
    column-count: 4;
    `}
    }
  }
  p {
    padding: 0;
  }
  &.details {
    p {
      font-weight: 200;
    }
  }
`
