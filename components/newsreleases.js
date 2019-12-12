import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

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
    <Grid__Container>
      <h3>Latest Park News</h3>
      <Group>
        <Row>
          { newsReleases.slice(0,6).map((item) => {
            return(
              <Col__Container xs={12} sm={6} md={4} key={item.id}>
                  <a href={item.url} target="_blank"><Image backgroundURL={item.image.url === undefined || item.image.url.length == 0 ? "/US-National-Parks-logo-sml-bw.png" : item.image.url  } /></a>
                  
                  <date>{ toDateFormat(item.releasedate) }</date>
                  <h4><a href={item.url} target="_blank">{toTitleCase(item.title)}</a></h4>
                  <p>{item.abstract.substring(0, 350)}</p>
              </Col__Container>
            )
          })
          }
        </Row>
      </Group>
    </Grid__Container>
  )
}
  
export default NewsReleases

const Grid__Container = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  h3 {
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
    font-size: 1em;
    margin: 0;
    width: 60%;
    margin-left: 4%;
    float: left;
    ${SuperQuery().minWidth.md.css`
      width: 100%;
      margin: 0;
    `}
  }
  date {
    font-size: .6em;
    width: 60%;
    margin-left: 4%;
    float: left;
    ${SuperQuery().minWidth.md.css`
      width: 100%;
      margin: 0;
    `}
  }
  p {
    font-size: .825em;
    width: 60%;
    float: left;
    margin-left: 4%;
    ${SuperQuery().minWidth.md.css`
      width: 100%;
      margin: 0;
    `}
  }
`
const Group = styled.div`
  padding: 10px;
`
const Col__Container = styled(Col)`
  flex: 1 1 100px;
  align-items: stretch;
  line-height: 1.25;
  padding: 1em 1em 1em 0;
`
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 33%;
  height: 6em;
  margin: 0;

  ${SuperQuery().minWidth.md.css`
    width: 100%;
    height: 160px;
    margin: 0 0 1em 0;
  `}
`