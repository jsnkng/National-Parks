import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Events = props => {
  const [events, setEvents] = useState(props.events)
  return (
    <Grid>
    <Row>
      { events !== undefined && events.length != 0 &&
      <h2>Events</h2>
      }
    </Row>
    <Row>
      { events.slice(0).map((item) => {
        return(
          <Col xs={12} sm={6} md={3} key={item.id}>
            {item.images[0] !== undefined && item.images.length[0] != 0 &&
                <ResponsiveImage backgroundURL={item.images[0] === undefined || item.images.length[0] == 0 ? "" : "https://www.nps.gov"+item.images[0].url } />
            }
            <h3>{item.title}</h3>
            <p>{item.description}</p>
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
  height: 150px;
  margin: 0;
`
