import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Campgrounds = props => {
  const [campgrounds, setCampgrounds] = useState(props.campgrounds)
  console.log(campgrounds.images)
  return (
    <Content>
      <ResponsiveImage backgroundURL={campgrounds.images === undefined || campgrounds.images.length == 0 ? "" : "https://www.nps.gov"+campgrounds.images[0].url  } /><br /><br />
      <h3>{campgrounds.name}</h3>
      <p>{campgrounds.description}</p>
    </Content>
  )
}
  
export default Campgrounds

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