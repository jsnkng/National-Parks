import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Alerts = props => {
  const [alerts, setAlerts] = useState(props.alerts)
  return (
    <AlertsWrapper>
      <h3>Alerts & Conditions</h3>
      { alerts === undefined || alerts.length === 0 &&
        <h4 style={{fontSize:'.75em',margin:'2px 0 8px 0'}}>No Alerts at this Time.</h4>
      }
      
      { alerts.slice(0).map((item) => {
        return(
          <AlertItem key={item.id}>
            <div style={{fontSize:'9px'}}>{item.category}</div>
            <h4 style={{fontSize:'.75em',margin:'2px 0 8px 0'}}>{item.title}</h4>
            {/* <h5 style={{fontSize:'9px';}}>{item.category}</h5> */}
            {/* <p>{item.description}</p> */}
          </AlertItem>
        )
      })
      }
    </AlertsWrapper>
  )

}
  
export default Alerts



const AlertsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: Helvetica;
  background-color: #ffca13;
  color: #333333; 
  margin: 1em 0 0 0;

  h3 {
    background-color: #333333;
    color: #ffca13;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;align-self: center;
  }
  h4 {
    padding: 10px;
  }
`

const AlertItem = styled.div`
  flex: 1 1 100px;
  align-items: stretch;
  line-height: 1.25;
  padding: 10px;

`