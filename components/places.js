import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = ({ places }) => {
  const [limit, setLimit] = useState(3)

  return (
    <Places>
      <Row>
        <Col xs={12}>
          <h2>Places of Interest</h2>
        </Col>
      </Row>
      <Row>
     { places.slice(0,limit).map((item) => {
      return ( 
        <Col xs={12}  lg={4} key={item.id}>
        { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
          <LazyLoad offset={100}>
            <a href={item.url} target="_blank">
              <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
            </a>
          </LazyLoad>
        }
          <h4><a href={item.url} target="_blank">{item.title}</a></h4>
          { item.listingimage.url !== undefined && item.listingimage.length !== 0 &&
            <p>{item.listingdescription}</p>
          }
          { item.listingimage.url === undefined && item.listingimage.url.length === 0 &&
            <p>{item.listingdescription.substring(0, 300)}...</p>
          }
          <a href={item.url} className="btn__read-more" target="_blank">Read More</a>
        </Col>
        )
      })
      }
      </Row>
      <Row>
        <button 
          className={limit >= places.length ? "hidden btn__load-more" : "btn__load-more" } 
          onClick={() => setLimit(limit + 3)}>Load More Places</button>
      </Row>
      <Row>
    </Row>
  </Places>
  )
}
  
export default Component

const Places = styled(Grid)`
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