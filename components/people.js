import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

const People = props => {
  const [people, setPeople] = useState(props.people)
  return (
    <Grid__Container>
      <Row__Container>
        { people.slice(0).map((item) => {
          return(
            <Col__Container xs={12} sm={6} md={4} key={item.id}>
              {item.listingimage.url !== undefined && item.listingimage.url != 0 &&
                <a href={item.url} target="_blank"><Image backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  } alt={item.listingimage.altText} /></a>
            }
              <h4>{item.title}</h4>
              <p>{item.listingdescription}<a href={item.url} target="_blank">Read more...</a></p>
            </Col__Container>
          )
        })
        }
      </Row__Container>
    </Grid__Container>
  )
}
  
export default People

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
    width: 100%;
    margin: 0 0 1em 0;
    ${SuperQuery().minWidth.md.css`
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
  &:last-child {
    border: none;
  }
`

const Col__Container = styled(Col)`
  padding: 2.25em 0 1em 0;
  border-bottom: 1px solid;
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
    &:nth-child(3n + 1) {
      padding: .25em 1em .5em 0;
    }
    &:nth-child(3n + 2) {
      padding: .25em .5em .5em .5em;
    }
    &:nth-child(3n + 3) {
      padding: .25em 0 .5em 1em;
    }
  `}
`
const Image = styled.div`
  float: left;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: top center;
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