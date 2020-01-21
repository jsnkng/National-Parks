import React, { useState, useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'
import ArticleVertical from './elements/articlevertical'

const Component = ({ places }) => {
  const [limit, setLimit] = useState(2)
  const [rows, setRows] = useState(1)
  const [cols, setCols] = useState({ xs: 12, sm: 6, md: 4, lg: 3 })
  const [dim, setDim] = useState({xl: false})
  const windowDimension = useWindowDimensions()
  
  const loadMore = () => {
    setRows(rows + 1)
  }
  
  useEffect(() => {
    places.length == 2 && setCols({ xs: 12, sm: 6, md: 6, lg: 6 }) && setDim({xl: true})
    places.length == 1 && setCols({ xs: 12, sm: 12, md: 12, lg: 12 }) && setDim({xl: true})
    
    
    const columnWidth = windowDimension.width > 990 ? { cols: 4, limit: 4 } : 
                        windowDimension.width > 767 ? { cols: 3, limit: 3 } : 
                        windowDimension.width > 575 ? { cols: 2, limit: 2 } : { cols: 1, limit: 2 } 
    let newLimit = columnWidth.limit * rows
    setLimit(newLimit)
  })

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2>Places of Interest</h2>
        </Col>
      </Row>
      <Row>
     { places.slice(0,limit).map((item) => {
      return ( 
        <Col xs={cols.xs} sm={cols.sm} md={cols.md} lg={cols.lg} key={item.id}>
          <ArticleVertical 
              title={item.title} 
              imageURL={item.listingimage.url} 
              description={item.listingdescription} 
              url={item.url} 
              dimensions={dim} />
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
  )
}
  
export default Component
