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
    <img src={park.images[0].url} style={{width:"100%"}} /><br /><br />
    {/* {park.fullName}<br /> */}{stateCode}
    {park.states}<br /><br />
    {/* {park.name}<br /> */}
    {park.description}<br /><br />
    {/* {park.designation}<br /> */}
    {/* {park.parkCode}<br /> */}
    {/* {park.id}<br /> */}
    {park.directionsInfo}<br /><br />
    {park.directionsUrl}<br /><br />
    {park.url}<br /><br />
    {park.weatherInfo}<br /><br />
    {park.latLong}<br /><br />
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

