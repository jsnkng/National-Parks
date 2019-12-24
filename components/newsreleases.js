import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
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
  
  const [limit, setLimit] = useState(3)
  const readMore = () => setLimit(limit + 3)

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h3>Park News</h3>
        </Col>
      </Row>
      <Row>
      { newsReleases.slice(0,limit).map((item) => {
        return (
          <LazyLoad height={560} offset={600} key={item.id} once>
            <Col xs={12} sm={12} md={4} lg={4} className="content">
            <a href={item.url} target="_blank"><Image backgroundURL={item.image.url === undefined || item.image.url.length === 0 ? "https://fakeimg.pl/600x300/1e1d1e/?text=%20" : item.image.url } className={item.image.url === undefined || item.image.url.length === 0 ? "hidden" : "" }/></a>
              <span className="articles__date">{toDateFormat(item.releasedate)}</span>
              { item.image.url === undefined || item.image.url.length === 0 
                ?  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.abstract.substring(0, 450)}</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
                :  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.abstract.substring(0, 300)}...</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
              }
            </Col>
          </LazyLoad>
        )
        })
      }
      </Row>
      <Row>
        <button className={limit >= newsReleases.length ? "hidden btn__load-more" : "btn__load-more" } onClick={readMore}>Load More News</button>
      </Row>
    </Grid>
  )
}

export default NewsReleases

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
