import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../../../components/datastates'
import Masthead__Component from '../../../../../components/masthead';
import Footer__Component from '../../../../../components/footer'

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

  let markers = []
  markers.push({id: park.id, latLong: park.latLong, name: park.name, description: park.description}) 
  
 
  return (
    <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
       <meta name="theme-color" content="#ff6600" />
       <link rel="apple-touch-icon" href="/static/icon.png" />
       <meta name="apple-mobile-web-app-title" content="Hacker News" />
       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
       <meta name="apple-mobile-web-app-capable" content="yes" />
       <meta name="mobile-web-app-capable" content="yes" />
       <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script>
    </Head>
    <Container>
      <Masthead__Component 
        pageTitle={park.name}
        pageStateCode={stateCode}
        pageSubTitle={park.designation}
        pageSubSubTitle={states[stateCode][0]}
        pageSubSubSubTitle="" 
      />

      { park.images !== undefined && park.images.length !== 0 &&
        <SlideShow__Component park={park} />
      }


      <Description__Wrapper>
        <Description__Component park={park} />
          { alerts !== undefined && alerts.length != 0 &&
            <Alerts__Component alerts={alerts} />
          }
          {/* <a href="{park.url}">National Park Service’s {park.name} Website.</a> */}
      </Description__Wrapper>
{/*       
      <VisitorInfo__Wrapper>
        <VisitorInfo__Component park={park} markers={markers} />
      </VisitorInfo__Wrapper>
      
      { events !== undefined && events.length != 0 &&
        <Events__Wrapper>
          <Events__Component park={park} events={events} />
        </Events__Wrapper>
      }

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
      } */}
      <Footer__Component
        pageTitle={park.name}
        pageStateCode={stateCode}
        pageSubTitle={park.designation}
        pageSubSubTitle={states[stateCode][0]}
        pageSubSubSubTitle=""
       />
    </Container>
    </>
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
  padding: 60px 0 0 0;
  ${SuperQuery().minWidth.sm.css`
    padding: 80px 0 0 0;
  `}
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
  h4 a {
    color: #a1dde9;
  }
  h3 {
    color: #ffffff;
  }
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Events__Wrapper = styled.div`
  background-color: #1e1d1e;
  margin: 0;
  padding: 20px 0;
  color: #ffffff;
  
  h4 a {
    color: #a1dde9;
  }
  h3 {
    color: #ffffff;
  }
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const VisitorInfo__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const VisitorCenters__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  
  h4 a {
    color: #a1dde9;
  }
  h3 {
    color: #ffffff;
  }
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Campgrounds__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  
  h4 a {
    color: #a1dde9;
  }
  h3 {
    color: #ffffff;
  }
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Articles__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  h4 a {
    color: #a1dde9;
  }
  h3 {
    color: #ffffff;
  }
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Places__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  h4 a {
    color: #a1dde9;
  }
  h3 {
    color: #ffffff;
  }
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const People__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 1em 0;
  color: #ffffff;
  h4 a {
    color: #a1dde9;
  }
  h3 {
    color: #ffffff;
  }
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
