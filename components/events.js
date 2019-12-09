import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Events = props => {
  const [events, setEvents] = useState(props.events)
  return (
    <EventsWrapper>
    <EventsGrid>
    <EventsRow>
    <EventsCol>
      { events !== undefined && events.length != 0 &&
      <h3>Events</h3>
      }
      </EventsCol>
    </EventsRow>
    <EventsRow>
      { events.slice(0,6).map((item) => {
        return(
          <EventsCol xs={12} sm={4} md={4} key={item.id}>
            {item.images[0] !== undefined && item.images.length[0] != 0 &&
                <ResponsiveImage backgroundURL={item.images[0] === undefined || item.images.length[0] == 0 ? "" : "https://www.nps.gov"+item.images[0].url } />
            }
            <h4>{item.title}</h4>
            <div dangerouslySetInnerHTML={{__html:item.description}} />
          </EventsCol>
        )
      })
    }
    </EventsRow>
  </EventsGrid>
  </EventsWrapper>
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

const EventsWrapper = styled.div`
  font-family: Helvetica;
  padding: 1em 0;

  h3 {
    background-color: #333333;
    color: #ffffff;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
  }
  p {
   font-size: .9em;
  }
`
const EventsGrid = styled(Grid)`
  
`
const EventsRow = styled(Row)`
`

const EventsCol = styled(Col)`
flex: 1 1 300px;
align-items: stretch;
padding: 10px;
`
