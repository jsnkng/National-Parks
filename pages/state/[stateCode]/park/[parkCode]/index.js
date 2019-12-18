import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'


import Alerts__Component from '../../../../../components/alerts'
import Articles__Component from '../../../../../components/articles'
import Campgrounds__Component from '../../../../../components/campgrounds'
import Description__Component from '../../../../../components/description'
import Events__Component from '../../../../../components/events'
import NewsReleases__Component from '../../../../../components/newsreleases'
import People__Component from '../../../../../components/people'
import Places__Component from '../../../../../components/places'
import SlideShow__Component from '../../../../../components/slideshow'
import VisitorInfo__Component from '../../../../../components/visitorinfo'
import VisitorCenters__Component from '../../../../../components/visitorcenters'

const Park = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [park, setPark] = useState(props.data[0])
  const [alerts, setAlerts] = useState(props.alerts.data)
  const [articles, setArticles] = useState(props.articles.data)
  const [campgrounds, setCampgrounds] = useState(props.campgrounds.data)
  const [events, setEvents] = useState(props.events.data)
  const [newsReleases, setNewsReleases] = useState(props.newsreleases.data)
  const [people, setPeople] = useState(props.people.data)
  const [places, setPlaces] = useState(props.places.data)
  const [visitorCenters, setVisitorCenters] = useState(props.visitorcenters.data)
  props.setPageTitle(park.name)
  props.setPageSubTitle(park.designation)
  props.setPageStateCode(stateCode)
  
  let markers = []
  markers.push({id: park.id, latLong: park.latLong, name: park.name, description: park.description}) 

  return (
    <Container>
      
      { park.images !== undefined && park.images.length != 0 &&
        <SlideShow__Component park={park} />
      }

      <Description__Wrapper>
        <Description__Component park={park} />
    
        { alerts !== undefined && alerts.length != 0 &&
          <Alerts__Component alerts={alerts} />
        }
        {/* <a href="{park.url}">National Park Service’s {park.name} Website.</a> */}
           
      </Description__Wrapper>
      

      <VisitorInfo__Wrapper>
        <VisitorInfo__Component park={park} markers={markers} />
      </VisitorInfo__Wrapper>
      
      { visitorCenters !== undefined && visitorCenters.length != 0 &&
      
      <VisitorCenters__Wrapper>
        { visitorCenters.slice(0).map((item) => {
          markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description}) 
        })}
        <VisitorCenters__Component park={park} visitorCenters={visitorCenters} />
      </VisitorCenters__Wrapper>
      }
        
      { campgrounds !== undefined && campgrounds.length != 0 &&

       
        <Campgrounds__Wrapper>
          { campgrounds.slice(0).map((item) => {
            markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description}) 
          })}
          <Campgrounds__Component park={park} campgrounds={campgrounds} />
        </Campgrounds__Wrapper>
      }

      { events !== undefined && events.length != 0 &&
      <Events__Wrapper>
        <Events__Component park={park} events={events} />
      </Events__Wrapper>
      }

      { newsReleases !== undefined && newsReleases.length != 0 &&
      <NewsReleases__Wrapper>
        <NewsReleases__Component park={park} newsReleases={newsReleases} />
      </NewsReleases__Wrapper>
      }
      
      { places !== undefined && places.length != 0 &&
        <Places__Wrapper>
          { places.slice(0).map((item) => {
            markers.push({id: item.id, latLong: item.latLong, name: item.title, description: item.listingdescription}) 
          })}
          <Places__Component park={park} places={places} />
        </Places__Wrapper>
      }
      
      { articles !== undefined && articles.length != 0 &&
        <Articles__Wrapper>
          <Articles__Component park={park} articles={articles} />
        </Articles__Wrapper>
      }
      
      { people !== undefined && people.length != 0 &&
        <People__Wrapper>
          <People__Component park={park} people={people} />
        </People__Wrapper>
      }

    </Container>
  )
}
  
Park.getInitialProps = async (query) => {
  const parkCode = query.query.parkCode
  const { origin } = absoluteUrl(query.req)

  const parksEndpoint = `${origin}/api/parks/${parkCode}`
  const parksResult = await fetch(parksEndpoint)
  const result = await parksResult.json()

  return result
}

export default Park

const Container = styled.div`
  font-family: Helvetica;
`
const Description__Wrapper = styled.div`
  padding: 1em 0;
  margin: 0;
  background-color: #1e1d1e;
  color: #ffffff; 
  margin: 0;
`
const NewsReleases__Wrapper = styled.div`
  background-color: #1e1d1e;
  color: #ffffff; 
  margin: 0;
  padding: 20px 0;
  a {
    color: #a1dde9;
    text-decoration: none;
  }
  h3 {
    color: #ffffff;
  }
`
const Events__Wrapper = styled.div`
  background-color: #1e1d1e;
  margin: 0;
  padding: 20px 0;
  color: #ffffff;
  a {
    color: #a1dde9;
    text-decoration: none;
  }
`
const VisitorInfo__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  a {
    color: #4c93d9;
    text-decoration: none;
  }
`
const VisitorCenters__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  a {
    color: #4c93d9;
    text-decoration: none;
  }
`
const Campgrounds__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  a {
    color: #4c93d9;
    text-decoration: none;
  }
`
const Articles__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  a {
    color: #4c93d9;
    text-decoration: none;
  }
`
const Places__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  a {
    color: #4c93d9;
    text-decoration: none;
  }
`
const People__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  a {
    color: #4c93d9;
    text-decoration: none;
  }
`