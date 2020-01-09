import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = ({ places }) => {
  const [limit, setLimit] = useState(3)

  return (
    <Places>
      <Row__Decorated>
        <Col xs={12}>
          <h2>Places of Interest</h2>
        </Col>
      </Row__Decorated>
     { places.slice(0,limit).map((item) => {
      return ( 
        <Row__Decorated key={item.id}>
          <a href={item.url} target="_blank">
          <Col xs={12}>
              <Row__Decorated>
                <Col xs={12} md={6}>
                { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
                  <LazyLoad offset={100}>
                    
                      <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
                  </LazyLoad>
                }
                </Col>
                <Col xs={12} md={6}>
                <h4>{item.title}</h4>
                  { item.listingimage.url !== undefined && item.listingimage.length !== 0 &&
                    <p>{item.listingdescription}</p>
                  }
                  Plan Your Visit
                </Col>
              </Row__Decorated>
            </Col>
          </a>
        </Row__Decorated>
        )
      })
      }
      <Row__Decorated>
        <button 
          className={limit >= places.length ? "hidden btn__load-more" : "btn__load-more" } 
          onClick={() => setLimit(limit + 3)}>Load More Places</button>
      </Row__Decorated>
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
    min-width: 15em;
    ${SuperQuery().minWidth.md.css`
      height: 14em;
      min-width: 15em;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 16em;
      min-width: 15em;
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
