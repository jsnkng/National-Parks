import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Alerts = props => {
  const [alerts, setAlerts] = useState(props.alerts)
  return (
    <Content>
      <h3>{alerts.title}</h3>
      <p>{alerts.description}</p>
    </Content>
  )
}
  
export default Alerts

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