import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import Spinner from './spinner'
import SuperQuery from '@themgoncalves/super-query'

const Element = ({ backgroundURL, title, subtitle, headline, dimensions, manageFuture, link }) => {

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
  const handleClick = () => {
    setIsSpinnerVisible(true)
    manageFuture( link.href, link.as, link.title )
  }
  return (
    <Banner dimensions={dimensions}
      onClick={handleClick}
      onKeyPress={(event) => { 
        if (event.which == 13 || event.keyCode == 13) {
          handleClick()
          return false;
        } else {
          return true;
        }
      }} >
      <Spinner isSpinnerVisible={isSpinnerVisible} />
      <div className='header' tabIndex={1}>
        {headline !==undefined && 
          <h1>{headline}</h1>
        }
        <h2 dangerouslySetInnerHTML={{__html: title }}></h2>
        <h3>{subtitle}</h3>
      </div>
      <LazyLoad height={'100%'} offset={600}>
        <ResponsiveImage backgroundURL={backgroundURL} />
      </LazyLoad>
    </Banner>
  )
}

export default Element

const ResponsiveImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 10;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`

const Banner = styled.section`
  cursor: pointer;
  position: relative;
  width: ${props => props.dimensions.width};
  height: ${props => props.dimensions.height};
  min-width: ${props => props.dimensions.minWidth};
  min-height: ${props => props.dimensions.minHeight};
  
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.image_overlay_gradient};
    background: rgba(0,0,0,0.2);
    color: ${({ theme }) => theme.colors.home_text};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};

    -webkit-transition: background 0.5s ease;
    -moz-transition: background 0.5s ease;
    -o-transition: background 0.5s ease;
    -ms-transition: background 0.5s ease;
    transition: background 0.5s ease;

    z-index: 20; 
    
    height: 100%;
    width: 100%;

    &:hover,
    &:focus,
    &:active,
    &:focus-within {
      outline: none;
      background: ${({ theme }) => theme.colors.image_overlay_darkgradient};
      background: rgba(0,0,0,0.5);

    }
  }

  h1 {
    width: 90%;
    max-width: 70vw;
    font-size: 3rem;
    line-height: 0.875;
    letter-spacing: -0.1rem;
    margin: 5vh 0 10vh 4%;
    text-shadow: 2px 2px 6px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.sm.css`
      font-size: 7.5vw;
    `}
  }
  h2 {
    width: 90%;
    max-width: 70vw;
    font-size: ${props => props.dimensions.xl 
      ? '2.25rem'
      : '1.5rem'
    };
    line-height: .925;
    letter-spacing: -0.1rem;
    margin: 1rem 0 0 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    border: none;
    ${SuperQuery().minWidth.sm.css`
      font-size: ${props => props.dimensions.xl 
        ? '6vw'
        : '1.75rem'
      };
    `}
  }
  h3 {
    width: 90%;
    max-width: 70vw;
    font-size: ${props => props.dimensions.xl 
      ? '1.5rem'
      : '1.125rem'
    };
    font-weight: 200;
    line-height: 0.875;
    margin: 0 0 0 4%;
    text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.sm.css`
      font-size: ${props => props.dimensions.xl 
        ? '3.5vw'
        : '1.375rem'
      };
    `}
  }
  span {
    position: absolute;
    top: .875rem;
    right: 0.5rem;
    text-align: right;
    margin: 0;
    padding: 0;
    width: 50%;
  }

`