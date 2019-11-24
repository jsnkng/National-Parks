import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const People = props => {
  const [people, setPeople] = useState(props.people)
  return (
    <Content>
      <ResponsiveImage backgroundURL={people.listingimage.url === undefined || people.listingimage.url.length == 0 ? "" : people.listingimage.url  } /><br /><br />
      <h3>{people.title}</h3>
      <p>{people.listingdescription}</p>
    </Content>
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
const Content = styled.div`
  flex-basis: 25%;  
  font-family: Helvetica;
  padding: 15px;
  margin: 0;
`