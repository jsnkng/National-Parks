import React, {useState, useEffect} from 'react'
import Head from 'next/head'
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

import LazyLoad, { forceCheck } from 'react-lazyload'

const Park = ({ 
  ToggleTheme, 
  manageHistory,
  pageTransitionReadyToEnter, 
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
    return (
      <>
        <Head>
          <title>{states[stateCode][0]} | {park.name} {park.designation}</title>
        </Head>
        <Header 
          park={park.name.replace(/&#333;/gi, "ō").replace(/&#257;/gi, "ā")} 
          designation={park.designation}
          state={states[stateCode][0]}
          stateCode={stateCode}
          manageHistory={manageHistory} 
        />
        <Content>
          { park.images !== undefined && park.images.length !== 0 &&
          <SlideShow park={park} />
          }

          <Description park={park} />

          { alerts !== undefined && alerts.length != 0 &&
          <Alerts alerts={alerts} />
          }

          { newsreleases !== undefined && newsreleases.length != 0 &&
          <NewsReleases park={park} newsReleases={newsreleases} />
          }
          { events !== undefined && events.length != 0 &&
          <Events park={park} events={events} />
          }
          <VisitorInfo park={park} markers={markers} />
            
          { visitorcenters !== undefined && visitorcenters.length != 0 &&
          <VisitorCenters park={park} visitorCenters={visitorcenters} />
          }
          { places !== undefined && places.length != 0 &&
          <Places park={park} places={places} />
          }
          { campgrounds !== undefined && campgrounds.length != 0 &&
          <Campgrounds park={park} campgrounds={campgrounds} />
          }
          { articles !== undefined && articles.length != 0 &&
          <Articles park={park} articles={articles} />
          }
          { people !== undefined && people.length != 0 &&
          <People park={park} people={people} />
          } 
        </Content> 
        <Footer title="National Park Service" subtitle="A State-By-State Guide"  ToggleTheme={ToggleTheme} manageHistory={manageHistory} />
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
  return result
}

Park.pageTransitionDelayEnter = true

export default Park

const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  margin: 70px 0;
  ${SuperQuery().minWidth.md.css`
    margin: 88px 0;
  `}

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
