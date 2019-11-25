import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const NewsReleases = props => {
  const [newsReleases, setNewsReleases] = useState(props.newsReleases)
  return (
    <Grid>
      <Row>
        { newsReleases !== undefined && newsReleases.length != 0 &&
          <h2>News Releases</h2>
        }
      </Row>
      <Row>
        { newsReleases.slice(0).map((item) => {
          return(
            <Col xs={12} sm={6} md={3} key={item.id}>
              {item.image.url !== undefined && item.image.url != 0 &&
                <ResponsiveImage backgroundURL={item.image.url === undefined || item.image.url.length == 0 ? "" : item.image.url  } />
              }
              <h3>{item.title}</h3>
              <h4>{item.releaseDate}</h4>
              <p>{item.abstract}</p>
              <a href={item.url} target="_blank">Read more...</a>
            </Col>
          )
        })
        }
      </Row>
    </Grid>
  )
}
  
export default NewsReleases

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