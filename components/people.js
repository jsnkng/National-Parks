import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = ({ people }) => {
  const [limit, setLimit] = useState(3)
  return (
    <People>
      <Row>
        <Col xs={12}>
          <h2>Related People</h2>
        </Col>
      </Row>
      { people.slice(0,limit).map((item) => {
        return( 
        <Row key={item.id}>
          <Col xs={12} lg={4}>
          { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
            <LazyLoad offset={100}>
              <a href={item.url} target="_blank">
                <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
              </a>
            </LazyLoad>
          }
          </Col>
          <Col xs={12} lg={6}>
            <h4><a href={item.url} target="_blank">{item.title}</a></h4>
            { item.listingimage.url !== undefined && item.listingimage.length !== 0 &&
              <p>{item.listingdescription}</p>
            }
            { item.listingimage.url === undefined && item.listingimage.url.length === 0 &&
              <p>{item.listingdescription.substring(0, 200)}...</p>
            }
            <a href={item.url} className="btn__read-more" target="_blank">Read More</a>
          </Col>
        </Row>
          )
        })
      }
      <Row>
        <button className={limit >= people.length ? "hidden btn__load-more" : "btn__load-more" } onClick={() => setLimit(limit +3 )}>Load More People</button>
      </Row>
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
