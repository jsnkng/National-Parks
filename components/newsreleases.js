import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = ({ newsReleases }) => {
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return nd.toLocaleDateString()
  }
  
  const [limit, setLimit] = useState(3)

  return (
    <NewsReleases>
      <Row>
        <Col xs={12}>
          <h2>Park News</h2>
        </Col>
      </Row>
      { newsReleases.slice(0,limit).map((item) => {
        return (
          <a href={item.url} target="_blank" key={item.id}>
        <Row>
          <Col xs={12} lg={7}>
            <h4>{item.title}</h4>
            <span className="articles__date">{toDateFormat(item.releasedate)}</span>
            { item.image.url !== undefined && item.image.url.length !== 0 &&
              <p>{item.abstract.substring(0, 450)}</p>
            }
          </Col>
          <Col xs={12} lg={5}>
            { item.image.url === undefined || item.image.url.length === 0 &&
              <p>{item.abstract.substring(0, 450)}</p>
            }
            { item.image.url !== undefined && item.image.url.length !== 0 &&
              <LazyLoad offset={100}>
                <Image backgroundURL={item.image.url}  className="lazyload__image--height" />
              </LazyLoad>
            }
          </Col>
        </Row>
        </a>
        )
        })
      }
      <Row>
        <button className={limit >= newsReleases.length ? "hidden btn__load-more" : "btn__load-more" } onClick={() => setLimit(limit + 3)}>Load More News</button>
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
    height: 15em;
  }
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 1em 0 0 0;
  -webkit-animation: myfirst 1s; /* Chrome, Safari, Opera */
  animation: myfirst 1s;
`
