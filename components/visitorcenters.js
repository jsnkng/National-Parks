import React, { useState } from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
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
    <Grid>
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
        <Row>
          <Col xs={12}>
            <h2>Visitor Centers</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          { visitorCenters.slice(0).map((item) => {
            return (
            <AccordionItem key={item.id}>
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
            )
            })
          }
          </Col>
        </Row>
      </Accordion>
    </Grid>
  )
}
  
export default VisitorCenters
