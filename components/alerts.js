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
  const numCols = alerts.length % 3 === 0 ? 3 :
                  alerts.length % 2 === 0 ? 2 : 1
  const cols = numCols === 3 || alerts.length > 4 ? { xs: 12, sm: 12, md: 4, lg: 4 } :
               numCols === 2 ? { xs: 12, sm: 6, md: 6, lg: 6 } :  
               numCols === 1 ? { xs: 12, sm: 12, md: 12, lg: 12 } : 
                               { xs: 12, sm: 12, md: 12, lg: 4 }


  return (
    <Alerts>
    <Grid>
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <Row>
            <Col xs={12}>
              <h2>Alerts & Conditions</h2>
            </Col>
            { alerts.slice(0).map((item) => {
              return (
                <Col xs={cols.xs} md={cols.md} key={item.id} className="summary">
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
          </Row>
        </Accordion>
      </Grid>
    </Alerts>
  )
}
  
export default Component

const Alerts = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  margin: 1rem 0 .5rem 0;
  .accordion {
    background-color: #ffca13;
    color: #333333; 
    padding: .5rem;
    margin: 0;

  }
  .accordion__item {
    color: #333333;
    border: none;
    padding: 0;
    margin: 1rem 0;
    
  }
  .accordion__button {
    color: #333333;
    border: none;
    margin: 0;
    padding: 0 .25rem 0 1.5rem;

    span {
      display: block;
      margin: 0 0 0 -.375rem;
      text-transform: uppercase;
      color: #333333;
      text-indent: 0rem;
    }
  }
  .accordion__button:before {
    height: .625rem;
    width: .625rem;
    margin: .5rem 0 0 -1.5rem;
  }
  .accordion__panel {
    border: none;
  }
  h2 {
    background-color: #333333;
    color: #ffca13;
    border: none;
    margin: 0;
    padding: .5rem;
   
  }
  h3 {
    color: #333333;
    font-size: 1.125rem;
    text-indent: 0rem;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    color: #333333;
    margin: .25rem 1rem 0 1rem;
    a { 
      font-weight: 700;
      color: #333333;
    }
  }
`

