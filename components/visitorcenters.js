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

const VisitorCenters = props => {
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  return (  
    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
      <Grid__Container>
        <Row__Container>
            <h3>Visitor Centers</h3>
        </Row__Container>
        { visitorCenters.slice(0).map((item) => {
          return (
            <Row__Container key={item.id}>
              <Col__Container xs={12}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {item.name}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                  <Row__Container className="center">
                    <Col__Container xs={12}>
                      <p>{item.description}</p>
                      <p>{item.directionsInfo}</p>
                    </Col__Container>
                  </Row__Container>
                  </AccordionItemPanel>
                </AccordionItem>
              </Col__Container>
            </Row__Container>
          )}
          )
        }
      </Grid__Container>
    </Accordion>
  )
}
  
export default VisitorCenters


const Grid__Container = styled(Grid)`
padding: 1em .5em 0 .5em;
  h3 {
    font-size: 1.625em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  p {
    font-size: .9em;
    padding: .75em 1.5em .254em .75em;
    ${SuperQuery().minWidth.md.css`
      padding: 1em 1.5em .25em 1.5em;
      width: 50%;
    `}
  }
  p:last-child {
    padding-top: 0;
    padding-bottom: 1.5em;
  }
`
const Row__Container = styled(Row)`
  margin: 0;
  &:first-child {
    padding: .125em;
    border-bottom: 1px solid #b1b0a7;
  }
  &:last-child {
    border: none;
  }
  &.center {
    border-bottom: 2px solid #b1b0a7;
  }
`
const Col__Container = styled(Col)`
padding: 0;
  &.amenities {
    ul {
      column-count: 2;
      ${SuperQuery().minWidth.sm.css`
        column-count: 4;
      `}
    }
  }
  
  &.details {
    p {
      font-weight: 200;
    }
  }
`
// .description {
//   padding: .75em 1.5em;
   
//   }
//   .details {
   
//     font-size: .9em;
//   padding: 0em 1.5em 1.5em 1.5em;
   
//   }