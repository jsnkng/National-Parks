import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Weather = props => {
  const [park, setPark] = useState(props.park)
  
  return (
    <Container>
      <h3>Weather</h3>
      <p>{park.weatherInfo}</p>
    </Container>
  )
}
  
export default Weather

const Container = styled.div`
  background-color: #1e1d1e;
  color: #ffffff; 
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px 0;
  h3 {
    color: #ffffff;
    margin: 0;
    line-height: 1;
    align-self: center;
  }
  p {
    font-size: .9em;
  }
`
