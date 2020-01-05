import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = ({ articles }) => {
  const [limit, setLimit] = useState(3)

  return (
    <Articles>
      <Row__Decorated>
        <Col xs={12}>
          <h2>Learn More</h2>
        </Col>
      </Row__Decorated>
      <Row__Decorated>
      { articles.slice(0,limit).map((item) => {
        return (
          <Col xs={12} key={item.id}>
              { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
              <Row__Decorated>
                <Col xs={12} md={5}>
                  <LazyLoad offset={100}>
                    <a href={item.url} target="_blank">
                      <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
                    </a>
                  </LazyLoad>
                </Col>
                <Col xs={12} md={7}>
                  <h4><a href={item.url} target="_blank">{item.title}</a></h4>
                  <p>{item.listingdescription.substring(0, 270)}...</p>
                  <a href={item.url} className="btn__read-more" target="_blank">Read More</a>
                
                </Col>
              </Row__Decorated>
              }
              { item.listingimage.url === undefined || item.listingimage.url.length === 0 &&
              <Row__Decorated>
                <Col xs={12} md={5}>
                  <h4><a href={item.url} target="_blank">{item.title}</a></h4>
                </Col>
                <Col xs={12} md={7}>
                  <p>{item.listingdescription.substring(0, 400)}</p>
                  <a href={item.url} className="btn__read-more" target="_blank">Read More</a>
                </Col>
              </Row__Decorated>
              }
              </Col>
          )
        })
      }
      </Row__Decorated>
      <Row__Decorated>
        <button className={limit >= articles.length ? "hidden btn__load-more" : "btn__load-more" } onClick={() => setLimit(limit + 3)}>Load More Articles</button>
      </Row__Decorated>
    </Articles>
  )
}
  
export default Component

const Articles = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;

  .lazyload-placeholder,
  .lazyload__image--height {
    height: 20em;
    ${SuperQuery().minWidth.md.css`
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
  -webkit-animation: myfirst 1s; /* Chrome, Safari, Opera */
  animation: myfirst 1s;
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
