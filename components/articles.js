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
            {item.listingimage.url === undefined || item.listingimage.url.length === 0 && 
              <div className='articles__card--noimage'>
                <div className='articles__card--title'>
                  <h4>{item.title.substring(0, 80)}</h4>
                </div>
                <p>{item.listingdescription.substring(0, 420)}</p>
              </div>
            }
            {item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
              <div className='articles__card--image'>
                <LazyLoad offset={100}>
                  <Image backgroundURL={item.listingimage.url} className="lazyload__image--height" />
                </LazyLoad>
                <h4>{item.title}</h4>
                <p>{item.listingdescription.substring(0, 300)}</p>
              </div>
            } 
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
    margin: 0 0 0.5rem 0;
    height: 85vw;
    ${SuperQuery().minWidth.sm.css`
      height: 14rem;
    `}
  }

  .articles__card--noimage {
    margin: 1rem 0 0 0;
    .articles__card--title {
      background-color: ${({ theme }) => theme.colors.offbackground};
      margin: 0 0 0.5rem 0;
      display: flex;
      align-items: flex-end;
      height: 85vw;
      ${SuperQuery().minWidth.sm.css`
        height: 14rem;
      `}
    }
    h4 {
      line-height: 1;
      letter-spacing: -0.1rem;
      padding: 0.5rem;
      font-size: 240%;

      ${SuperQuery().maxWidth.of('325px').css`
        font-size: 160%;
      `}
      ${SuperQuery().minWidth.sm.css`
        font-size: 160%;
      `}
    }
  }

  .articles__card--image {
    margin: 1rem 0 0 0;
    h4 {
      line-height: 1;
      letter-spacing: -0.1rem;
      margin: 0 0 0.5rem 0;
      font-size: 150%;
      ${SuperQuery().minWidth.sm.css`
        font-size: 125%;
      `}
    }
  }
 
`
const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`
