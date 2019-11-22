import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Masthead from '../../../../../components/masthead';


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



const Park = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [park, setPark] = useState(props.data[0])
  return (
    <>
    <Masthead pageTitle={park.name} subTitle={park.designation} stateCode={stateCode}></Masthead>
    <ResponsiveImage backgroundURL={park.images[0].url === undefined || park.images[0].url.length == 0 ? "" : park.images[0].url  } height="450px" /><br /><br />
    <Content>
      {/* {park.fullName}<br /> */}
      {/* {park.states}<br /><br /> */}
      {/* {park.name}<br /> */}
      <h2>{park.designation}</h2>
      {park.description}<br />
      {/* {park.designation}<br /> */}
      {/* {park.parkCode}<br /> */}
      {/* {park.id}<br /> */}
      <h2>Directions</h2>
      {park.directionsInfo}<br />
      {park.directionsUrl}<br />
      {park.url}<br />
      <h2>Weather</h2>
      {park.weatherInfo}<br />
      <h2>Location</h2>
      {park.latLong}<br />
    </Content>
    </>
  )
}
  
Park.getInitialProps = async ({query}) => {
  const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
  const url = `https://developer.nps.gov/api/v1/parks?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const res = await fetch(url)
  const result = await res.json()
  return result
}
  
export default Park




const ResponsiveImage = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 450px;
  margin: 0;
  
`
const Content = styled.div`
  font-family: Helvetica;
  padding: 15px;
  margin: 0;

`
