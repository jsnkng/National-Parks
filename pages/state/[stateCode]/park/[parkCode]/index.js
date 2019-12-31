import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../../../config/datastates'
import Header from '../../../../../components/header'
import Footer from '../../../../../components/footer'

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


import LazyLoad, { forceCheck } from 'react-lazyload'

const Park = props => {
  const [loaded, setLoaded] = useState(false)
  const [park, setPark] = useState(props.data[0])
  const [alerts, setAlerts] = useState(props.alerts.data)
  const [articles, setArticles] = useState(props.articles.data)
  const [campgrounds, setCampgrounds] = useState(props.campgrounds.data)
  const [events, setEvents] = useState(props.events.data)
  const [newsReleases, setNewsReleases] = useState(props.newsreleases.data)
  const [people, setPeople] = useState(props.people.data)
  const [places, setPlaces] = useState(props.places.data)
  const [visitorCenters, setVisitorCenters] = useState(props.visitorcenters.data)

  const pageTransitionDelayEnter = true

  const markers = [{id: park.id, latLong: park.latLong, name: park.name, description: park.description}]
    
  visitorCenters !== undefined && visitorCenters.length != 0 &&
  visitorCenters.slice(0).map((item) => {
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
    // props.pageTransitionReadyToEnter()
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
          <title>{states[props.stateCode][0]} | {park.name} {park.designation}</title>
        </Head>
        <Header 
          park={park.name.replace(/&#333;/gi, "ō").replace(/&#257;/gi, "ā")} 
          designation={park.designation}
          state={states[props.stateCode][0]}
          stateCode={props.stateCode}
        />
        <Content>
          { park.images !== undefined && park.images.length !== 0 &&
          <SlideShow__Component park={park} />
          }

          <Description__Component park={park} />

          { alerts !== undefined && alerts.length != 0 &&
          <Alerts__Component alerts={alerts} />
          }

          <VisitorInfo__Component park={park} markers={markers} />
          
          { events !== undefined && events.length != 0 &&
          <Events__Component park={park} events={events} />
          }
          { visitorCenters !== undefined && visitorCenters.length != 0 &&
          <VisitorCenters__Component park={park} visitorCenters={visitorCenters} />
          }
          { campgrounds !== undefined && campgrounds.length != 0 &&
          <Campgrounds__Component park={park} campgrounds={campgrounds} />
          }
          { newsReleases !== undefined && newsReleases.length != 0 &&
          <NewsReleases__Component park={park} newsReleases={newsReleases} />
          }
          { places !== undefined && places.length != 0 &&
          <Places__Component park={park} places={places} />
          }
          { articles !== undefined && articles.length != 0 &&
          <Articles__Component park={park} articles={articles} />
          }
          { people !== undefined && people.length != 0 &&
          <People__Component park={park} people={people} />
          } 
        </Content>
        <Footer
            setTheme={props.setTheme}
        />
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

export default Park

const Content = styled.main`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  margin-top: 70px;
  ${SuperQuery().minWidth.sm.css`
    margin-top: 90px;
  `}

  h4 a {
    color: ${props => props.theme.colors.color_two};
  }
  a {
    color: ${props => props.theme.colors.color_one};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`