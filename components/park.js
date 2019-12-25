import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad from 'react-lazyload'

const Park = props => {
  const url = props.data.images === undefined || props.data.images.length == 0 
    ? "/us-nps.png" 
    : process.env.AWS_URI + props.data.images[0].url.replace(/[/:-\s]/g, '_')
  
  return (
    <LazyLoad height={'100%'} offset={0}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${props.stateCode}/park/${props.data.parkCode}`} passHref>
      <ParkWrapper>
        <Banner>
          <Name>
            <h2>{props.data.name}</h2>
            <h3>{props.data.designation}</h3>
          </Name>
        </Banner> 
          <ResponsiveImage backgroundURL={url} />
        </ParkWrapper>
      </Link>
    </LazyLoad>
  )
}
  
export default Park

const ParkWrapper = styled.div`
  position: relative;
  width: 100%;
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
  height: 30px;
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
    line-height: .75;
    font-size: 1.5em;
    font-weight: 600;
    border:none;
  }
  h3 {
    float:right;
    text-align: right;
    font-weight: 600;
    font-size: .66em;
    line-height: 1;
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