import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const VisitorCenters = props => {
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  return (
    <VisitorCentersWrapper>
      <VisitorCenterGrid>
        <VisitorCenterRow>
          <VisitorCenterCol>
          { visitorCenters !== undefined && visitorCenters.length != 0 &&
          <h3>Visitor Centers</h3>
          }
          </VisitorCenterCol>
        </VisitorCenterRow>
        
        <VisitorCenterRow>
        { visitorCenters.slice(0).map((item) => {
          return(
            <VisitorCenterCol key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>{item.directionsInfo}</p>
            </VisitorCenterCol>
          )
        })
        }
        </VisitorCenterRow>
      </VisitorCenterGrid>
    </VisitorCentersWrapper>
  )
}
  
export default VisitorCenters

const VisitorCentersWrapper = styled.div`
  font-family: Helvetica;
  padding: 1em 0;

  h3 {
    background-color: #333333;
    color: #ffffff;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
  }
  p {
   font-size: .9em;
  }
`
const VisitorCenterGrid = styled(Grid)`
  
`
const VisitorCenterRow = styled(Row)`
`

const VisitorCenterCol = styled(Col)`
flex: 1 1 300px;
align-items: stretch;
padding: 10px;
`
