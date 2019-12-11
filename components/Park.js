import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'
import states from './datastates';

const Park = props => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
  const toggleIsDescriptionVisible = (e)=> {
    setIsDescriptionVisible(!isDescriptionVisible)
  }
  const handleBannerClick = () => {
    console.log('banner clicked')
    setIsSpinnerVisible(true)
  }
    return (
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${props.stateCode}/park/${props.data.parkCode}`}>
      <ParkWrapper onClick={handleBannerClick}>
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
        <Banner>
          <Name>
            {/* <img src="/US-National-Parks-logo-sml-bw.png" /> */}
            <h2>{props.data.name}</h2>
            <h3>{props.data.designation}</h3>
          </Name>
        </Banner> 
        <ResponsiveImage 
          onMouseOver={toggleIsDescriptionVisible} 
          onMouseOut={toggleIsDescriptionVisible} 
          backgroundURL={props.data.images === undefined || props.data.images.length == 0 ? "/US-National-Parks-logo-sml-bw.png" : props.data.images[0].url } />
      </ParkWrapper>
      </Link>
    )
}
  
export default Park

const ParkWrapper = styled.div`
  width: 100%;
  position: relative;
  font-family: Helvetica;
  height: 360px;
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);

  ${SuperQuery().minWidth.lg.css`
    width: 50%;
    height: 400px;
  `}

  & .parkInfo {
    max-width: 85%;
    margin: 0 auto 20px;
  }
  & .description {
    font-weight: 400;
    font-size: 1em;
    height: 120px;
    overflow: hidden;
  }
  & .states {
    float: left;
    font-weight: 700;
    text-transform: uppercase;
    padding: 2px 10px;
  }
   
`
const Banner = styled.div`
  background-color: rgba(0,0,0,.70);
  height: 40px;
  padding: 15px;
  color: #ffffff;
  z-index: 230;
`
const ResponsiveImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.70);
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: -10;

`
const Name = styled.div`
  h2 {
    float:left;
    margin: 0;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1.75em;
    font-weight: 600;
  }
  h3 {
    float:right;
    font-weight: 600;
    font-size: .66em;
    margin: .25em 0 0 0;
  }
  img {
    float: right;
    width: 32px;
  }
`
const Description = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 20px;
  width:80%;
  background-color: #fff;
  &.visible {
    opacity: 1;
  }
`


const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background-color: rgba(0,0,0,0.7);
  color: #ffffff;
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
    background-color: #ffffff;
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
