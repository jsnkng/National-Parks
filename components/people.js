import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const People = props => {
  const [people, setPeople] = useState(props.people)
  const [limit, setLimit] = useState(3)
  const readMore = () => setLimit(limit +3 )

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2>Related People</h2>
        </Col>
      </Row>
      <Row>
      { people.slice(0,limit).map((item) => {
          return(
          <LazyLoad height={560} offset={600} key={item.id} once>
            <Col xs={12} sm={12} md={4} lg={4} className="content">
              {item.listingimage.url !== "" && item.listingimage.url !== 0 &&
                <a href={item.url} target="_blank"><Image backgroundURL={item.listingimage.url === undefined || item.listingimage.url.length == 0 ? "" : item.listingimage.url  }  className={item.listingimage.url === undefined || item.listingimage.url.length === 0 ? "hidden" : "" }/></a>
              }
              {item.listingimage.url === "" || item.listingimage.url.length === 0 
              ?  <><h4 style={{fontSize: '1.9em',lineHeight:'.9'}}><a href={item.url} target="_blank">{item.title}</a></h4><p style={{fontSize: '1em'}}>{item.listingdescription}</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
              :  <><h4><a href={item.url} target="_blank">{item.title}</a></h4><p>{item.listingdescription.substring(0, 190)}...</p><a href={item.url} className="btn__read-more" target="_blank">Read More</a></>
              }
            </Col>
          </LazyLoad>
          )
        })
      }
      </Row>
      <Row>
        <button className={limit >= people.length ? "hidden btn__load-more" : "btn__load-more" } onClick={readMore}>Load More People</button>
      </Row>
    </Grid>
  )
}
  
export default People

const Image = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 20em;
  margin: 1em 0 0 0;
  ${SuperQuery().minWidth.md.css`
    height: 9em;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 12.5em;
  `}
  &.hidden {
    display: none;
  }
`
