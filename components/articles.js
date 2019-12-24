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
    <Grid>
      <Row>
        <Col xs={12}>
          <h3>Learn More</h3>
        </Col>
      </Row>
      <Row>
      { articles.slice(0,limit).map((item) => {
        return(
        <LazyLoad height={560} offset={100} key={item.id} once>
          <Col xs={12} sm={12} md={4} lg={4}>
            <a href={item.url} target="_blank">
              <Image 
                backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url} 
                className={item.listingimage.url === undefined || item.listingimage.url.length === 0 ? "hidden" : "" } />
            </a>
            {item.listingimage.url === undefined || item.listingimage.url.length === 0 
            ?  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.listingdescription.substring(0, 400)}</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
            :  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.listingdescription.substring(0, 190)}...</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
            }
          </Col>
        </LazyLoad>
        )
        })
      }
      </Row>
      <Row>
        <button className={limit >= articles.length ? "hidden btn__load-more" : "btn__load-more" } onClick={readMore}>Load More Articles</button>
      </Row>
    </Grid>
  )
}
  
export default Articles

const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 12.5em;
  margin: .125em;
  &.hidden {
    display: none;
  }
`