import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Campgrounds = props => {
  const [campgrounds, setCampgrounds] = useState(props.campgrounds)
  return (
    <Col xs={12} sm={6} md={3}>
      <ResponsiveImage backgroundURL={campgrounds.images === undefined || campgrounds.images.length == 0 ? "" : "https://www.nps.gov"+campgrounds.images[0].url  } /><br /><br />
      <h3>{campgrounds.name}</h3>
      <p>{campgrounds.description}</p>
    </Col>
  )
}
  
export default Campgrounds

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
