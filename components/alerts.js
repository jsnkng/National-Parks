import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Alerts = props => {
  const [alerts, setAlerts] = useState(props.alerts)
  return (
      <div>
        { alerts !== undefined && alerts.length != 0 &&
          <h3>Alerts & Conditions</h3>
        }
       
        { alerts.slice(0).map((item) => {
          return(
            <div key={item.id}>
              <div style={{fontSize:'9px'}}>{item.category}</div>
                <h4 style={{fontSize:'.75em',margin:'2px 0 8px 0'}}>{item.title}</h4>
                {/* <h5 style={{fontSize:'9px';}}>{item.category}</h5> */}
                {/* <p>{item.description}</p> */}
              </div>
          )
        })
        }
        </div>
    // <Grid>
    //   <Row>
    //     <Col>
    //     { alerts !== undefined && alerts.length != 0 &&
    //       <h2>Alerts</h2>
    //     }
    //     </Col>
    //   </Row>
    //   <Row>
    //     { alerts.slice(0).map((item) => {
    //       return(
    //         <Col xs={12} sm={6} md={3} key={item.id}>
             
    //           <h3>{item.title}</h3>
    //           <h4>{item.category}</h4>
    //           <p>{item.description}</p>
    //         </Col>
    //       )
    //     })
    //     }
    //   </Row>
    // </Grid>
  )

}
  
export default Alerts
