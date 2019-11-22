import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const People = props => {
  const [people, setPeople] = useState(props.people)
  if(people !== undefined) {
    if(Array.isArray(people)) {
      people.slice(0).map((item) => {
        return(
          <>
            <ResponsiveImage backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  } /><br /><br />
            <Content>
              <h2>{item.title}</h2>
              <p>{item.listingdescription}</p>
            </Content>
          </>
        )
      })
    }
    else {
      return (
        <>
          <ResponsiveImage backgroundURL={people.listingimage.url === undefined || people.listingimage.url.length == 0 ? "" : people.listingimage.url  } /><br /><br />
          <Content>
            <h2>{people.title}</h2>
            <p>{people.listingdescription}</p>
          </Content>
        </>
      )
    }
  }
  return true
}
  
export default People

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
