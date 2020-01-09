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
      <Row__Decorated>
        <Col xs={12}>
          <h2>Park News</h2>
        </Col>
      </Row__Decorated>
      { newsReleases.slice(0,limit).map((item) => {
        return (
        <Row__Decorated key={item.id}>
          <a href={item.url} target="_blank">
            <Col xs={12}>
              <Row__Decorated>
                <Col xs={12} md={7}>
                  <h4>{item.title}</h4>
                  <span className="articles__date">{toDateFormat(item.releasedate)}</span>
                  { item.image.url !== undefined && item.image.url.length !== 0 &&
                    <p>{item.abstract.substring(0, 450)}</p>
                  }
                </Col>
                <Col xs={12} md={5}>
                  { item.image.url === undefined || item.image.url.length === 0 &&
                    <p>{item.abstract.substring(0, 450)}</p>
                  }
                  { item.image.url !== undefined && item.image.url.length !== 0 &&
                    <LazyLoad offset={100}>
                      <Image backgroundURL={item.image.url}  className="lazyload__image--height" />
                    </LazyLoad>
                  }
                </Col>
              </Row__Decorated>
            </Col>
          </a>
        </Row__Decorated>
        )
        })
      }
      <Row__Decorated>
        <button className={limit >= newsReleases.length ? "hidden btn__load-more" : "btn__load-more" } onClick={() => setLimit(limit + 3)}>Load More News</button>
      </Row__Decorated>
    </NewsReleases>
  )
}

export default Component

const NewsReleases = styled(Grid)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 20rem;
    min-width: 15rem;
    ${SuperQuery().minWidth.md.css`
      height: 11rem;
      min-width: 14rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 16rem;
      min-width: 15rem;
    `}
  }
  .articles__date {
    display: block;
    font-size: 1rem;
    padding: 1rem 0 0 0;
    margin: 0;
    font-weight: 700;
  }
 
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 1rem 0 0 0;
  -webkit-animation: myfirst 1s; /* Chrome, Safari, Opera */
  animation: myfirst 1s;
`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
