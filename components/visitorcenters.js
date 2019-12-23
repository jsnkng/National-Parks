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
      </Grid__Container>
    </Accordion>
  )
}
  
export default VisitorCenters

const Grid__Container = styled(Grid)`
  padding: 0;
  h3 {
    font-size: 2em;
    line-height: 1;
    margin: 0;
    padding: 0 0 .125em 0;
    border-bottom: 2px solid #ffffff;
  }
  p {
    padding: 0 0 1em 0;
    &:last-child {
    padding: 0;
    }
    ${SuperQuery().minWidth.md.css`
      width: 75%;
    `}
    ${SuperQuery().minWidth.lg.css`
      width: 66%;
    `}
  }
  p:last-child {
  }
`
const Row__Container = styled(Row)`
`
const Col__Container = styled(Col)`
`
