import React, { useState, useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import ArticleVertical from './elements/articlevertical'

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

          <ArticleVertical 
            title={item.title} 
            date={toDateFormat(item.releasedate)} 
            imageURL={item.image.url} 
            description={item.abstract} 
            url={item.url} 
            dimensions={{xl: true}} />

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
  )
}

export default Component
