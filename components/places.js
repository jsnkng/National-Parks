import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Places = props => {
  const [places, setPlaces] = useState(props.places)
  return (
    <Grid__Container>
      <Row__Container>
        <Col__Container xs={12}>
          <h3>Places of Interest</h3>
        </Col__Container>
      </Row__Container>
      <Row__Container>
        { places.slice(0).map((item) => {
          return(
            <LazyLoad height={200} offset={100} key={item.id}>
            <Col__Container xs={12} sm={12} md={6} lg={4}>
              {item.listingimage.url !== undefined && item.listingimage.url != 0 &&
                <Image backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  } alt={item.listingimage.altText} />
              }
              <h4>{item.title}</h4>
              <p>{item.listingdescription}</p>
              <a href={item.url} target="_blank">Read more...</a>
            </Col__Container>
            </LazyLoad>
          )
        })
      }
    </Row__Container>
  </Grid__Container>
  )
}
  
export default Places


const Grid__Container = styled(Grid)`
  padding: 1em .5em 0 1em;
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
  margin: 0;
  &:first-child {
    padding: .125em;
    border-bottom: 2px solid;
  }
  &:last-child {
    border: none;
  }
`
const Col__Container = styled(Col)`
  border-bottom: 2px solid #3c3a3c;
  padding: 1.5em 0 .5em 0;
  
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
  height: 20em;
  margin: 0 0 1em 0;
  &.hidden {
    display: none;
    ${SuperQuery().minWidth.md.css`
      display: block;
    `}
  }
  ${SuperQuery().minWidth.md.css`
    height: 12em;
  `}
`