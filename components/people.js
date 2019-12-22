import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const People = props => {
  const [people, setPeople] = useState(props.people)
  const [limit, setLimit] = useState(3)
  useEffect(() => {
   
  }, [limit])
  
  let DisplayRows = () => people.slice(0,limit).map((item) => {
    return(
      <LazyLoad height={560} offset={600} key={item.id} once>
      <Col__Container xs={12} sm={6} md={6} lg={4}>
        {item.listingimage.url !== "" && item.listingimage.url !== 0 &&
          <a href={item.url} target="_blank"><Image backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  }  className={item.listingimage.url === undefined || item.listingimage.url.length === 0 ? "hidden" : "" }/></a>
        }
        {item.listingimage.url === "" || item.listingimage.url.length === 0 
        ?  <><h4 style={{fontSize: '1.9em',lineHeight:'.9'}}><a href={item.url} target="_blank">{item.title}</a></h4><p style={{fontSize: '1em'}}>{item.listingdescription}</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
        :  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.listingdescription.substring(0, 190)}...</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
        }
      </Col__Container>
      </LazyLoad>
    )
  })
  const readMore = () => {
    setLimit(limit+3)
  }


  return (
    <Grid__Container>
      <Row__Container>
          <h3>Related People</h3>
      </Row__Container>
      <Row__Container>
        <DisplayRows />
      </Row__Container>

      <Row__Container>
        <button className={limit >= people.length ? "hidden btn__load-more" : "btn__load-more" } onClick={readMore}>Load More</button>
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
    font-size: 1.5em;
    line-height: 1.25;
    float: left;
    margin: 0 0 .625em 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.125em;
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
    border-bottom: 1px solid #767276;
  }
  &:last-child {
    border: none;
  }
  &.center {
    border-bottom: 2px solid #767276;
  }
`

const Col__Container = styled(Col)`
padding: .5em 0 1.25em 0;
  
  ${SuperQuery().minWidth.md.css`
      margin: 0;
      border: 0px solid;
      padding: .5em 0 0 .5em;
    &:nth-child(2n+1) {
      padding: .5em .5em 0 0em;
    }
  `}
  
  ${SuperQuery().minWidth.lg.css`
      margin: 0;
      border: 0px solid;
      padding: .5em 0 0 .5em;
    
      &:nth-child(3n+1) {
        padding: .75em .5em .5em 0;
      } 
      &:nth-child(3n+2) {
        padding: .75em .5em 0 .5em;
      } 
      &:nth-child(3n+3) {
        padding: .75em 0 .5em .5em;
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