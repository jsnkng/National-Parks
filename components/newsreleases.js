import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = props => {
  const [newsReleases, setNewsReleases] = useState(props.newsReleases)
  const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return nd.toLocaleDateString()
  }
  
  const [limit, setLimit] = useState(3)
  const readMore = () => setLimit(limit + 3)

  return (
    <NewsReleases>
      <Row>
        <Col xs={12}>
          <h2>Park News</h2>
        </Col>
      </Row>
      <Row>
      { newsReleases.slice(0,limit).map((item) => {
        return (
          <Col xs={12} sm={12} md={4} lg={4} key={item.id}>
            { item.image.url !== undefined && item.image.url.length !== 0 &&
              <LazyLoad offset={100}>
                <a href={item.url} target="_blank">
                  <Image backgroundURL={item.image.url}  className="lazyload__image--height" />
                </a>
              </LazyLoad>
            }
            <h4><a href={item.url} target="_blank">{item.title}</a></h4>
            <span className="articles__date">{toDateFormat(item.releasedate)}</span>
            { item.image.url !== undefined && item.image.url.length !== 0 &&
              <p>{item.abstract.substring(0, 300)}</p>
            }
            { item.image.url === undefined && item.image.url.length === 0 &&
              <p>{item.abstract.substring(0, 450)}</p>
            }
            <a href={item.url} className="btn__read-more" target="_blank">Read More</a>
          </Col>
        )
        })
      }
      </Row>
      <Row>
        <button className={limit >= newsReleases.length ? "hidden btn__load-more" : "btn__load-more" } onClick={readMore}>Load More News</button>
      </Row>
    </NewsReleases>
  )
}

export default Component

const NewsReleases = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 20em;
    ${SuperQuery().minWidth.md.css`
      height: 9em;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 12.5em;
    `}
  }
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 1em 0 0 0;
`
