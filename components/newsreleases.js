import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

const NewsReleases = props => {
  const [newsReleases, setNewsReleases] = useState(props.newsReleases)
  return (
    <NewsReleasesWrapper>
      <NewsReleasesGrid>
        <NewsReleasesRow>
          <NewsReleasesCol>
          { newsReleases !== undefined && newsReleases.length != 0 &&
            <h3>News Releases</h3>
          }
          </NewsReleasesCol>
        </NewsReleasesRow>
        <NewsReleasesRow>
          { newsReleases.slice(0,4).map((item) => {
            return(
              <NewsReleasesCol xs={12} sm={6} md={3} key={item.id}>
                {item.image.url !== undefined && item.image.url != 0 &&
                  <ResponsiveImage backgroundURL={item.image.url === undefined || item.image.url.length == 0 ? "" : item.image.url  }>

                  </ResponsiveImage>
                }
                <h4 style={{fontSize:'.9em',margin:'2px 0 8px 0'}}>{item.title}</h4>
                <div style={{fontSize:'9px'}}>{item.releasedate}</div>
                <p>{item.abstract.substring(0, 200)}</p>
                <a href={item.url} target="_blank">Read more...</a>
              </NewsReleasesCol>
            )
          })
          }
        </NewsReleasesRow>
      </NewsReleasesGrid> 
    </NewsReleasesWrapper>
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

const NewsReleasesWrapper = styled.div`
  font-family: Helvetica;
  padding: 1em 0;

  h3 {
    background-color: #333333;
    color: #ffffff;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
  h4 {
  }
  p {
   font-size: .9em;
  }
`
const NewsReleasesGrid = styled(Grid)`
  
`
const NewsReleasesRow = styled(Row)`
`

const NewsReleasesCol = styled(Col)`
flex: 1 1 300px;
align-items: stretch;
padding: 10px;
`
