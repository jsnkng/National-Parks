import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Alerts = props => {
  const [alerts, setAlerts] = useState(props.alerts)

  return (
    <Grid__Container>
      <Row>
        <Col xs={12} sm={4} md={4} lg={6}>
          <h3>Alerts & Conditions</h3>
        </Col>
        { alerts === undefined || alerts.length === 0 &&
          <Col xs={12} sm={8} md={8} lg={6}>
            <h4>No Active Alerts</h4>
          </Col>
        }
        { alerts.slice(0).map((item) => {
          return (
            <Col xs={6} sm={4} md={4} lg={3} key={item.id}>
              <Item>
                <span>{item.category}</span>
                
                <details>
                  <summary>{item.title}</summary>
                  {item.description}
                </details>
              </Item>
            </Col>
          )
        })}
      </Row>
    </Grid__Container>
  )
}
  
export default Alerts

const Grid__Container = styled(Grid)`
  background-color: #ffca13;
  color: #333333; 
  padding: 0 0 .5em 0;
  margin: 0;

  h3 {
    background-color: #333333;
    color: #ffca13;
    padding: .85em 0 .85em .85em;
    line-height: 1;
    width: 100%;
  }
  h4 {
    font-size: .75em;
  }
  details {
    font-size: .75em;
  }
  summary {
    margin: .25em 0;
    font-weight: 600;
    cursor: pointer;
  }
  span {
    display: block;
    margin: 1em 0 0 0;
  }
`
const Item = styled.div`
  line-height: 1.125em;
  padding: 0 0 .5em 1.25em;
`
