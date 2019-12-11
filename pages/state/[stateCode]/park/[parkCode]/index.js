import React, { useState, useEffect } from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel'
import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'

import states from '../../../../../components/statesLookup'

import Masthead from '../../../../../components/masthead'
import SlideShow from '../../../../../components/SlideShow'
import Footer from '../../../../../components/footer'
import Places from '../../../../../components/places'
import People from '../../../../../components/people'
import VisitorCenters from '../../../../../components/visitorcenters'
import Events from '../../../../../components/events'
import Articles from '../../../../../components/articles'
import Alerts from '../../../../../components/alerts'
import Campgrounds from '../../../../../components/campgrounds'
import MapContainer from '../../../../../components/googlemap'
import NewsReleases from '../../../../../components/newsreleases'
import MapDiagram from '../../../../../components/MapDiagram'

// const NEXT_API = process.env.NEXT_API
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
  const [highlighted, setHighlight] = useState(null)

  const SVG = props => {
    return (
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="174 100 959 593" 
        enableBackground="new 174 100 959 593" 
      >
        { Object.entries(states).map(([key, value]) => {
          const as = "/state/" + key
          return ( 
              <path key={key} id={key} className={park.states.split(',').includes(key.toUpperCase()) ? 'highlight' : ''} fill="#D3D3D3" d={value[1]} />
          )
        })
        }
        <path id="path67" fill="none" stroke="#A9A9A9" strokeWidth="2" d="M385,593v55l36,45 M174,525h144l67,68h86l53,54v46"/>
      </svg>
    )
  }

  return (
    <>
    <Masthead pageTitle={park.name} subTitle={park.designation} stateCode={stateCode}></Masthead>
  
    <SlideShow park={park} />
    
    <Description>
      <Grid>
        <Row>
          <Col xs={12} sm={8} md={9}>
            <SummaryWrapper>
              {/* {park.fullName}<br /> */}
              <h2>{park.name} {park.designation}</h2>
              <p>{park.description}<br /></p>
              {/* {park.parkCode}<br /> */}
              {/* {park.id}<br /> */}
              {/* {park.states} */}

              <MapDiagramWrapper>
                <MapDiagram highlighted={null} onHighlight={(terr) => setHighlight(terr)} states={park.states} />
              </MapDiagramWrapper>
              <a href="{park.url}">National Park Service’s {park.name} Resource.</a><br /><br />
            </SummaryWrapper>
          </Col>
          <Col xs={12} sm={4} md={3}>

          
            <Alerts alerts={alerts} />
            
          </Col>
        </Row>
      </Grid>
    </Description>

    <MapWrapper style={{ display : park.latLong != '' ? ' block' : ' none'}}>
      <MapContainer
        latLong={park.latLong}
        name={park.name}
        designation={park.designation}
        zoom={9}
      />
    </MapWrapper>

    <DirectionsWeatherWrapper>
    <Grid>
      <Row>
        <Col xs={12} sm={6} md={6}>
          <DirectionsWeather>
            <h3>Directions</h3>
            <p>{park.directionsInfo}</p>
            {/* {park.directionsUrl}<br />*/}
          </DirectionsWeather>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <DirectionsWeather>
            {/* {park.url}<br /> */}
          <h3>Weather</h3>
          <p>{park.weatherInfo}</p>
          {/* {park.latLong}<br /> */}
          </DirectionsWeather>
        </Col>
      </Row>
    </Grid>
    </DirectionsWeatherWrapper>

    <AccordionWrapper>
    { newsReleases !== undefined && newsReleases.length != 0 &&
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h3>News Releases</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <NewsReleases newsReleases={newsReleases} />
        </AccordionItemPanel>
      </AccordionItem>
      }

      { events !== undefined && events.length != 0 &&
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h3>Events</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>

        <Events events={events} />
        </AccordionItemPanel>
      </AccordionItem>
      }
      { visitorCenters !== undefined && visitorCenters.length != 0 &&
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
          <h3>Visitor Centers</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <VisitorCenters visitorCenters={visitorCenters} />
        </AccordionItemPanel>
      </AccordionItem>
      }

      { campgrounds !== undefined && campgrounds.length != 0 &&
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h3>Campgrounds</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>

        <Campgrounds campgrounds={campgrounds} />
        </AccordionItemPanel>
      </AccordionItem>
      }

      { articles !== undefined && articles.length != 0 &&
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h3>Articles</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>

        <Articles articles={articles} />
        </AccordionItemPanel>
      </AccordionItem>
      }


      { places !== undefined && places.length != 0 &&
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h3>Places</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>

        <Places places={places} />
        </AccordionItemPanel>
      </AccordionItem>
      }

      { people !== undefined && people.length != 0 &&
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h3>People</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>

        <People people={people} />
        </AccordionItemPanel>
      </AccordionItem>
      }




    </AccordionWrapper>
    

    <Footer pageTitle={park.name} subTitle={park.designation} stateCode={stateCode}></Footer>
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

const DirectionsWeatherWrapper = styled.div`
  font-family: Helvetica;
  padding: 35px 0;
  background-color: #1e1d1e;
  color: #ffffff;
  padding: 0;
  margin: 0;

  p {
   font-size: .9em;
  }
`
const DirectionsWeather = styled.div`
  font-family: Helvetica;
  color: #ffffff; 
  margin: 1em 0;

  p {
   font-size: .9em;
   padding: 13px;
  }
  h3 {
    color: #ffffff;
    margin: 0;
    padding: 10px 15px 10px 10px;
    line-height: 1;
    align-self: center;
  }
`


const Description = styled.div`
  font-family: Helvetica;
  padding: 15px 0 35px 0;
  margin: 0;
  background-color: #1e1d1e;
  color: #ffffff;
  a {
    color: #4c93d9;
  }
`


const AccordionWrapper = styled(Accordion)`
h3, h4 {
  display: inline;
}
h5 {
  display: inline;
  padding: 0 25px;
}
p {
}
ul {
  font-size: .8em;
  list-style-type: none;
  padding-left: 20px;
}
li {
  list-style-type: none;
  padding: 0 4px;
}
}`

const SummaryWrapper = styled.div`
  h2 {
    width: 100%;
    float: left;
  }

  p {
    width: 66%;
    float: left;
  }

  a {
    display: block;
    width: 100%;
    float: left;
  }

  ${'' /* ${SuperQuery().minWidth.md.css`
    margin: 20px;
  `} */}
`
const MapDiagramWrapper = styled.div`
  float: right;
    width: 32%;
`


const MapWrapper = styled.div`
  z-index: -10; 
  width: 100%;
  height: 60vh;
  
  ${SuperQuery().minWidth.md.css`
    height: 45vh;
  `}
`
