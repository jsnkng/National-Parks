import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = ({ people }) => {
  const [limit, setLimit] = useState(3)
  return (
    <People>
      <Row__Decorated>
        <Col xs={12}>
          <h2>Related People</h2>
        </Col>
      </Row__Decorated>
      <Row__Decorated>
      { people.slice(0,limit).map((item) => {
        return( 
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
        <button className={limit >= people.length ? "hidden btn__load-more" : "btn__load-more" } onClick={() => setLimit(limit +3 )}>Load More People</button>
      </Row__Decorated>
    </People>
  )
}
  
export default Component

const People = styled(Grid)`
  padding: 1rem .25rem;
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 20rem;
    min-width: 15rem;
    ${SuperQuery().minWidth.md.css`
      height: 11rem;
      min-width: 14rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 24rem;
      min-width: 15rem;
    `}
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

const Col__Decorated = styled(Col)`
  padding: 0;
  margin:0;
`
