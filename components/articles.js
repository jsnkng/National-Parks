import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const Articles = props => {
  const [articles, setArticles] = useState(props.articles)
  return (
    <Grid>
      <Row>
        { articles !== undefined && articles.length != 0 &&
          <h2>Articles</h2>
        }
      </Row>
      <Row>
        { articles.slice(0).map((item) => {
          return(
            <Col xs={12} sm={6} md={3} key={item.id}>
              {item.listingimage.url !== undefined && item.listingimage.url != 0 &&
                <ResponsiveImage backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  } alt={item.listingimage.altText} />
            }
              <h3>{item.title}</h3>
              <p>{item.listingdescription}</p>
              <a href={item.url} target="_blank">Read more...</a>
            </Col>
          )
        })
        }
      </Row>
    </Grid>
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
  height: 220px;
  margin: 0;
`