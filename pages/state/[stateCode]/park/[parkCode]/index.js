/* Basic Setup */
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { forceCheck } from 'react-lazyload'

/* State Data & SVG Config */
import territories from '../../../../../config/states'

/* Page Components */
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

   /* Flag loaded state of page for pageTransitions */
  const [loaded, setLoaded] = useState(false)

  /* Reset Page & Set Loaded */
  useEffect(() => {
    window.scrollTo(0, 0)
    !loaded && setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  /* Manually trigger checking for elements that may have moved into viewport during refresh */
  useEffect(() => {
    forceCheck()
  })

  /* Google Map Markers */
  const markers = [{id: park.id, latLong: park.latLong, name: park.name, description: park.description}]
      
  /* Plot visitor centers markers */
  visitorcenters !== undefined && visitorcenters.length != 0 &&
    visitorcenters.slice(0).map((item) => {
      markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description}) 
    })
  
  /* Plot campgrounds markers */  
  campgrounds !== undefined && campgrounds.length != 0 &&
    campgrounds.slice(0).map((item) => {
      markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description})
    })

  /* Plot places markers */ 
  places !== undefined && places.length != 0 &&
    places.slice(0).map((item) => {
      markers.push({id: item.id, latLong: item.latLong, name: item.title, description: item.listingdescription})
    })

  /* Wait until page is loaded triggers */
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


Park.pageTransitionDelayEnter = true

/* Fetch Park Async Function */
async function getParks(territory) {
  const result = await (await fetch(`${process.env.WEB_URI}/state/${territory}`)).json()
  
  return result.data.map(item => { 
    return { params: { stateCode: territory, parkCode: item.parkCode }}
  })
}


/* Fetch content for SSR */
export async function getStaticProps(context) {
  const apiResult = await fetch(`${process.env.WEB_URI}/parks/${context.params.parkCode}`)
  const result = await apiResult.json()
  const stateCode  = context.params.stateCode
  const parkCode  = context.params.parkCode
  const park  = result.park ? result.park : ""
  const alerts  = result.alerts ? result.alerts : ""
  const newsreleases  = result.newsreleases ? result.newsreleases : ""
  const events  = result.events ? result.events : ""
  const articles  = result.articles ? result.articles : ""
  const people  = result.people ? result.people : ""
  const places  = result.places ? result.places : ""
  const visitorcenters  = result.visitorcenters ? result.visitorcenters : ""
  const campgrounds  = result.campgrounds ? result.campgrounds : ""

  return {
    props: {
       stateCode,
       parkCode, 
       park,
       alerts,
       newsreleases,
       events,
       articles,
       people,
       places,
       visitorcenters,
       campgrounds
    }, /* will be passed to the page component as props */
  }
}

/* Fetch paths to pre-render from the states configuration file we've already loaded at var = territories */
export async function getStaticPaths() {
  const parks = Promise.all(Object.keys(territories).map(territory => { 
    return getParks(territory)

  }))
  
  const paths = [].concat.apply([], parks);

  /* We'll pre-render only these paths at build time.
    { fallback: false } means other routes should 404. */
  return { paths, fallback: false }
}

export default Park 

/* Stylized Components */
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