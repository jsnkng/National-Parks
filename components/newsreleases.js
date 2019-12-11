import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const NewsReleases = props => {
  const [newsReleases, setNewsReleases] = useState(props.newsReleases)
  const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
  
  return (
    <Container>
      <h3>News Releases</h3>
      <Group>
        <Row>
          { newsReleases.slice(0,4).map((item) => {
            return(
              <Col xs={12} sm={6} md={6} key={item.id}>
                <Item>
                  <a href={item.url} target="_blank"><Image backgroundURL={item.image.url === undefined || item.image.url.length == 0 ? "/US-National-Parks-logo-sml-bw.png" : item.image.url  } /></a>
                  <h4><a href={item.url} target="_blank">{toTitleCase(item.title)}</a></h4>
                  <h5>{item.releasedate}</h5>
                  <p>{item.abstract.substring(0, 200)}</p>
                </Item>
              </Col>
            )
          })
          }
        </Row>
      </Group>
    </Container>
  )
}
  
export default NewsReleases

const Container = styled(Grid)`
  background-color: #d7d6cb;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  h3 {
    color: #d7d6cb;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
    font-size: .9em;
    width: 50%;
    margin-left: 4%;
    float: left;
  }
  h5 {
    font-size: .75em;
    width: 50%;
    margin-left: 4%;
    float: left;
  }
  p {
    font-size: .75em;
    clear: both;
    padding: 10px 10px 10px 0;
  }
`
const Group = styled.div`
  padding: 10px;
`
const Item = styled.div`
  flex: 1 1 300px;
  align-items: stretch;
  line-height: 1.25;
  padding: 10px 0px;
`
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 40vw;
  min-width: 140px;
  max-width: 40%;
  height: 10vw;
  min-height: 100px;
  max-height: 140px;
  margin: 0;
`
