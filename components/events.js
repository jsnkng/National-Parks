import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Events = props => {
  const [events, setEvents] = useState(props.events)
  console.log(events.images)
  return (
    <Content>
      <ResponsiveImage backgroundURL={events.images === undefined || events.images.length == 0 ? "" : "https://www.nps.gov"+events.images[0].url  } /><br /><br />
      <h3>{events.title}</h3>
      <p>{events.description}</p>
    </Content>
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
const Content = styled.div`
flex-basis: 25%;  
  font-family: Helvetica;
  padding: 15px;
  margin: 0;
`