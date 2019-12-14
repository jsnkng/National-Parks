import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

const Alerts = props => {
  const [alerts, setAlerts] = useState(props.alerts)

  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container xs={12} sm={4} md={4} lg={4}>
          <h3>Alerts & Conditions</h3>
        </Col__Container>
        { alerts === undefined || alerts.length === 0 &&
          <Col__Container xs={12} sm={8} md={8} lg={6}>
            <h4>No Active Alerts</h4>
          </Col__Container>
        }
        { alerts.slice(0).map((item) => {
          return (
            <Col__Container xs={12} sm={4} md={4} lg={4} key={item.id}>
              <span>{item.category}</span>
              
              <details>
                <summary>{item.title}</summary>
                {item.description}
              </details>
            </Col__Container>
          )
        })}
      </Row__Container>
    </Grid__Container>
  )
}
  
export default Alerts

const Grid__Container = styled(Grid)`
  background-color: #ffca13;
  color: #333333; 
  padding: 0 0 .5em 0;

  margin: 0 1em;
  ${SuperQuery().minWidth.md.css`
    margin: 1em auto 0 auto;
  `}
  h3 {
    background-color: #333333;
    color: #ffca13;
    padding: .85em 0 .85em .85em;
    line-height: 1;
    width: 97%;
    ${SuperQuery().minWidth.md.css`
      margin: 0 1em 0  0;
      width: 90%;
    `}
  }
  h4 {
    font-size: .75em;
  }
  details {
    font-size: .75em;
      margin: 0 1em 0 1em;
    ${SuperQuery().minWidth.md.css`
      margin: 0;
      padding: 0 1em 0 1em;
    `}
  }
  summary {
    margin: .25em 0;
    font-weight: 600;
    cursor: pointer;
    line-height: 1;
  }
  span {
    font-size: .75em;
    display: block;
    text-transform: uppercase;
    margin: .675em 0 0 1em;
    ${SuperQuery().minWidth.md.css`
      margin: .675em 0 0 1em;
    `}
  }
  details
{
    transition: height .5s ease;
    overflow: hidden;
}

details:not([open])
{
    height: 2.5em;
}

details[open]
{
    height: 13.50em;
}
  
  
  @keyframes sweep {
    0%    {opacity: 0; margin-left: -10px}
    100%  {opacity: 1; margin-left: 0px}
  }
`
const Row__Container = styled(Row)`
  margin: 0;
  padding: 0;
`
const Col__Container = styled(Col)`
  margin: 0;
  padding: 0;
`
const Item = styled.div`
`
