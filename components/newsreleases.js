import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const NewsReleases = props => {
  const [newsReleases, setNewsReleases] = useState(props.newsReleases)
  const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return Intl.DateTimeFormat('en-US').format(nd)
  }

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
                  
                  <h5>{ toDateFormat(item.releasedate) }</h5>
                  <h4><a href={item.url} target="_blank">{toTitleCase(item.title)}</a></h4>
                  <p>{item.abstract.substring(0, 350)}</p>
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
    font-size: .8em;
    width: 66%;
    margin-left: 4%;
    float: left;
  }
  h5 {
    font-size: .6em;
    width: 66%;
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
  width: 13vw;
  min-width: 70px;
  max-width: 32%;
  height: 10vw;
  min-height: 100px;
  max-height: 140px;
  margin: 0;
`
