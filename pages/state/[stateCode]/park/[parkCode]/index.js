import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import { forceCheck } from 'react-lazyload'
import territories from '../../../../../config/states'

import Header from '../../../../../components/header'
import SlideShow from '../../../../../components/elements/slideshow'
import Description from '../../../../../components/description'
import Alerts from '../../../../../components/alerts'
import VisitorInfo from '../../../../../components/visitorinfo'
import VisitorCenters from '../../../../../components/visitorcenters'
import Events from '../../../../../components/events'
import Campgrounds from '../../../../../components/campgrounds'
import NewsReleases from '../../../../../components/newsreleases'
import People from '../../../../../components/people'
import Places from '../../../../../components/places'
import Articles from '../../../../../components/articles'
import Footer from '../../../../../components/footer'

const Park = ({ 
  themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture, lastPage,
  stateCode,
  park, 
  alerts, 
  newsreleases, 
  events, 
  articles, 
  people, 
  places, 
  visitorcenters, 
  campgrounds }) => {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    !loaded && setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  useEffect(() => {
    forceCheck()
  })

  const markers = [{id: park.id, latLong: park.latLong, name: park.name, description: park.description}]
        
  visitorcenters !== undefined && visitorcenters.length != 0 &&
    visitorcenters.slice(0).map((item) => {
      markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description}) 
    })
  campgrounds !== undefined && campgrounds.length != 0 &&
    campgrounds.slice(0).map((item) => {
      markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description})
    })

    // (!Array.isArray(places) || !places.length) ||
  places !== undefined && places.length != 0 &&
    places.slice(0).map((item) => {
      markers.push({id: item.id, latLong: item.latLong, name: item.title, description: item.listingdescription})
    })

  if (!loaded) {
    return null
  } else {
    return (
      <>
        <Head>
          <title>{territories[stateCode][0]} | {park.name} {park.designation}</title> 
          <meta property="og:title" key="ogtitle" content={`National Park Service Guide to ${park.name} ${park.designation}`} />
          <meta property="og:type" key="ogtype" content="website" />
          <meta property="og:url" key="ogurl" content={`https://www.natparguides.com/state/${stateCode}/park/${park.parkCode}`} />
          <meta property="og:image" key="ogimage" content={process.env.AWS_URI + park.images[0].url.replace(/[/:-]/g, '_')}  />
          <meta name="description" key="description" content={`Digital guide to ${park.name} ${park.designation} | ${park.description.substring(0, 130)} `} />
     
        </Head>
        <Header 
          title={park.name} 
          title__sub={park.designation}
          manageHistory={manageHistory}
          manageFuture={manageFuture}
          lastPage={lastPage}
        />
        <Content>
          { park.images !== undefined &&  
          <SlideShow__Decorated>
            <SlideShow 
              title={park.name} 
              subtitle={park.designation} 
              images={park.images.map((item, index) => ({ id: index+item.url, url: `${process.env.AWS_URI}${item.url.replace(/[/:-]/g, '_')}`, caption: item.title}))} 
              dimensions={{xl: true, height: '100%', width: '100%', 'minHeight': '100vh', 'minWidth': '100vw'}}  
            />
          </SlideShow__Decorated>
          }
          
          { park.images === undefined || park.images.length === 0 &&
          <div style={{height: '90px'}}></div>
          }
          <Description park={park} alerts={alerts} markers={markers} />

          { alerts !== undefined && alerts.length != 0 &&
          <Alerts alerts={alerts} />
          }
         
          <VisitorInfo park={park} alerts={alerts} markers={markers} />
            
          { visitorcenters !== undefined && visitorcenters.length != 0 &&
          <VisitorCenters park={park} visitorCenters={visitorcenters} />
          }
          { events !== undefined && events.length != 0 &&
          <Events park={park} events={events} />
          }
          { campgrounds !== undefined && campgrounds.length != 0 &&
          <Campgrounds park={park} campgrounds={campgrounds} />
          }


          { (!Array.isArray(newsreleases) || !newsreleases.length) ||
          <NewsReleases park={park} newsReleases={newsreleases} />
          
          }

          { (!Array.isArray(articles) || !articles.length) ||
            <Articles park={park} articles={articles} />

          }

          { (!Array.isArray(places) || !places.length) ||
            <Places park={park} places={places} />

          }

          { (!Array.isArray(people) || !people.length) ||
            <People park={park} people={people} />

          }

        
        </Content> 
      
        <Footer__Wrapper>
          <Footer themeName={themeName} 
            setThemeName={setThemeName}
            manageHistory={manageHistory}
            manageFuture={manageFuture} 
          />
        </Footer__Wrapper>
      </>
    )
  }
}

Park.getInitialProps = async ({ req, query }) => {
  const { stateCode } = query
  const { parkCode } = query
  const { origin } = absoluteUrl(req)
  const parkResult = await fetch(`${origin}/api/parks/${parkCode}`)
  const result = await parkResult.json()
  result.stateCode = stateCode
  result.parkCode = parkCode
  return result
}

Park.pageTransitionDelayEnter = true

export default Park

const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  margin: 100vh 0 0 0; 
  padding: 2rem 0 4rem 0;

  h4 a {
    color: ${({ theme }) => theme.colors.color_two};
  }
  a {
    color: ${({ theme }) => theme.colors.color_one};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Footer__Wrapper = styled.div`
  height: 3rem;
  color: ${({ theme }) => theme.colors.text } !important; 
`
const SlideShow__Decorated = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  -webkit-animation: myfirst 1s;
  animation: myfirst 1s;
`