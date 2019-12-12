import React, { useState } from 'react'
import styled from 'styled-components'
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
    <Container>
    <h3>Visitor Centers</h3>
      <Accordion allowZeroExpanded={true}>
        { visitorCenters.slice(0).map((item) => {

        return(
            <AccordionItem key={item.id} >
              <AccordionItemHeading>
                <AccordionItemButton>
                  <h4>{item.name}</h4>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item.description}</p>
                <p>{item.directionsInfo}</p>
              </AccordionItemPanel>
            </AccordionItem>
          )}
        )
      }
      </Accordion>
    </Container>
  )
}
  
export default VisitorCenters

const Container = styled.div`
  h3 {
  color: #ffffff;
  margin: 0;
  line-height: 1;
  align-self: center;
  }
  h4 {
    display: inline;
  }
  
  p {
    padding: 0 25px;
    font-size: .8em;
  }
  .accordion__panel {
    color: #ffffff;
  }
  .accordion__button {
    cursor: pointer;
    padding: 12px 0;
    width: 100%;
    text-align: left;
    border: none;

    p {
      padding: 0 36px;
    }
  }
  .accordion__button:hover {
      background-color: transparent;
      border: none;
  }
` 
