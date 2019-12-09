import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Articles = props => {
  const [articles, setArticles] = useState(props.articles)
  return (
    <ArticlesWrapper>
    <ArticlesGrid>
      <ArticlesRow>
        <ArticlesCol>
        { articles !== undefined && articles.length != 0 &&
          <h3>Articles</h3>
        }
        </ArticlesCol>
      </ArticlesRow>
      <ArticlesRow>
        { articles.slice(0,8).map((item) => {
          return(
            <ArticlesCol xs={12} sm={6} md={3} key={item.id}>
              {item.listingimage.url !== undefined && item.listingimage.url != 0 &&
                <ResponsiveImage backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  } alt={item.listingimage.altText} />
            }
              <h4>{item.title}</h4>
              <p>{item.listingdescription}</p>
              <a href={item.url} target="_blank">Read more...</a>
            </ArticlesCol>
          )
        })
        }
      </ArticlesRow>
    </ArticlesGrid>
    </ArticlesWrapper>
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
  height: 16vw;
  min-height: 200px;
  margin: 0;
`

const ArticlesWrapper = styled.div`
  font-family: Helvetica;
  padding: 1em 0;

  h3 {
    background-color: #333333;
    color: #ffffff;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
  }
  p {
   font-size: .9em;
  }
`
const ArticlesGrid = styled(Grid)`
  
`
const ArticlesRow = styled(Row)`
`

const ArticlesCol = styled(Col)`
flex: 1 1 300px;
align-items: stretch;
padding: 10px;
`
