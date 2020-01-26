import React, { useState } from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import SuperQuery from '@themgoncalves/super-query'

const Element = ({ title, date, imageURL, description, url, dimensions }) => {
  return (
    <Article dimensions={dimensions}>
       
        <a href={url} target="_blank" rel="noreferrer">

          {imageURL === undefined || imageURL.length === 0 && 
            <Row className='articles__card--noimage'>
              <Col__Decorated xs={4} sm={6} md={4} lg={6}>
                <div className='articles__card--title'>
                  <h4>{title.substring(0, 80)}</h4>
                </div>
              </Col__Decorated>
              <Col__Decorated xs={8} sm={6} md={8} lg={6}>
              <div className='articles__card--noimage'>
                
                {date !== undefined && 
                  <p><strong>{date}</strong></p>
                }
                <p>{description.substring(0, 420)}</p>
              </div>
              </Col__Decorated>
            </Row>
          }

          {imageURL !== undefined && imageURL.length !== 0 &&

            <Row className='articles__card--image'>
              <Col__Decorated xs={4} sm={6} md={4} lg={6}>
                <LazyLoad offset={100}>
                  <Image backgroundURL={imageURL} className="lazyload__image--height" />
                </LazyLoad>
              </Col__Decorated>
              <Col__Decorated xs={8} sm={6} md={8} lg={6}>
                {date !== undefined && 
                  <p><strong>{date}</strong></p>
                }
                <h4>{title}</h4>
                <p>{description.substring(0, 400)}</p>
              </Col__Decorated>
            </Row>
            
          } 

        </a>



    </Article>
  )
}

export default Element

const Col__Decorated = styled(Col)`
  width: 100%;
  padding: 0 1rem 0 0; 
  margin: 0 0 0 0;
`

const Article = styled.div`
 .lazyload-placeholder,
  .lazyload__image--height {
    margin: 0 0 0.5rem 0;
    height: 35vw;
    ${SuperQuery().minWidth.md.css`
      height: ${props => props.dimensions.xl && '18rem'};
      height: ${props => props.dimensions.xl || '14rem'};
    `}
    ${SuperQuery().minWidth.lg.css`
      height: ${props => props.dimensions.xl && '20rem'};
      height: ${props => props.dimensions.xl || '17rem'};
    `}
  }
  .articles__card--noimage {
    margin: 1rem 0 0 0;
    width: 100%;
    padding: 0;
    .articles__card--title {
      background-color: ${({ theme }) => theme.colors.offbackground};
      margin: 0 0 0.5rem 0;
      display: flex;
      align-items: flex-end;
      height: 50vw;
      ${SuperQuery().minWidth.sm.css`
        height: 14rem;
      `}
      ${SuperQuery().minWidth.md.css`
        height: ${props => props.dimensions.xl && '18rem'};
        height: ${props => props.dimensions.xl || '14rem'};
      `}
      ${SuperQuery().minWidth.lg.css`
        height: ${props => props.dimensions.xl && '20rem'};
        height: ${props => props.dimensions.xl || '17rem'};
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
        font-size: 160%;
      `}
    }
  }

  .articles__card--image {
    margin: 1rem 0 0 0;
    width: 100%;
    padding: 0;
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
