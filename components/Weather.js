import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Weather = props => {
  const [park, setPark] = useState(props.park)
  
  return (
    <Container>
      <h3>Weather</h3>
      <Group>
        <Row>
          <Col xs={12}>
            <Item>
              <p>{park.weatherInfo}</p>
            </Item>
          </Col>
        </Row>
      </Group>
    </Container>
  )
}
  
export default Weather

const Container = styled(Grid)`
  background-color: #1e1d1e;
  color: #ffffff; 
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 10px 0;
  h3 {
    color: #ffffff;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  p {
    font-size: .9em;
  }
`
const Group = styled.div`
  padding: 10px;
`
const Item = styled.div`
  flex: 1 1 300px;
  align-items: stretch;
  line-height: 1.25;
  padding: 10 0px;
`
