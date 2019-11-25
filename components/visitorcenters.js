import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const VisitorCenters = props => {
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  return (
    <Col xs={12} sm={6} md={3}>
      <h3>{visitorCenters.name}</h3>
      <p>{visitorCenters.description}</p>
      <p>{visitorCenters.directionsInfo}</p>
    </Col>
  )
}
  
export default VisitorCenters

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