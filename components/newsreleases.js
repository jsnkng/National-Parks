import React, { useState, useEffect } from 'react'
import useWindowDimensions from './useWindowDimensions'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ newsReleases }) => {
  const toDateFormat = (date) => {
    const d = date.split(' ')
    const d1 = Date.parse(d[0])
    const nd = new Date(d1)
    return nd.toLocaleDateString()
  }
  const [limit, setLimit] = useState(2)
  const [rows, setRows] = useState(1)
  
  const windowDimension = useWindowDimensions()
  const loadMore = () => {
    setRows(rows + 1)
  }
 
  useEffect(() => {
    const columnWidth = windowDimension.width > 990 ? { cols: 2, limit: 2 } : 
                        windowDimension.width > 767 ? { cols: 2, limit: 2 } : 
                        windowDimension.width > 575 ? { cols: 2, limit: 2 } : { cols: 1, limit: 2 } 
    let newLimit = columnWidth.limit * rows
    setLimit(newLimit)
  })

  return (
    <NewsReleases>
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>Park News</h2>
          </Col>
        </Row>
        <Row>
        { newsReleases.slice(0,limit).map((item) => {
          return (
          <Col xs={12} sm={6} key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
            {item.image.url === undefined || item.image.url.length === 0 && 
              <div className='articles__card--noimage'>
                <div className='articles__card--title'>
                  <h4>{item.title.substring(0, 80)}</h4>
                </div>
                <p><strong>{toDateFormat(item.releasedate)}</strong></p>
                <p>{item.abstract.substring(0, 420)}</p>
              </div>
            }
            {item.image.url !== undefined && item.image.url.length !== 0 &&
              <div className='articles__card--image'>
                <LazyLoad offset={100}>
                  <Image backgroundURL={item.image.url} className="lazyload__image--height" />
                </LazyLoad>
                <p><strong>{toDateFormat(item.releasedate)}</strong></p>
                <h4>{item.title}</h4>
                <p>{item.abstract.substring(0, 300)}</p>
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
            className={ limit >= newsReleases.length ? "hidden btn__load-more" : "btn__load-more" } 
            onClick={() => loadMore()}>
              Load More News
          </button>
        </Row>
      </Grid>
    </NewsReleases>
  )
}

export default Component

const NewsReleases = styled.div`
  .lazyload-placeholder,
  .lazyload__image--height {
    margin: 0 0 0.5rem 0;
    height: 85vw;
    ${SuperQuery().minWidth.sm.css`
      height: 14rem;
    `}
    ${SuperQuery().minWidth.md.css`
      height: 16rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      height: 18rem;
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
      ${SuperQuery().minWidth.md.css`
        height: 16rem;
      `}
      ${SuperQuery().minWidth.lg.css`
        height: 18rem;
      `}
    }
    h4 {
      line-height: 1;
      letter-spacing: -0.1rem;
      padding: 0.5rem;
      font-size: 240%;

      ${SuperQuery().maxWidth.of('325px').css`
        font-size: 180%;
      `}
      ${SuperQuery().minWidth.sm.css`
        font-size: 150%;
      `}
      ${SuperQuery().minWidth.md.css`
        font-size: 200%;
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
