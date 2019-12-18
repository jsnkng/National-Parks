import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

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
      <Row__Container>
        <h3>News from {props.park.name}</h3>
      </Row__Container>
      <Row__Container>
        { newsReleases.slice(0,3).map((item) => {
          return(
            <LazyLoad height={'100%'} offset={100} once={true} >
            <Col__Container xs={12} sm={12} md={6} lg={4} key={item.id}>
            <a href={item.url} target="_blank"><Image backgroundURL={item.image.url === undefined || item.image.url.length == 0 ? "https://fakeimg.pl/600x300/1e1d1e/?text=%20" : item.image.url } className={item.image.url === undefined || item.image.url.length == 0 ? "hidden" : "" }/></a>
              <span>{toDateFormat(item.releasedate)}</span>
              <h4><a href={item.url} target="_blank">{toTitleCase(item.title)}</a></h4>
              <p>{item.abstract.substring(0, 370)}</p>
            </Col__Container>
            </LazyLoad>
          )
        })}
      </Row__Container>
    </Grid__Container>
  )
}
  
export default NewsReleases

const Grid__Container = styled(Grid)`
  padding: 1em 1em 0 1em;
  h3 {
    font-size: 2em;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  h4 {
    font-size: 1.25em;
    line-height: 1.125;
    float: left;
    width: 80%;
    margin: 0 0 1em 0;
    ${SuperQuery().minWidth.md.css`
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
    ${SuperQuery().minWidth.md.css`
      font-size: .825em;
    `}
  }
`
const Row__Container = styled(Row)`
  padding: 1em 0;
  margin: 0;
  &:first-child {
    padding: 0;
    border-bottom: 1px solid;
  }
`
const Col__Container = styled(Col)`
  padding: 2.25em 0 1em 0;
  border-bottom: 1px solid #3c3a3c;
  &:first-child {
    padding: 1em 0 1em 0;
  }
  &:last-child {
    border: none;
  }
  ${SuperQuery().minWidth.md.css`
    margin: 0;
    border: 0px solid;
    &:nth-child(odd) {
      padding: .5em .75em .5em 0;
    }
    &:nth-child(even) {
      padding: .5em 0 .5em .75em;
    }
  `}
  ${SuperQuery().minWidth.lg.css`
    margin: 0;
    border: 0px solid;
    &:nth-child(1),
    &:nth-child(5) {
      padding: .25em .5em .5em 0;
    }
    &:nth-child(2),
    &:nth-child(6) {
      padding: .25em .5em .5em .5em;
    }
    &:nth-child(3),
    &:nth-child(7) {
      padding: .25em .5em .5em .5em;
    }
    &:nth-child(4),
    &:nth-child(8) {
      padding: .25em 0 .5em .5em;
    }
  `}
`
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 12em;
  margin: 0 0 1em 0;
  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
`