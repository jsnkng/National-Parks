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
      <Row__Decorated>
     { places.slice(0,limit).map((item) => {
      return ( 
        <Col xs={12} md={4} key={item.id}>
            <a href={item.url} target="_blank">
            { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
              <LazyLoad offset={100}>
                <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
              </LazyLoad>
            }
            { item.listingimage.url === undefined || item.listingimage.url.length === 0 &&
              <h4>{item.title}</h4>
            }
            { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
              <h4>{item.title}</h4>
            }
              <p>{item.listingdescription}</p>
              <span className="btn__read-more" target="_blank">Read More</span>
            </a>
          </Col>
        )
      })
      }
      </Row__Decorated>
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
 padding: 1rem;
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
  h4 {
    margin: .5rem 0 0 0;
  }
`

const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 1rem 0 0 0;
  -webkit-animation: myfirst 1s; 
  animation: myfirst 1s;
`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
