import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Events = props => {
  const [events, setEvents] = useState(props.events)
  return (
    <Grid>
    <Row>
    <Col>
      { events !== undefined && events.length != 0 &&
      <h2>Events</h2>
      }
      </Col>
    </Row>
    <Row>
      { events.slice(0,6).map((item) => {
        return(
          <Col xs={12} sm={4} md={4} key={item.id}>
            {item.images[0] !== undefined && item.images.length[0] != 0 &&
                <ResponsiveImage backgroundURL={item.images[0] === undefined || item.images.length[0] == 0 ? "" : "https://www.nps.gov"+item.images[0].url } />
            }
            <h3>{item.title}</h3>
            <div dangerouslySetInnerHTML={{__html:item.description}} />
          </Col>
        )
      })
    }
    </Row>
  </Grid>
  )
}
  
export default Events

const ResponsiveImage = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 16vw;
  min-height: 300px;
  margin: 0;
`
