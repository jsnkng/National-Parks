import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const People = props => {
  const [people, setPeople] = useState(props.people)
  return (
    <Col xs={12} sm={6} md={3}>
      <ResponsiveImage backgroundURL={people.listingimage.url === undefined || people.listingimage.url.length == 0 ? "" : people.listingimage.url  } /><br /><br />
      <h3>{people.title}</h3>
      <p>{people.listingdescription}</p>
      <a href={people.url} target="_blank">More...</a>
    </Col>
  )
}
  
export default People

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