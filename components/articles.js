import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ articles, windowDimension }) => {
  const [limit, setLimit] = useState(2)
  const [rows, setRows] = useState(1)
  
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
    <Articles>
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>Learn More</h2>
          </Col>
        </Row>
        <Row>
        { articles.slice(0,limit).map((item) => {
          return (
          <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
            <a href={item.url} target="_blank">
              <Row className={item.listingimage.url === '' ? 'reverse' : 'reverseReverse' }>
                <Col xs={12}>
                  { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
                    <LazyLoad offset={100}>
                      <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
                    </LazyLoad>
                  }
                  { item.listingimage.url === undefined || item.listingimage.url.length === 0 &&
                    <p className='articles__abstract--only'>{item.listingdescription.substring(0, 250)}</p>
                  }
                </Col>
                <Col xs={12}>
                  { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
                    <>
                    <h4>{item.title}</h4>
                    <p>{item.listingdescription}</p>
                    </>
                  }
                  
                  { item.listingimage.url === undefined || item.listingimage.url.length === 0 &&
                    <h4 className='large'>{item.title}</h4>
                  }
                  
                    {/* <Arrow className='arrow__read-more' /> */}
                </Col>
              </Row>
            </a>
          </Col>
          )
          })
        }


        </Row>


        
        <Row>
          <button 
            className={ limit >= articles.length ? "hidden btn__load-more" : "btn__load-more" } 
            onClick={() => loadMore()}>
              Load More Articles
          </button>
        </Row>
      </Grid>
    </Articles>
  )
}
  
export default Component

const Articles = styled.div`
  .lazyload-placeholder,
  .lazyload__image--height {
    height: 16rem;
    min-width: 16rem;
    ${SuperQuery().minWidth.md.css`
      height: 14rem;
      min-width: 14rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 14rem;
      min-width: 14rem;
    `}
  }
  h4 {
    margin: .5rem 0 0 0;
  }
  h4.large {
    padding: 0.5rem;
    margin: 1rem 0 0 0;
    background-color: ${({ theme }) => theme.colors.offbackground};
    height: 15.25rem;
    min-width: 16rem;
    ${SuperQuery().minWidth.md.css`
      height: 14rem;
      min-width: 14rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 14rem;
      min-width: 14rem;
    `}
  }
  .reverse {
    flex-direction: column-reverse;
  }
  .reverseReverse {
    flex-direction: column;
    ${SuperQuery().minWidth.md.css`
    flex-direction: row;
    `}
  }

  .articles__abstract--only {
    margin: 1.3rem 0 1.3rem 0;
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

