import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

const Directions = props => {
  const [park, setPark] = useState(props.park)

  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container>
          <h3>Directions</h3>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        <Col__Container>
          <p>{park.directionsInfo}</p>
        </Col__Container>
      </Row__Container>
    </Grid__Container>
  )
}

export default Directions


const Grid__Container = styled(Grid)`
  padding: 1em 1em 0 1em;
  h3 {
    font-size: 2em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  h4 {
    font-size: 1.25em;
    line-height: 1.125;
    float: left;
    width: 100%;
    margin: 0 0 1em 0;
    ${SuperQuery().minWidth.md.css`
      margin: 0 0 .5em 0;
    `}
  }
  span {
    font-size: .675em;
    float: right;
  }
  p {
    font-size: 1em;
    clear: both;
    width: 100%;
    margin: 0 0 1em 0;
    ${SuperQuery().minWidth.md.css`
      font-size: .825em;
    `}
  }
`
const Row__Container = styled(Row)`
  padding: 1em 0;
  margin: 0;
  &:first-child {
    padding: 0;
    border-bottom: 1px solid;
  }
  &:last-child {
    border: none;
  }
`

const Col__Container = styled(Col)`
  padding: 2.25em 0 1em 0;
  border-bottom: 1px solid;
`
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
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
