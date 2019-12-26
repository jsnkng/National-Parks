import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const Alerts = props => {
  const [alerts, setAlerts] = useState(props.alerts)

  return (
    <Grid>
      <Alerts__Container>
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <Row>
            <Col xs={12} sm={4} md={4} lg={4}>
              <h2>Alerts & Conditions</h2>
            </Col>
            { alerts === undefined || alerts.length === 0 &&
              <Col xs={12} sm={8} md={8} lg={6}>
                <h4>No Active Alerts</h4>
              </Col>
            }
            { alerts.slice(0).map((item) => {
              return (
                <Col xs={12} sm={4} md={4} lg={4} key={item.id}>
                  <AccordionItem key={item.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      <span>{item.category}</span>
                        <h3>{item.title}</h3>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="description">
                      <p>{item.description}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Col>
              )
            })}
          </Row>
        </Accordion>
      </Alerts__Container>
    </Grid>
  )
}
  
export default Alerts

const Alerts__Container = styled.div`
  background-color: #ffca13;
  color: #333333; 
  padding: 0 0 .5em 0;
  .accordion__button {
    margin: 0 0 0 .5em;
    color: #333333;
    padding: .5em;
    border: none;
  }
  h2 {
    background-color: #333333;
    color: #ffca13;
    line-height: 1;
    padding: .375em;
    border: none;

    ${SuperQuery().minWidth.md.css`
    `}
  }
  h3 {
    font-size: 1.125em;
    color: #333333;
  }
  p {
    font-size: .75em;
    font-weight: 400;
    margin: 0 .5em .5em 1.5em;
    padding: 0;
    color: #333333;
  }
  span {
    font-size: .875em;
    font-weight: 400;
    display: block;
    margin: .25em 0  0  0;
    text-transform: uppercase;
    color: #333333;
  }
  
`

