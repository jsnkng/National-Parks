import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const Component = ({ visitorCenters }) => {
  return (  
    <VisitorCenters>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row__Decorated>
          <Col xs={12}>
            <h2>Visitor Centers</h2>
          </Col>
        </Row__Decorated>
        <Row__Decorated>
          <Col xs={12}>
          { visitorCenters.slice(0).map((item) => {
            return (
          <LazyLoad height={'100%'} offset={100} key={item.id}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <h3>{item.name}</h3>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="description">
                  <p>{item.description}</p>
                  <p>{item.directionsInfo}</p>
                </AccordionItemPanel>
              </AccordionItem>
            </LazyLoad>
            )
            })
          }
          </Col>
        </Row__Decorated>
      </Accordion>
    </VisitorCenters>
  )
}
  
export default Component

const VisitorCenters = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
