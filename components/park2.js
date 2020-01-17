import React, { useState } from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import territories from '../config/states'

const Component = ({ backgroundURL, title, subtitle, states }) => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }
  // const name = states.toLowerCase().split(',').map(item => territories[item][0]).join(', ')
  
  return (
    <Park onClick={handleBannerClick}>
      <Spinner className={isSpinnerVisible ? 'show' : 'hide'}>
        <div class='progress' aria-hidden='true'><div className='bar' role='bar'><div className='peg'></div></div><div className='spinner' role='spinner'><div className='spinner-icon'></div></div></div>
      </Spinner>
      <div className='banner__header'>
        <h2 dangerouslySetInnerHTML={{__html: title.replace(/&#333;/gi, 'ō')}}></h2>
        <h3>{states !== undefined ? states.split(',').map(state => territories[state.toLowerCase()][0]).join(' / '): subtitle}</h3>
      </div>
      <LazyLoad height={'100%'} offset={600}>
        <ResponsiveImage backgroundURL={backgroundURL} />
      </LazyLoad>
    </Park>
  )
}
export default Component

const Park = styled.div`
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
    padding: .125rem 0.5rem;
    z-index: 20;
    -webkit-transition: background 0.5s linear;
    -moz-transition: background 0.5s linear;
    -o-transition: background 0.5s linear;
    -ms-transition: background 0.5s linear;
    transition: background 0.5s linear;

    h2 {
      width: 100%;
      border: none;
      font-size: 1.5rem;
      line-height: 1.1;
      margin: 0 0 0 0.375rem;
      padding: 6rem 0 0 0; 
    }
    h3 {
      width: 100%;
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

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background-color: ${props => props.theme.colors.image_overlay_light};
  color: ${props => props.theme.colors.text};
  font-size: .7em;
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }

  .caretprogress .spinner {
    display: block;
    z-index: 12031;
  }
  .progress .spinner-icon {
    width: 3rem;
    height: 3rem;
    margin: 100px auto;
    box-sizing: border-box;
    border: solid 8px transparent;
    border-top-color:  ${({ theme }) => theme.colors.color_two};
    border-left-color:  ${({ theme }) => theme.colors.color_three};
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }
  
 
  @-webkit-keyframes nprogress-spinner {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
