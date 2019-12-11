import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Alerts = props => {
  const [alerts, setAlerts] = useState(props.alerts)
  return (
    <AlertsContainer>
      <h3>Alerts & Conditions</h3>
      { alerts === undefined || alerts.length === 0 &&
        <h4>No Active Alerts</h4>
      }
      
      { alerts.slice(0).map((item) => {
        return(
          <AlertItem key={item.id}>
            <div>{item.category}</div>
            <h4>{item.title}</h4>
            {/* <h5 style={{fontSize:'9px';}}>{item.category}</h5> */}
            {/* <p>{item.description}</p> */}
          </AlertItem>
        )
      })
      }
    </AlertsContainer>
  )

}
  
export default Alerts


const AlertsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #ffca13;
  color: #333333; 

  h3 {
    background-color: #333333;
    color: #ffca13;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  div {
    font-size: 12px;
  }
  h4 {
    font-size: 1em;
    margin: 12px 0 8px 8px;
  }
`

const AlertItem = styled.div`
  flex: 1 1 100px;
  align-items: stretch;
  line-height: 1.25;
  padding: 10px;
  h4 {
    font-size: 1em;
    margin: 2px 0 8px 0;
  }
`