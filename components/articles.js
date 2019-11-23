import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Articles = props => {
  const [articles, setArticles] = useState(props.articles)
  return (
    <Content>
      <ResponsiveImage backgroundURL={articles.listingimage.url === undefined || articles.listingimage.url.length == 0 ? "" : articles.listingimage.url  } /><br /><br />
      <h3>{articles.title}</h3>
      <p>{articles.listingdescription}</p>
    </Content>
  )
}
  
export default Articles

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