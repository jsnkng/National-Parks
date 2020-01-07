import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../../../config/states'
import Header from '../../../../../components/header'
import Footer from '../../../../../components/footer'

import Alerts from '../../../../../components/alerts'
import Articles from '../../../../../components/articles'
import Campgrounds from '../../../../../components/campgrounds'
import Description from '../../../../../components/description'
import Events from '../../../../../components/events'
import NewsReleases from '../../../../../components/newsreleases'
import People from '../../../../../components/people'
import Places from '../../../../../components/places'
import SlideShow from '../../../../../components/slideshow'
import VisitorInfo from '../../../../../components/visitorinfo'
import VisitorCenters from '../../../../../components/visitorcenters'
import FindAPark from '../../../../../components/findapark'

import LazyLoad, { forceCheck } from 'react-lazyload'

const Park = ({ 
  themeName, setThemeName, pageTransitionReadyToEnter, 
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
  campgrounds }) => {
  
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()
  const markers = [{id: park.id, latLong: park.latLong, name: park.name, description: park.description}]
  visitorcenters !== undefined && visitorcenters.length != 0 &&
  visitorcenters.slice(0).map((item) => {
    markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description}) 
  })
  campgrounds !== undefined && campgrounds.length != 0 &&
  campgrounds.slice(0).map((item) => {
    markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description})
  })
  places !== undefined && places.length != 0 &&
  places.slice(0).map((item) => {
    markers.push({id: item.id, latLong: item.latLong, name: item.title, description: item.listingdescription})
  })

  useEffect(() => {
    loaded === false && setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  useEffect(() => {
    forceCheck()
  })

  if (!loaded) {
    return null
  } else {
    const territories = park.states.split(',').map( state => {
      return (
        <Link href='/state/[stateCode]' as={`/state/${state.toLowerCase()}/`} key={state}><a> {states[state.toLowerCase()][0]} </a></Link>
      )
    })

    const territory = <Link href='/state/[stateCode]' as={`/state/${stateCode}/`} key={stateCode}><a> {states[stateCode][0]} </a></Link>
    
    return (
      <>
        <Head>
          <title>{states[stateCode][0]} | {park.name} {park.designation}</title>
        </Head>
        <Header 
            park='National Park Service'
            designation='A State-by-State Guide'
          state={states[stateCode][0]}
          stateCode={stateCode}
          states={park.states}
          title={park.name.replace(/&#333;/gi, "ō").replace(/&#257;/gi, "ā")} 
          title__sub={park.designation}
          title_as={`/state/${stateCode}/park/${parkCode}`}
          title_href='/state/[stateCode]/park/[parkCode]'
        />
        <Content>
          { park.images !== undefined && park.images.length !== 0 &&
          <SlideShow park={park} />
          }
          { park.images === undefined || park.images.length === 0 &&
          <div style={{height: '90px'}}></div>
          }
          <Description park={park} />

          { alerts !== undefined && alerts.length != 0 &&
          <Alerts alerts={alerts} />
          }

          { events !== undefined && events.length != 0 &&
          <Events park={park} events={events} />
          }
          <VisitorInfo park={park} markers={markers} />
            
          { visitorcenters !== undefined && visitorcenters.length != 0 &&
          <VisitorCenters park={park} visitorCenters={visitorcenters} />
          }
          { campgrounds !== undefined && campgrounds.length != 0 &&
          <Campgrounds park={park} campgrounds={campgrounds} />
          }
          { newsreleases !== undefined && newsreleases.length != 0 &&
          <NewsReleases park={park} newsReleases={newsreleases} />
          }
          { places !== undefined && places.length != 0 &&
          <Places park={park} places={places} />
          }
          { articles !== undefined && articles.length != 0 &&
          <Articles park={park} articles={articles} />
          }
          { people !== undefined && people.length != 0 &&
          <People park={park} people={people} />
          } 
        </Content> 
      <Footer themeName={themeName} setThemeName={setThemeName} />
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
  margin: 0 0 80px 0; 

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
