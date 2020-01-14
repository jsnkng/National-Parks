import React, { useState, useEffect } from 'react'
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
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 })
  const [lastWindowDimension, setLastWindowDimension] = useState(window.innerWidth)
  useEffect(() => {
    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])
  
  useEffect(() => {
    console.log(windowDimension)
    const columnWidth = windowDimension.width > 990 ? { cols: 4, limit: 4 } : 
                        windowDimension.width > 767 ? { cols: 3, limit: 3 } : 
                        windowDimension.width > 575 ? { cols: 2, limit: 2 } : { cols: 1, limit: 2 } 
    
    let newLimit = columnWidth.limit * rows
    
    setLimit(newLimit)
  })
  const updateWindowDimensions = () => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight })
  }
  const loadMore = () => {
    setRows(rows + 1)
  }
  return (
    <NewsReleases>
    <Grid>
      <Row>
        <Col xs={12}>
          <h2>Park News</h2>
        </Col>
      </Row>
      { newsReleases.slice(0,limit).map((item) => {
        return (
        <Row key={item.id}>
          <a href={item.url} target="_blank">
            <Col xs={12}>
              <Row className={item.image.url === '' ? 'reverseReverse' : 'reverse' }>
                <Col xs={12} md={8}>
                  <h4 className={item.image.url === '' ? 'large' : ''}>{item.title}</h4>
                  <span className="articles__date">{toDateFormat(item.releasedate)}</span>
                  { item.image.url !== undefined && item.image.url.length !== 0 &&
                    <p>{item.abstract.substring(0, 450)}</p>
                  }
                </Col>
                <Col xs={12} md={4}>
                  { item.image.url === undefined || item.image.url.length === 0 &&
                      <p className='articles__abstract--only'>{item.abstract.substring(0, 320)}</p>
                  }
                  { item.image.url !== undefined && item.image.url.length !== 0 &&
                    <LazyLoad offset={100}>
                      <Image backgroundURL={item.image.url}  className="lazyload__image--height" />
                    </LazyLoad>
                  }
                    <Arrow className='arrow__read-more' />
                </Col>
              </Row>
            </Col>
          </a>
        </Row>
        )
        })
      }
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
  .articles__date {
    display: block;
    padding: 0;
    margin: 0;
  }
  .articles__abstract--only {
    margin: 1.3rem 0 1.3rem 0;
  }
  .reverse {
    flex-direction: column-reverse;
    ${SuperQuery().minWidth.md.css`
    flex-direction: row;
    `}
  }
  .reverseReverse {
    flex-direction: column;
    ${SuperQuery().minWidth.md.css`
    flex-direction: row;
    `}
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
