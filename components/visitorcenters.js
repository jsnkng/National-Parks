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
          <Col__Container xs={12}>
            <h3>Visitor Centers</h3>
          </Col__Container>
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
    font-size: 2em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  p {
    font-size: .9em;
    padding: 0 1.5em 1em 0em;
    ${SuperQuery().minWidth.md.css`
      padding: 1.125em 0em;
      width: 75%;
    `}
  }
  p:last-child {
    font-size: .9em;
    padding: 0 0 1.5em 0;
  }
`
const Row__Container = styled(Row)`
  margin: 0;
  &:first-child {
    padding: .125em;
    border-bottom: 2px solid #ffffff;
  }
  &:last-child {
    border: none;
  }
  &.center {
    border-bottom: 2px solid #ffffff;
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
