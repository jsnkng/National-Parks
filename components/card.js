import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const Card = ({data}) => {

  // const [states, setStates] = useState(data.states)
  // const [directionsInfo, setDirectionsInfo] = useState(data.directionsInfo)
  // const [directionsUrl, setDirectionsUrl] = useState(data.directionsUrl)
  // const [url, setUrl] = useState(data.url)
  // const [weatherInfo, setWeatherInfo] = useState(data.weatherInfo)
  // const [name, setName] = useState(data.name)
  // const [latLong, setLatLong] = useState(data.latLong)
  // const [description, setDescription] = useState(data.description)
  // const [images, setImages] = useState(data.images)
  // const [designation, setDesignation] = useState(data.designation)
  // const [parkCode, setParkCode] = useState(data.parkCode)
  // const [id, setId] = useState(data.id)
  // const [fullName, setFullName] = useState(data.fullName)
   
    return (
      <Link href={`/park/${data.parkCode}`}>
      <CardWrapper>
        <Banner>
          <Name>
            <h2>{data.name}</h2>
          </Name>
          <Identifier>
            <span>
              <p>National Park Service<br />
              U.S. Department of the Interior</p>
              <h3>{data.designation}</h3>
            </span>
            <img src="/US-National-Parks-logo-sml.gif" />
          </Identifier>
        </Banner> 
        <ResponsiveImage backgroundURL={data.images === undefined || data.images.length == 0 ? "" : data.images[0].url  } height="250px" />
       
        <div className="parkInfo">
          <p className="description">{data.description}</p>
        </div>
        <div>
          <span className="states">{data.states}</span>
        </div>
  
      </CardWrapper>
      </Link>
    )
}
  
export default Card

const CardWrapper = styled.div`
  font-family: Helvetica;
  width: 640px;
  margin: 5px 5px;
  min-height: 470px;
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
const ResponsiveImage = styled.div`
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => props.height};

  & button {
    position: relative;
    top: 150px;
  }
`