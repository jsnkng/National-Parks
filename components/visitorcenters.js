import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const VisitorCenters = props => {
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  return (
    <VisitorCenterWrapper>
      { visitorCenters !== undefined && visitorCenters.length != 0 &&
      <h3>Visitor Centers</h3>
      }
       
      { visitorCenters.slice(0).map((item) => {
        return(
          <VisitorCenterItem key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.directionsInfo}</p>
          </VisitorCenterItem>
        )
      })
      }
    </VisitorCenterWrapper>
  )
}
  
export default VisitorCenters

const VisitorCenterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: Helvetica;
  background-color: #a1dde9;
  color: #333333; 
  margin: 1em 0 0 0;

  h3 {
    background-color: #333333;
    color: #a1dde9;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
    padding: 0 0 0 10px;
  }
  p {
    font-size: .75em;
    padding: 0 10px ;
  }
`

const VisitorCenterItem = styled.div`
  flex: 1 1 300px;
  align-items: stretch;
  line-height: 1.25;
  padding: 10px;

`