import React, { useState } from 'react'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Component = ({ backgroundURL, title, subtitle }) => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }
  
  return (
    <Park onClick={handleBannerClick}>
      <Spinner className={isSpinnerVisible ? 'show' : 'hide'}>
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        Loading
        </div>
      </Spinner>
      <div className="banner__header">
        <h2 dangerouslySetInnerHTML={{__html: title.replace(/&#333;/gi, "ō")}}></h2>
        <h3>{subtitle}</h3>
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
  width: 100vw;
  height: 22em;
  margin: 0;
  padding: 0;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);
  background-color: ${props => props.theme.colors.trans_back};
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  

  ${SuperQuery().minWidth.lg.css`
    width: 50vw;
  `}
  .banner__header {
    position: relative;
    background-color: ${props => props.theme.colors.trans_back};
    color: ${props => props.theme.colors.text};
    height: 4em;
    padding: .125em .5em;
    z-index: 20;

    h2 {
      float: left;
      margin: 0;
      font-weight: 700;
      letter-spacing: -1.5px;
      line-height: .85;
      font-size: 1.5em;
      font-weight: 600;
      border: none;
    }
    h3 {
      position: absolute;
      top: 2.25em;
      right: .5em;
      text-align: right;
      font-weight: 600;
      font-size: 1em;
      line-height: .85;
      margin: 0;
      padding: 0;
    }
  }
`

const ResponsiveImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  background-color: ${props => props.theme.colors.trans_back};
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 10;
`

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background-color: ${props => props.theme.colors.trans_back};
  color: ${props => props.theme.colors.text};
  font-size: .7em;
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
  .sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 100px auto;
  }
  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: ${props => props.theme.colors.color_two};
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
  }
  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
@-webkit-keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
  }
}
@keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  } 
}
`
