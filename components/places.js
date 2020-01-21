import React, { useState, useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ places }) => {
  const [limit, setLimit] = useState(2)
  const [rows, setRows] = useState(1)
  const windowDimension = useWindowDimensions()
  const loadMore = () => {
    setRows(rows + 1)
  }
 
  useEffect(() => {
    const columnWidth = windowDimension.width > 990 ? { cols: 4, limit: 4 } : 
                        windowDimension.width > 767 ? { cols: 3, limit: 3 } : 
                        windowDimension.width > 575 ? { cols: 2, limit: 2 } : { cols: 1, limit: 2 } 
    let newLimit = columnWidth.limit * rows
    setLimit(newLimit)
  })

  return (
    <Places>
    <Grid>
      <Row>
        <Col xs={12}>
          <h2>Places of Interest</h2>
        </Col>
      </Row>
      <Row>
     { places.slice(0,limit).map((item) => {
      return ( 
        <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
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
                    {/* <Arrow className='arrow__read-more' /> */}
            </a>
          </Col>
        )
      })
      }
      </Row>
      <Row>
        <button 
          className={limit >= places.length ? "hidden btn__load-more" : "btn__load-more" } 
          onClick={() => loadMore()}>
            Load More Places
        </button>
      </Row>
    </Grid>
    </Places>
  )
}
  
export default Component

const Places = styled.div`
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 20rem;
    ${SuperQuery().minWidth.md.css`
      height: 14rem;
      min-width: 14rem;
    `}
  }
  h4 {
    margin: .5rem 0 0 0;
  }
`
const Image = styled.div`
  opacity: ${({ theme }) => theme.colors.image_opacity};
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 1rem 0 0 0;
  -webkit-animation: myfirst 1s; 
  animation: myfirst 1s;
`
