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
        { visitorCenters.slice(0).map((item) => {
        return(
           <details>
              <summary>{item.name}</summary>
              <p>{item.description}</p>
              <p>{item.directionsInfo}</p>
            </details>
          )}
        )
      }
    </Container>
  )
}
  
export default VisitorCenters

const Container = styled.div`
  margin: 0 ;
  padding: 10px 0;
  h3 {
    color: #ffffff;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  p {
    padding: 0 25px;
    font-size: .8em;
  }
  details {
    width: 100%;
    color: #ffffff;
  }
` 
