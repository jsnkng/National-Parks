import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import SuperQuery from '@themgoncalves/super-query'

const Element = ({ title, date, imageURL, description, url, dimensions }) => {
  return (
    <Article dimensions={dimensions}>

        <a href={url} target="_blank" rel="noreferrer">
                
        {imageURL === undefined || imageURL.length === 0 && 
          <div className='articles__card--noimage'>
            <div className='articles__card--title'>
              <h4>{title.substring(0, 120)}</h4>
            </div>
            {date !== undefined && 
              <p><strong>{date}</strong></p>
            }
            <p>{description.substring(0, 420)}</p>
          </div>
        }

        {imageURL !== undefined && imageURL.length !== 0 &&
          <div className='articles__card--image'>
            <LazyLoad offset={100}>
              <Image backgroundURL={imageURL} className="lazyload__image--height" />
            </LazyLoad>
            {date !== undefined && 
              <p><strong>{date}</strong></p>
            }
            <h4>{title}</h4>
            <p>{description.substring(0, 400)}</p>
          </div>
        } 

        </a>
    </Article>
  )
}

export default Element

const Article = styled.div`
 .lazyload-placeholder,
  .lazyload__image--height {
    margin: 0 0 0.5rem 0;
    height: 60vw;
    ${SuperQuery().minWidth.sm.css`
      height: 14rem;
    `}
    ${SuperQuery().minWidth.md.css`
      height: ${props => props.dimensions.xl && '18rem'};
    `}
    ${SuperQuery().minWidth.lg.css`
      height: ${props => props.dimensions.xl && '20rem'};
    `}
  }
  .articles__card--noimage {
    margin: 1rem 0 0 0;
    .articles__card--title {
      background-color: ${({ theme }) => theme.colors.offbackground};
      margin: 0 0 0.5rem 0;
      display: flex;
      align-items: flex-end;
      height: 60vw;
      ${SuperQuery().minWidth.sm.css`
        height: 14rem;
      `}
      ${SuperQuery().minWidth.md.css`
        height: ${props => props.dimensions.xl && '18rem'};
      `}
      ${SuperQuery().minWidth.lg.css`
        height: ${props => props.dimensions.xl && '20rem'};
      `}
    }
    h4 {
      line-height: 1;
      letter-spacing: -0.1rem;
      padding: 0.5rem;
      font-size: 165%;

      
      ${SuperQuery().maxWidth.of('325px').css`
        font-size: 165%;
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
