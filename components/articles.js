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
      { articles.slice(0,limit).map((item) => {
        return (
        <Row__Decorated key={item.id}>
          <a href={item.url} target="_blank">
          <Col xs={12}>
              <Row__Decorated>
                <Col xs={12} md={5}>
                { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
                  <LazyLoad offset={100}>
                    <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
                  </LazyLoad>
                }
                { item.listingimage.url === undefined || item.listingimage.url.length === 0 &&
                  <h4>{item.title}</h4>
                }
                </Col>
                <Col xs={12} md={7}>
                { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
                  <h4>{item.title}</h4>
                }
                  <p>{item.listingdescription.substring(0, 270)}...</p>
                  <span className="btn__read-more" target="_blank">Read More</span>
                </Col>
              </Row__Decorated>
              </Col>
            </a>
          </Row__Decorated>
          )
        })
      }
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
    min-width: 19.5em;
    ${SuperQuery().minWidth.md.css`
      height: 12.5em;
      min-width: 19.5em;
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
