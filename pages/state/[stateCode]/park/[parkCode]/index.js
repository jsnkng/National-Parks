import React, { useState } from 'react'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'

import SlideShow__Component from '../../../../../components/slideshow'
import Alerts__Component from '../../../../../components/alerts'
import NewsReleases__Component from '../../../../../components/newsreleases'
import VisitorInfo__Component from '../../../../../components/visitorinfo'
import VisitorCenters__Component from '../../../../../components/visitorcenters'
import Events__Component from '../../../../../components/events'
import Campgrounds__Component from '../../../../../components/campgrounds'
import Places__Component from '../../../../../components/places'
import People__Component from '../../../../../components/people'
import Articles__Component from '../../../../../components/articles'
import Description__Component from '../../../../../components/description'

const Park = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [park, setPark] = useState(props.data[0])
  const [places, setPlaces] = useState(props.places.data)
  const [people, setPeople] = useState(props.people.data)
  const [visitorCenters, setVisitorCenters] = useState(props.visitorcenters.data)
  const [events, setEvents] = useState(props.events.data)
  const [articles, setArticles] = useState(props.articles.data)
  const [alerts, setAlerts] = useState(props.alerts.data)
  const [campgrounds, setCampgrounds] = useState(props.campgrounds.data)
  const [newsReleases, setNewsReleases] = useState(props.newsreleases.data)

  props.setPageTitle(park.name)
  props.setPageSubTitle(park.designation)
  props.setPageStateCode(stateCode)

  console.log(park)

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
      

      { newsReleases !== undefined && newsReleases.length != 0 &&
      <NewsReleases__Wrapper>
        <NewsReleases__Component newsReleases={newsReleases} />
      </NewsReleases__Wrapper>
      }

      { events !== undefined && events.length != 0 &&
      <Events__Wrapper>
        <Events__Component events={events} />
      </Events__Wrapper>
      }

      <VisitorInfo__Wrapper>
        <VisitorInfo__Component park={park} />
      </VisitorInfo__Wrapper>
      
      { visitorCenters !== undefined && visitorCenters.length != 0 &&
      <VisitorCenters__Wrapper>
        <VisitorCenters__Component visitorCenters={visitorCenters} />
      </VisitorCenters__Wrapper>
      }
        
      { campgrounds !== undefined && campgrounds.length != 0 &&
        <Campgrounds__Wrapper>
          <Campgrounds__Component campgrounds={campgrounds} />
        </Campgrounds__Wrapper>
      }
      
      { places !== undefined && places.length != 0 &&
        <Places__Wrapper>
          <Places__Component places={places} />
        </Places__Wrapper>
      }
      
      { articles !== undefined && articles.length != 0 &&
        <Articles__Wrapper>
          <Articles__Component articles={articles} />
        </Articles__Wrapper>
      }
      
      { people !== undefined && people.length != 0 &&
        <People__Wrapper>
          <People__Component people={people} />
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