import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Places = props => {
  const [places, setPlaces] = useState(props.places)
  if(places !== undefined) {
    if(Array.isArray(places)) {
      places.slice(0).map((item) => {
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
          <ResponsiveImage backgroundURL={places.listingimage.url === undefined || places.listingimage.url.length == 0 ? "" : places.listingimage.url  } /><br /><br />
          <Content>
            <h2>{places.title}</h2>
            <p>{places.listingdescription}</p>
          </Content>
        </>
      )
    }
  }
  return true
}
  
export default Places

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
