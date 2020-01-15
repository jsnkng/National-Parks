import React, { useState, useEffect } from 'react'
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

const Component = ({ fees, title, windowDimension }) => {
  const [cols, setCols] = useState({ xs: 12, sm: 12, md: 12, lg: 12 })
  // const numCols = fees.length % 3 === 0 ? 3 :
  //                 fees.length % 2 === 0 ? 2 : 1
  // const dynCols = numCols === 3 || fees.length > 4 ? { xs: 12, sm: 12, md: 4, lg: 4 } :
  //                 numCols === 2 ? { xs: 12, sm: 6, md: 6, lg: 6 } :  
  //                 numCols === 1 ? { xs: 12, sm: 12, md: 12, lg: 12 } : 
  //                                 { xs: 12, sm: 12, md: 12, lg: 4 }

  const dynCols = fees.length > 1 ? { xs: 12, sm: 12, md: 12, lg: 12 } : {xs: 12, sm: 12, md: 12, lg: 12 }

  useEffect(() => {
    setCols(dynCols)
  }, [])


  return (
    <EntryFees>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row>
          <Col xs={12}>
            <h3>{title}</h3>
          </Col>
        </Row>
        <Row>
        { fees.slice(0).map((item, index) => {
          if ((item.cost == 0 && item.description != '') || (fees.length == 1)) {
            return (
              <Col xs={12} key={`${index}${item.title}`}>
                <AccordionItem>
                  {item.cost !== undefined && item.cost > 0 && 
                    <h4>${Number(item.cost).toFixed(2)} — {item.title}</h4>
                  }
                  <p style={{marginLeft: '.5rem'}}>{item.description}</p>
                </AccordionItem>
              </Col>
            )
          } else if (item.cost > 0 && item.description !== '') {
            return (
              <Col xs={cols.xs} sm={cols.sm} md={cols.md} lg={cols.lg} key={`${index}${item.title}`}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                    {item.cost !== undefined && Number(item.cost) > 0 && 
                      <h4>${Number(item.cost).toFixed(2)} — {item.title}</h4>
                    }
                    {item.cost !== undefined && Number(item.cost) === 0 && 
                      <h4>FREE–{item.title}</h4>
                    }
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.description}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Col>
            )
          } else if (item.description === '') {
            return (

              <Col xs={cols.xs} sm={cols.sm} md={cols.md} lg={cols.lg} key={`${index}${item.title}`}>
                <AccordionItem>
                  {item.cost !== undefined && Number(item.cost) > 0 && 
                    <h4>${Number(item.cost).toFixed(2)} — {item.title}</h4>
                  }
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
    background-color: #198b32;
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
    margin: 1rem 0 .75rem 0;
    
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
    padding: 0;
  }
  h3 {
    background-color: #f1f1f1;
    color: #198b32;
    font-size: 1.75rem;
    border: none;
    margin: 0;
    padding: .5rem;
   
  }
  h4 {
    color: #f1f1f1;
    font-size: 1.25rem;
    line-height: 1.1;
    margin-left: .25rem;
  }
  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: #f1f1f1;
    margin: .25rem 0 0 1.75rem;
    a { 
      font-weight: 700;
      color: #f1f1f1;
    }
  }
`

