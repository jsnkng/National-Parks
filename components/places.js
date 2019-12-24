import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Places = props => {
  const [places, setPlaces] = useState(props.places)
  const [limit, setLimit] = useState(3)
  const readMore = () => setLimit(limit + 3)

  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container xs={12}>
          <h3>Places of Interest</h3>
        </Col__Container>
      </Row__Container>
      <Row__Container>
     { places.slice(0,limit).map((item) => {
        return(
        <LazyLoad height={560} offset={600} key={item.id} once>
          <Col__Container xs={12} sm={12} md={4} lg={4} className="content">
            
            {item.listingimage.url !== "" && item.listingimage.url !== 0 &&
              <a href={item.url} target="_blank"><Image backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  }  className={item.listingimage.url === undefined || item.listingimage.url.length === 0 ? "hidden" : "" }/></a>
            }
            {item.listingimage.url === "" || item.listingimage.url.length === 0 
            ?  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.listingdescription}</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
            :  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.listingdescription.substring(0, 300)}...</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
            }
          </Col__Container>
        </LazyLoad>
        )
      })
      }
      </Row__Container>
      <Row__Container>
        <button 
          className={limit >= places.length ? "hidden btn__load-more" : "btn__load-more" } 
          onClick={readMore}>Load More Places</button>
      </Row__Container>
      <Row__Container>
    </Row__Container>
  </Grid__Container>
  )
}
  
export default Places

const Grid__Container = styled(Grid)`
padding: 0 .5em;
  
  h3 {
    overflow-wrap: break-word;
    font-size: 2em;
    line-height: 1;
    margin: .05em;
    padding: .425em .575em .425em .25em;
    border: 0;
    border-bottom: 2px solid #ffffff;
    ${SuperQuery().minWidth.md.css`
      border-bottom: 4px solid #ffffff;
      padding: .425em .25em .425em 0;
    `}
  }
  h4 {
    font-size: 1.75em;
    line-height: 1;
    padding: 0 .75em 0 .375em;
    margin: 0;
    ${SuperQuery().minWidth.md.css`
      padding: .5em 0 0 0;
      font-size: 1.5em;
    `}
  }
  span {
    display: block;
    font-size: 1em;
    padding: .5em 1.25em 0em .75em;
    margin: 0;
    ${SuperQuery().minWidth.md.css`
      font-size: .825em;
      padding: 1em 0 0 0;
    `}
  }
  p {
    font-size: 1em;
    padding: 0 .75em;
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
      border: none;
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
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 15em;
  margin: .75em;
  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
`