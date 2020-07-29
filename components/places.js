import React, { useState, useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import ArticleHorizontal from './elements/articlehorizontal'

const Component = ({ places }) => {
  const [limit, setLimit] = useState(2)
  const [rows, setRows] = useState(1)
  const [cols, setCols] = useState({ xs: 12, sm: 12, md: 12, lg: 6 })
  const [dim, setDim] = useState({xl: false})
  const windowDimension = useWindowDimensions()
  
  const loadMore = () => {
    setRows(rows + 1)
  }
  
  useEffect(() => {
    places.length == 2 && setCols({ xs: 12, sm: 12, md: 12, lg: 6 })
    places.length == 1 && setCols({ xs: 12, sm: 12, md: 12, lg: 12 })
  }, [places])

  useEffect(() => {
    const columnWidth = windowDimension.width > 990 ? { cols: 2, limit: 2 } : 
                        windowDimension.width > 767 ? { cols: 2, limit: 2 } : 
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
       let imageUrl = item.images[0].url
      return ( 
        <Col xs={cols.xs} sm={cols.sm} md={cols.md} lg={cols.lg} key={item.id}>
            <ArticleHorizontal 
              title={item.title} 
              imageURL={imageUrl} 
              description={item.listingDescription} 
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
          onClick={loadMore}>
            Load More Places
        </button>
      </Row>
    </Grid>
  )
}
  
export default Component
