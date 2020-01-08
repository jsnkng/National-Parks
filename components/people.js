import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
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
      { people.slice(0,limit).map((item) => {
        return( 
        <Row__Decorated key={item.id}>
          <a href={item.url} target="_blank">
            <Col xs={12} lg={4}>
            { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
              <LazyLoad offset={100}>
                <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
              </LazyLoad>
            }
            </Col>
            <Col xs={12} lg={6}>
              <h4>{item.title}</h4>
              { item.listingimage.url !== undefined && item.listingimage.length !== 0 &&
                <p>{item.listingdescription}</p>
              }
              { item.listingimage.url === undefined && item.listingimage.url.length === 0 &&
                <p>{item.listingdescription.substring(0, 200)}...</p>
              }
              <a href={item.url} className="btn__read-more" target="_blank">Read More</a>
            </Col>
          </a>
          </Row__Decorated>
          )
        })
      }
      <Row__Decorated>
        <button className={limit >= people.length ? "hidden btn__load-more" : "btn__load-more" } onClick={() => setLimit(limit +3 )}>Load More People</button>
      </Row__Decorated>
    </People>
  )
}
  
export default Component

const People = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 20em;
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
