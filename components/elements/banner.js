import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import territories from '../../config/states'
import Spinner from './spinner'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({ backgroundURL, title, subtitle, hero, states, manageFuture }) => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
 
  return (
    <Banner onClick={() => {
        setIsSpinnerVisible(true)
        manageFuture()
      }}>
      <Spinner isSpinnerVisible={isSpinnerVisible} />
      <div className={hero ? 'hero__header' : 'banner__header'}>
        <h2 dangerouslySetInnerHTML={{__html: title }}></h2>
        <h3>{states !== undefined ? states.split(',').map(state => territories[state.toLowerCase()][0]).join(' / '): subtitle}</h3>
      </div>
      <LazyLoad height={'100%'} offset={600}>
        <ResponsiveImage backgroundURL={backgroundURL} />
      </LazyLoad>
    </Banner>
  )
}
export default Component

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 22rem;
  min-width: 300px;
  margin: 0;
  padding: 0;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);
  background-color: ${({ theme }) => theme.colors.image_overlay_light};
  background-image: ${props => props.backgroundURL};
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  .hero__header,
  .banner__header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.image_overlay_light};
    color: ${({ theme }) => theme.colors.home_text};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
    height: 100%;
    width: 100%;
    z-index: 20;
    -webkit-transition: background 0.5s linear;
    -moz-transition: background 0.5s linear;
    -o-transition: background 0.5s linear;
    -ms-transition: background 0.5s linear;
    transition: background 0.5s linear;

    h2 {
      width: 94%;
      border: none;
      font-size: 1.5rem;
      line-height: 1.05;
      margin: 0 0 0 0.375rem;
      padding: 10rem 0 0 0; 
    }
    h3 {
      width: 94%;
      font-size: 1.25rem;
      font-weight: 400;
      margin: 0 0 0 0.375rem;
      padding: 0; 
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
  }

  .hero__header {
    h2 {
        font-size: 3rem;
      line-height: 0.875;
      letter-spacing: -0.1rem;
      margin: 0 0 0 1rem;
      padding: 50vh 0 0 0; 
      ${SuperQuery().minWidth.sm.css`
        font-size: 8vw;
      `}
    }
    h3 {
      margin: 0 0 0 1rem;
        font-size: 5vw;
      ${SuperQuery().minWidth.sm.css`
        font-size: 5vw;
      `}
    }
  }
`
const ResponsiveImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.image_overlay_light};
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
