import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import states from './statesLookup.js';

const Card = props => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
  const toggleIsDescriptionVisible = (e)=> {

    setIsDescriptionVisible(!isDescriptionVisible)
  }
  
    return (
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${props.stateCode}/park/${props.data.parkCode}`}>
      <CardWrapper>
        <Banner>
          <Name>
            <h2>{props.data.name}</h2>
          </Name>
          <Identifier>
            <span>
              {/* <p>National Park Service<br />
              U.S. Department of the Interior</p> */}
              <h3>{props.data.designation}</h3>
            </span>
            <img src="/US-National-Parks-logo-sml.gif" />
          </Identifier>
        </Banner> 
        <ResponsiveImage onMouseOver={toggleIsDescriptionVisible} onMouseOut={toggleIsDescriptionVisible} backgroundURL={props.data.images === undefined || props.data.images.length == 0 ? "" : props.data.images[0].url  } height="250px">
        <Description  className={isDescriptionVisible === true ? 'visible' : 'hidden'}>
          <div className="parkInfo">
            <p className="description">{props.data.description}</p>
          </div>
          {/* <div>
            <span className="states">{props.data.states}</span>
          </div> */}
        </Description>
        </ResponsiveImage>
      </CardWrapper>
      </Link>
    )
}
  
export default Card

const CardWrapper = styled.div`
  font-family: Helvetica;
  width: 640px;
  margin: 5px 5px;
  min-height: 320px;
  border: solid 1px #cccccc;
  cursor: pointer;
  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);


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
  background-color: #1e1d1e;
  height: 40px;
  padding: 15px;
  color: #ffffff;
`
const Name = styled.div`
  width: 62%;
    float: left;

  h2 {
    margin: 0;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1.75em;
    font-weight: 600;
  }
`
const Identifier = styled.div`
  width: 38%;
  float: right;
  p {
    font-weight: 500;
    font-size: .6em;
    margin: 0;
  }
  h3 {
    font-weight: 600;
    font-size: .85em;
    margin: .25em 0 0 0;
  }
  span {
    width: 80%;
    float: left;
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
const ResponsiveImage = styled.div`
position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => props.height};
  margin: 0;
`