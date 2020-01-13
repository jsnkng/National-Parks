import React, { useState } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = ({ articles }) => {
  const [limit, setLimit] = useState(3)

  return (
    <Articles>
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>Learn More</h2>
          </Col>
        </Row>
        { articles.slice(0,limit).map((item) => {
          return (
          <Row key={item.id}>
            <a href={item.url} target="_blank">
            <Col xs={12}>
              <Row className={item.listingimage.url === '' ? 'reverseReverse' : 'reverse' }>
                <Col xs={12} md={4}>
                  { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
                    <LazyLoad offset={100}>
                      <Image backgroundURL={item.listingimage.url}  className="lazyload__image--height" />
                    </LazyLoad>
                  }
                  { item.listingimage.url === undefined || item.listingimage.url.length === 0 &&
                    <p className='articles__abstract--only'>{item.listingdescription.substring(0, 250)}</p>
                  }
                </Col>
                <Col xs={12} md={8}>
                  { item.listingimage.url !== undefined && item.listingimage.url.length !== 0 &&
                    <>
                    <h4>{item.title}</h4>
                    <p>{item.listingdescription}</p>
                    </>
                  }
                  
                  { item.listingimage.url === undefined || item.listingimage.url.length === 0 &&
                    <h4 className='large'>{item.title}</h4>
                  }
                  
                    
                    <span className="btn__read-more" target="_blank">Read More</span>
                </Col>
              </Row>
            </Col>
            </a>
          </Row>
          )
          })
        }
        <Row>
          <button className={limit >= articles.length ? "hidden btn__load-more" : "btn__load-more" } onClick={() => setLimit(limit + 3)}>Load More Articles</button>
        </Row>
      </Grid>
    </Articles>
  )
}
  
export default Component

const Articles = styled.div`
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
  h4 {
    margin: .5rem 0 0 0;
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

