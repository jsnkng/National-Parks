import React, { useState } from 'react'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'
import territories from '../config/states'
import MapDiagram from './mapdiagram'
console.log(territories)
// import Loader from '../components/loader'

const Component = ({ backgroundURL, title, subtitle, states }) => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)
  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }
  const name = states.toLowerCase().split(',').map(item => territories[item][0]).join(', ')
  // console.log('name', name)
  return (
    <Park onClick={handleBannerClick}>
      <div className="banner__header">
        <h2 dangerouslySetInnerHTML={{__html: title.replace(/&#333;/gi, "ō")}}></h2>
        {/* <span>{name}</span> */}
        <h3>{subtitle}</h3>
        {/* <MapDiagram__Wrapper>
            <MapDiagram territories={states} highlighted={null} onHighlight={(terr) => setHighlight(terr)} />
          </MapDiagram__Wrapper> */}
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
  min-height: 22em;
  min-width: 300px;
  margin: 0;
  padding: 0;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);
  background-color: ${({ theme }) => theme.colors.trans_back};
  background-image: ${props => props.backgroundURL};
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  ${'' /* ${SuperQuery().minWidth.lg.css`
    width: 50vw;
  `} */}
  .banner__header {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.trans_back};
    color: ${({ theme }) => theme.colors.text};
    height: 4em;
    padding: .125em .5em;
    z-index: 20;

    h2 {
      float: left;
      font-weight: 700;
      font-size: 1.25em;
      line-height: 1;
      letter-spacing: -1.5px;
      border: none;
      margin: .5em 0 0 .25em;
      padding: 0; 
    }
    h3 {
      float: left;
      clear: left;
      text-align: left;
      font-weight: 400;
      font-size: 1em;
      line-height: 1;
      letter-spacing: -1px;
      margin: 0 0 0 .375em;
      padding: 0; 
    }
    span {position: absolute;
      top: .875em;
      right: .5em;
      text-align: right;
      font-weight: 400;
      font-size: .75em;
      line-height: .85;
      letter-spacing: -1px;
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
  
  background-color: ${({ theme }) => theme.colors.trans_back};
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 10;
  -webkit-animation: myfirst 1s; /* Chrome, Safari, Opera */
  animation: myfirst 1s;
`

// const MapDiagram__Wrapper = styled.div`
//   position: absolute;
//   top: 5px;
//   right: 13px;
//   width: 100px;
// `
// const Spinner = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   z-index: 100;
//   background-color: ${({ theme }) => theme.colors.trans_back};
//   color: ${({ theme }) => theme.colors.text};
//   font-size: .7em;
//   &.show {
//     display: block;
//   }
//   &.hide {
//     display: none;
//   }

// `
