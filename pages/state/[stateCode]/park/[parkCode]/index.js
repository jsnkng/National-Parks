import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Masthead from '../../../../../components/masthead'
import Places from '../../../../../components/places'
import People from '../../../../../components/people'
import VisitorCenters from '../../../../../components/visitorcenters'
import Events from '../../../../../components/events'
import Articles from '../../../../../components/articles'
import Alerts from '../../../../../components/alerts'
import Campgrounds from '../../../../../components/campgrounds'
import MapContainer from '../../../../../components/googlemap'


const Park = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [park, setPark] = useState(props.parks)
  const [places, setPlaces] = useState(props.places)
  const [people, setPeople] = useState(props.people)
  const [visitorCenters, setVisitorCenters] = useState(props.visitorCenters)
  const [events, setEvents] = useState(props.events)
  const [articles, setArticles] = useState(props.articles)
  const [alerts, setAlerts] = useState(props.alerts)
  const [campgrounds, setCampgrounds] = useState(props.campgrounds)

  

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
      {/* {park.latLong}<br /> */}
      
      


      <MapContainer 
        lat={Number(park.latLong.split(",")[0].slice(4))} 
        lng={Number(park.latLong.split(",")[1].slice(6))}
      />
          


      <h2>Campgrounds</h2>
      { campgrounds.slice(0).map((item) => {
          return(
            <Campgrounds 
              key={item.id}
              campgrounds={item} 
            />
          )
        })
      }

      <h2>Alerts</h2>
      { alerts.slice(0).map((item) => {
          return(
            <Alerts 
              key={item.id}
              alerts={item} 
            />
          )
        })
      }
      <h2>Articles</h2>
      { articles.slice(0).map((item) => {
          return(
            <Articles 
              key={item.id}
              articles={item} 
            />
          )
        })
      }
      <h2>Events</h2>
      { events.slice(0).map((item) => {
          return(
            <Events 
              key={item.id}
              events={item} 
            />
          )
        })
      }

      <h2>Places</h2>
      { places.slice(0).map((item) => {
          return(
            <Places 
              key={item.id}
              places={item} 
            />
          )
        })
      }

      <h2>People</h2>
      { people.slice(0).map((item) => {
          return(
            <People 
              key={item.id}
              people={item} 
            />
          )
        })
      }

      <h2>Visitor Centers</h2>
      { visitorCenters.slice(0).map((item) => {
          return(
            <VisitorCenters 
              key={item.id}
              visitorCenters={item} 
            />
          )
        })
      }
    </Content>
    </>
  )
}
  
Park.getInitialProps = async ({query}) => {
  const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
  const apiURL = 'https://developer.nps.gov/api/v1'

  const parksEndpoint = `${apiURL}/parks?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const parksResult = await fetch(parksEndpoint)
  const parks = await parksResult.json()
  
  const peopleEndpoint = `${apiURL}/people?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const peopleResult = await fetch(peopleEndpoint)
  const people = await peopleResult.json()

  const placesEndpoint = `${apiURL}/places?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const placesResult = await fetch(placesEndpoint)
  const places = await placesResult.json()

  const visitorCentersEndpoint = `${apiURL}/visitorcenters?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const visitorCentersResult = await fetch(visitorCentersEndpoint)
  const visitorCenters = await visitorCentersResult.json()

  const eventsEndpoint = `${apiURL}/events?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const eventsResult = await fetch(eventsEndpoint)
  const events = await eventsResult.json()

  const articlesEndpoint = `${apiURL}/articles?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const articlesResult = await fetch(articlesEndpoint)
  const articles = await articlesResult.json()

  const alertsEndpoint = `${apiURL}/alerts?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const alertsResult = await fetch(alertsEndpoint)
  const alerts = await alertsResult.json()

  const campgroundsEndpoint = `${apiURL}/campgrounds?parkCode=${query.parkCode}&fields=images&api_key=${apiKey}`
  const campgroundsResult = await fetch(campgroundsEndpoint)
  const campgrounds = await campgroundsResult.json()


  const result = {
    "parks" : parks.data[0],
    "places" : places.data,
    "people" : people.data,
    "visitorCenters" : visitorCenters.data,
    "events" : events.data,
    "articles" : articles.data,
    "alerts" : alerts.data,
    "campgrounds" : campgrounds.data
  }

  // console.log(result);
  // const url = `https://developer.nps.gov/api/v1/places?parkCode=${query.parkCode}&api_key=${apiKey}`
  // const res = await fetch(url)
  // const result = await res.json()
 




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
