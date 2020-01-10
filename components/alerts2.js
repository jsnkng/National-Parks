import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'


const Component = ({origin, parkCode}) => {
  const [alerts, setAlerts] = useState()
  useEffect(() => {
    (async () => {
    let response = await fetch(`${origin}/api/alerts/${parkCode}`)
    let result = await response.json()
    setAlerts(result.alerts)
   
  })()
  }, [])
  return (
    alerts !== undefined && alerts.length != 0 &&
    <Alerts>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row__Decorated>
          <Col xs={12} sm={6} md={6} lg={4}>
            <h2>Alerts & Conditions</h2>
          </Col>
          { alerts.slice(0).map((item) => {
            return (
              <Col xs={12} sm={6} md={6} lg={4} key={item.id} className="summary">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{item.category}</span>
                      <h3>{item.title}</h3>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.description}{` `}
                    { item.url !== undefined && item.url !== "" &&
                    <a href={item.url} target="_blank">[More]</a>
                    }</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Col>
            )
          })}
        </Row__Decorated>
      </Accordion>
    </Alerts>
  )
}
  
export default Component

const Alerts = styled(Grid)`
  padding-top: 1rem;
  padding-bottom: 1rem;

  .accordion {
    background-color: #ffca13;
    color: #333333; 
    padding: .5rem;
  }
  .accordion__item {
    color: #333333;
    border: none;
    padding:0;
    margin: .75rem 0 .25rem 0;
    ${SuperQuery().minWidth.md.css`
      padding: 0;
      margin: .5rem 0 .5rem 0;
    `}
  }
  .accordion__button {
    color: #333333;
    border: none;
    padding: 0;
    margin: 0;
    padding: .25rem .75rem 0 .75rem;
  }
  .accordion__panel {
    border: none;
  }
  h2 {
    background-color: #333333;
    color: #ffca13;
    line-height: 1;
    padding: 0;
    border: none;
    padding: .25rem;
    ${SuperQuery().minWidth.md.css`
    padding: .375rem 0 .375rem .5rem;
    margin: 0 0 .125rem 0;
    `}
  }
  h3 {
    font-size: .875rem;
    color: #333333;
    text-indent: 0rem;
  }
  p {
    font-size: .75rem;
    font-weight: 400;
    padding: 0;
    margin: .5rem 1rem 0 1.625rem;
    color: #333333;
  }
  span {
    font-size: .75rem;
    font-weight: 400;
    display: block;
    margin: .25rem 0  .25rem  0;
    text-transform: uppercase;
    color: #333333;
    text-indent: 0rem;
  }
  
`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`

