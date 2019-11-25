import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Places = props => {
  const [places, setPlaces] = useState(props.places)
  return (
    <Col xs={12} sm={6} md={3}>
      <ResponsiveImage backgroundURL={places.listingimage.url === undefined || places.listingimage.url.length == 0 ? "" : places.listingimage.url  } /><br /><br />
      <h3>{places.title}</h3>
      <p>{places.listingdescription}</p>
    </Col>
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