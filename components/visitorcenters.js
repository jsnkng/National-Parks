import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VisitorCenters = props => {
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  return (
    <Content>
      <h3>{visitorCenters.name}</h3>
      <p>{visitorCenters.description}</p>
    </Content>
  )
}
  
export default VisitorCenters

const ResponsiveImage = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 33%;
  height: 150px;
  margin: 0;
`
const Content = styled.div`
  font-family: Helvetica;
  padding: 15px;
  margin: 0;
`