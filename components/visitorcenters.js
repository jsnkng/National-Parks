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
    <Grid__Container>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row__Container>
          <Col__Container xs={12}>
            <h3>Visitor Centers</h3>
          </Col__Container>
        </Row__Container>
        <Row__Container>
          <Col__Container xs={12}>
          { visitorCenters.slice(0).map((item) => {
            return (
            <AccordionItem key={item.id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  {item.name}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item.description}</p>
                <p>{item.directionsInfo}</p>
              </AccordionItemPanel>
            </AccordionItem>
            )
            })
          }
          </Col__Container>
        </Row__Container>
      </Accordion>
    </Grid__Container>
  )
}
  
export default VisitorCenters

const Grid__Container = styled(Grid)`
  padding: 0;
   
  h3 {
    font-size: 2em;
    line-height: 1;
    margin: 0;
    padding: .425em .3em;
    border-bottom: 2px solid #ffffff;
    ${SuperQuery().minWidth.md.css`
    border-bottom: 4px solid #ffffff;
      padding: .425em .25em .425em 0;
    `}
  }
  p {
    padding: .5em 1em;
    ${SuperQuery().minWidth.md.css`
      padding: .25em;
    `}
    ${SuperQuery().minWidth.lg.css`
      width: 85%;
    `}
    &:first-of-type {
      padding-top:0;
      margin-top:0;
    }
    &:last-of-type {
      padding-top:0;
      margin-top:0;
    }
  }
  p:last-child {
  }
`
const Row__Container = styled(Row)`
`
const Col__Container = styled(Col)`
  padding: 0;
`
