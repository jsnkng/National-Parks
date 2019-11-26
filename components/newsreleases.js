import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const NewsReleases = props => {
  const [newsReleases, setNewsReleases] = useState(props.newsReleases)
  return (
      <Grid>
      <Row>
        <Col>
        { newsReleases !== undefined && newsReleases.length != 0 &&
          <h2>News Releases</h2>
        }
        </Col>
      </Row>
      <Row>
        { newsReleases.slice(0).map((item) => {
          return(
            <Col xs={12} sm={6} md={3} key={item.id}>
              {item.image.url !== undefined && item.image.url != 0 &&
                <ResponsiveImage backgroundURL={item.image.url === undefined || item.image.url.length == 0 ? "" : item.image.url  }>

                </ResponsiveImage>
              }
              <h4 style={{fontSize:'.9em',margin:'2px 0 8px 0'}}>{item.title}</h4>
              <div style={{fontSize:'9px'}}>{item.releasedate}</div>
              <p>{item.abstract.substring(0, 200)}</p>
              <a href={item.url} target="_blank">Read more...</a>
            </Col>
          )
        })
        }
      </Row>
    </Grid> 
    // <>
    // <Row>
    //     { newsReleases !== undefined && newsReleases.length != 0 &&
    //       <h3>News Releases</h3> 
    //     }
    //     </Row>
    //     <Row>
    //     { newsReleases.slice(0,3).map((item) => {
    //       return(
    //         <Col xs={12} sm={4} md={4} key={item.id}>
    //           <div style={{fontSize:'9px'}}>{item.releasedate}</div>
    //           <h4 style={{fontSize:'.75em',margin:'2px 0 8px 0'}}>{item.title}</h4>
    //           {/* <p>{item.abstract}</p> */}
    //           {/* <h5 style={{fontSize:'9px';}}>{item.category}</h5> */}
    //           {/* <p>{item.description}</p> */}
    //         </Col>
    //       )
    //     })
    //     }
    //   </Row>
    // </>
   
  )
}
  
export default NewsReleases

const ResponsiveImage = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 16vw;
  min-height: 300px;
  margin: 0;
`