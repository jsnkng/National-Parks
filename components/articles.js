import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import LazyLoad from 'react-lazyload'



const Articles = props => {
  const [articles, setArticles] = useState(props.articles)
  const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return Intl.DateTimeFormat('en-US').format(nd)
  }
    
  const [limit, setLimit] = useState(3)
  const readMore = () =>  setLimit(limit + 3)

  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container xs={12}>
          <h3>Learn More</h3>
        </Col__Container>
      </Row__Container>
      <Row__Container>
      { articles.slice(0,limit).map((item) => {
        return(
          <LazyLoad height={560} offset={100} key={item.id} once>
            <Col__Container xs={12} sm={12} md={4} lg={4} className="content">
              <a href={item.url} target="_blank">
                <Image 
                  backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url} 
                  className={item.listingimage.url === undefined || item.listingimage.url.length === 0 ? "hidden" : "" } />
              </a>

              {item.listingimage.url === undefined || item.listingimage.url.length === 0 
              ?  <><h4 style={{fontSize: '1.9em',lineHeight:'.9'}}><a href={item.url} target="_blank">{item.title}</a></h4><p style={{fontSize: '1em'}}>{item.listingdescription.substring(0, 400)}</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
              :  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.listingdescription.substring(0, 190)}...</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
              }
            </Col__Container>
          </LazyLoad>
        )
        })
      }
      </Row__Container>
      <Row__Container>
        <button className={limit >= articles.length ? "hidden btn__load-more" : "btn__load-more" } onClick={readMore}>Load More Articles</button>
      </Row__Container>
    </Grid__Container>
  )
}
  
  
export default Articles


const Grid__Container = styled(Grid)`
  padding: 0;
  
  h3 {
    font-size: 2em;
    line-height: 1;
    margin: 0;
    padding: .425em .3em;
    border-bottom: 2px solid #ffffff;
    ${SuperQuery().minWidth.md.css`
    border-bottom: 4px solid #ffffff;
      padding: .425em .25em .425em 0;
    `}
  }
  h4 {
    font-size: 1.75em;
    line-height: 1;
    padding: 0 .75em 0 .75em;
    margin: 0;
    ${SuperQuery().minWidth.md.css`
      padding: .5em 0 0 0;
      font-size: 1.5em;
    `}
  }
  span {
    font-size: .75em;
    font-weight: 600;
    margin: 0 2em 0 0;
    float: right;
  }
  p {
    font-size: 1em;
    padding: 0 1.25em 0em 1.25em;
    ${SuperQuery().minWidth.md.css`
      font-size: .825em;
      padding: 0;
    `}
  }
`
const Row__Container = styled(Row)`
  margin: 0;
`
const Col__Container = styled(Col)`
  padding: 0;
  
  &.content {
    ${SuperQuery().minWidth.md.css`
      margin: 0;
      border: 0px solid;
      &:nth-child(3n+1) {
        padding: .5em .5em .5em ;
      } 
      &:nth-child(3n+2) {
        padding: .5em .25em 0 .25em;
      } 
      &:nth-child(3n+3) {
        padding: .5em .625em .5em .5em;
      } 
    `}
    ${SuperQuery().minWidth.lg.css`
      margin: 0;
      border: 0px solid;
      &:nth-child(3n+1) {
        padding: .5em .5em .5em 0;
      } 
      &:nth-child(3n+2) {
        padding: .5em .5em 0 .5em;
      } 
      &:nth-child(3n+3) {
        padding: .5em 0 .5em .5em;
      } 
    `}
  }
`
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 15em;
  margin: 0 0 2em 0;
  &.hidden {
    display: none;
  }
  ${SuperQuery().minWidth.md.css`
    height: 12em;
  `}
`