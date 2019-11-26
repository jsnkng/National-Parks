import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const VisitorCenters = props => {
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  return (
    <GridStyled>
      <Row>
      <Col>
        { visitorCenters !== undefined && visitorCenters.length != 0 &&
        <h3>Visitor Centers</h3>
        }
        </Col>
      </Row>
      <Row>
        { visitorCenters.slice(0).map((item) => {
          return(
            <Col xs={12} sm={6} md={3} key={item.id}>
            
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>{item.directionsInfo}</p>
            </Col>
          )
        })
      }
      </Row>
    </GridStyled>
  )
  
}
  
export default VisitorCenters

const GridStyled = styled(Grid)`
  ${'' /* p {
   font-size: .75em;
  } */}
`

const ResponsiveImage = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
  margin: 0;
`