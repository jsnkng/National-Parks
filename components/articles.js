import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

const Articles = props => {
  const [articles, setArticles] = useState(props.articles)
  const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return Intl.DateTimeFormat('en-US').format(nd)
  }
  console.log(articles)
  return (
    <Grid__Container>
      <Row>
        { articles.slice(0,8).map((item) => {
            return(
              <Col xs={12} sm={4} md={4} key={item.id}>
                <Image backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "/US-National-Parks-logo-sml-bw.png" : item.listingimage.url  } alt={item.listingimage.altText} />
                <h4><a href={item.url} target="_blank">{item.title}</a></h4>
                <p>{item.listingdescription} <a href={item.url} target="_blank">Read more...</a></p>
                
              </Col>
            )
          })
          }
      </Row>
    </Grid__Container>
  )
}
  
  
export default Articles


const Grid__Container = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  padding: 1em 1em 0 1em;
  h3 {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  h4 {
    font-size: 1em;
    float: left;
    width: 60%;
    margin: 0 0 1em 1em;
    ${SuperQuery().minWidth.lg.css`
      width: 100%;
      margin: 0 0 .5em 0;
    `}
  }
  span {
    font-size: .675em;
    float: right;
  }
  p {
      font-size: 1em;
      clear: both;
      width: 100%;
      margin: 0 0 1em 0;
    ${SuperQuery().minWidth.lg.css`
      font-size: .825em;
    `}
  }
`
const Col__Container = styled(Col)`
  flex: 1 1 100px;
  align-items: stretch;
  line-height: 1.25;
  margin-bottom: .5em;
`
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 33%;
  height: 6em;
  margin: 0 0 .625em 0;

  ${SuperQuery().minWidth.md.css`
    width: 100%;
    height: 160px;
    margin: 0 0 1em 0;
  `}
`
