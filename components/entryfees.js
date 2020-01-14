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

const Component = ({ fees, title }) => {
  return (
    <EntryFees>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row>
          <Col xs={12}>
            <h3>{ title }</h3>
          </Col>
        </Row>
        <Row>
        { fees.slice(0).map((item, index) => {
          if(item.description !== '') {
            return (
              <Col xs={12} lg={4}>
                <AccordionItem key={`${index}${item.title}`}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    {item.cost !== undefined && item.cost > 0 && 
                      <h4>{item.title}<br />${Number(item.cost).toFixed(2)}</h4>
                    }
                    {item.cost !== undefined && item.cost == 0 && 
                      <h4>{item.title}<br />FREE</h4>
                    }
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Col>
            )
          } else {
            return (
              <Col xs={12} md={4}>
                <AccordionItem key={`${index}${item.title}`}>
                  <h4>{item.cost !== undefined && item.cost > 0 && `$${Number(item.cost).toFixed(2)}—`}{item.title}</h4>
                </AccordionItem>
              </Col>
            )
          }
         
        })}
        </Row>
        </Accordion>
    </EntryFees>
  )
}
  
export default Component

const EntryFees = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;

  .accordion {
    background-color: #00ac47;
    color: #f1f1f1; 
    padding: .5rem;
  }

  .accordion__item + .accordion__item {
    border-bottom: none;
  }
  .accordion__item {
    color: #f1f1f1;
    border: none;
    padding: 0 1rem 0 0;
    margin: 1rem 0 1rem 0;
    
  }
  .accordion__item > h4 {
    margin-left: 1.5rem;
  }
  .accordion__button {
    color: #f1f1f1;
    border: none;
    margin: 0;
    padding: 0 .25rem 0 1.5rem;

    span {
      display: block;
      margin: 0 0 0 -.375rem;
      text-transform: uppercase;
      color: #f1f1f1;
      text-indent: 0rem;
    }
  }

  .accordion__button:before {
    display: inline-block;
    float: left;
    content: '+';
    height: 1rem;
    width: 1rem;
    margin: -0.125rem 0 0 -1rem;

    border-bottom: none;
    border-right: none;
    transform: rotate(0deg);
  }
  .accordion__button[aria-expanded='true'],
  .accordion__button[aria-selected='true'] {
    color: #ffffff;
  }
  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(0deg);
    content: '-';

  }

  .accordion__panel {
    border: none;
  }
  h3 {
    background-color: #f1f1f1;
    color: #00ac47;
    font-size: 1.75rem;
    border: none;
    margin: 0;
    padding: .5rem;
   
  }
  h4 {
    color: #f1f1f1;
    font-size: 1.25rem;
    text-indent: 0rem;
  }
  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: #f1f1f1;
    margin: .25rem 1rem 0 1.5rem;
    a { 
      font-weight: 700;
      color: #f1f1f1;
    }
  }
`

