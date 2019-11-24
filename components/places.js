import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Places = props => {
  const [places, setPlaces] = useState(props.places)
  return (
    <Content>
      <ResponsiveImage backgroundURL={places.listingimage.url === undefined || places.listingimage.url.length == 0 ? "" : places.listingimage.url  } /><br /><br />
      <h3>{places.title}</h3>
      <p>{places.listingdescription}</p>
    </Content>
  )
}
  
export default Places

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