import React from 'react'
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

const Component = ({ alerts }) => {
  return (
    <Alerts>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row>
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
                    <p>{item.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Col>
            )
          })}
        </Row>
      </Accordion>
    </Alerts>
  )
}
  
export default Component

const Alerts = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;

  .accordion {
    background-color: #ffca13;
    color: #333333; 
    padding: .5em;
  }
  .accordion__item {
    color: #333333;
    border: none;
    padding:0;
    margin: .75em 0 .25em 0;
    ${SuperQuery().minWidth.md.css`
      padding: 0;
      margin: .5em 0 .5em 0;
    `}
  }
  .accordion__button {
    color: #333333;
    border: none;
    padding: 0;
    margin: 0;
    padding: .25em .75em 0 .75em;
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
    padding: .25em;
    ${SuperQuery().minWidth.md.css`
    padding: .375em 0 .375em .5em;
    margin: 0 0 .125em 0;
    `}
  }
  h3 {
    font-size: .875em;
    color: #333333;
    text-indent: 0em;
  }
  p {
    font-size: .75em;
    font-weight: 400;
    padding: 0;
    margin: .5em 1em 0 1.625em;
    color: #333333;
  }
  span {
    font-size: .75em;
    font-weight: 400;
    display: block;
    margin: .25em 0  .25em  0;
    text-transform: uppercase;
    color: #333333;
    text-indent: 0em;
  }
  
`

