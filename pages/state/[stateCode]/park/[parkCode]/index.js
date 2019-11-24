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
  // console.log('++++++++++++++++++++++++++++++++++++++\n\n\n\n\n\n', props.parks)
  const router = useRouter()
  const { stateCode } = router.query
  const [park, setPark] = useState(props.parks.parks.data[0])
  const [places, setPlaces] = useState(props.parks.places.data)
  const [people, setPeople] = useState(props.parks.people.data)
  const [visitorCenters, setVisitorCenters] = useState(props.parks.visitorcenters.data)
  const [events, setEvents] = useState(props.parks.events.data)
  const [articles, setArticles] = useState(props.parks.articles.data)
  const [alerts, setAlerts] = useState(props.parks.alerts.data)
  const [campgrounds, setCampgrounds] = useState(props.parks.campgrounds.data)

//  console.log('>>>',park)

  return (
    <>
    <Masthead pageTitle={park.name} subTitle={park.designation} stateCode={stateCode}></Masthead>
    <ResponsiveImage backgroundURL={park.images[0].url === undefined || park.images[0].url.length == 0 ? "" : park.images[0].url  } height="450px" /><br /><br />
    
    <MapContainer 
        lat={Number(park.latLong.split(",")[0].slice(4))} 
        lng={Number(park.latLong.split(",")[1].slice(6))}
      />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  

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
      
      

      <h2>Alerts</h2>
      <FlexBox>
      { alerts.slice(0).map((item) => {
          return(
            <Alerts 
              key={item.id}
              alerts={item} 
            />
          )
        })
      }
      </FlexBox>
      <h2>Events</h2>
      <FlexBox>
      { events.slice(0).map((item) => {
          return(
            <Events 
              key={item.id}
              events={item} 
            />
          )
        })
      }
      </FlexBox>

      <h2>Articles</h2>
      <FlexBox>
      { articles.slice(0).map((item) => {
          return(
            <Articles 
              key={item.id}
              articles={item} 
            />
          )
        })
      }
      </FlexBox>
      <h2>Places</h2>
      <FlexBox>
      { places.slice(0).map((item) => {
          return(
            <Places 
              key={item.id}
              places={item} 
            />
          )
        })
      }
      </FlexBox>
      <h2>People</h2>
      <FlexBox>
      { people.slice(0).map((item) => {
          return(
            <People 
              key={item.id}
              people={item} 
            />
          )
        })
      }
      </FlexBox>
      <h2>Visitor Centers</h2>
      <FlexBox>
      { visitorCenters.slice(0).map((item) => {
          return(
            <VisitorCenters 
              key={item.id}
              visitorCenters={item} 
            />
          )
        })
      }
      </FlexBox>
      <h2>Campgrounds</h2>
      <FlexBox>
      { campgrounds.slice(0).map((item) => {
          return(
            <Campgrounds 
              key={item.id}
              campgrounds={item} 
            />
          )
        })
      }
      </FlexBox>

    </Content>
    </>
  )
}
  
Park.getInitialProps = async ({query}) => {

  // const parksEndpoint = `https://national-parks.now.sh/api/parks/${query.parkCode}`
  const parksEndpoint = `http://localhost:3000/api/parks/${query.parkCode}`
  const parksResult = await fetch(parksEndpoint)
  const parks = await parksResult.json()

  const result = {
    "parks" : parks,
    
  }



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
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Content = styled.div`
  font-family: Helvetica;
  padding: 15px;
  margin: 0;

`
