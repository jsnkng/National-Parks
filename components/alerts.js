import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Alerts = props => {
  const [alerts, setAlerts] = useState(props.alerts)
  return (
    <Col xs={12} sm={6} md={3}>
      <h3>{alerts.title}</h3>
      <h4>{alerts.category}</h4>
      <p>{alerts.description}</p>
    </Col>
  )
}
  
export default Alerts
