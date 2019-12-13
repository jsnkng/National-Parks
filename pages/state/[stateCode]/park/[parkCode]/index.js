import React, { useState, useEffect } from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion'

import Masthead__Component from '../../../../../components/masthead'
import SlideShow__Component from '../../../../../components/slideshow'
import Alerts__Component from '../../../../../components/alerts'
import NewsReleases__Component from '../../../../../components/newsreleases'
import Weather__Component from '../../../../../components/weather'
import Directions__Component from '../../../../../components/directions'
import VisitorCenters__Component from '../../../../../components/visitorcenters'
import Events__Component from '../../../../../components/events'
import Campgrounds__Component from '../../../../../components/campgrounds'
import Places__Component from '../../../../../components/places'
import People__Component from '../../../../../components/people'
import Articles__Component from '../../../../../components/articles'
import MapLive__Component from '../../../../../components/maplive'
import Footer__Component from '../../../../../components/footer'
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
  const [highlighted, setHighlight] = useState(null)

  console.log(park)

  return (
    <Container>
      
      <Masthead__Component pageTitle={park.name} subTitle={park.designation} stateCode={stateCode} />
  
      { park.images !== undefined && park.images.length != 0 &&
        <SlideShow__Component park={park} />
      }

      <Description__Wrapper>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12}>

              <Description__Component park={park} />

            </Col>
            <Col xs={12} sm={12} md={12}>
              { alerts !== undefined && alerts.length != 0 &&
                <Alerts__Component alerts={alerts} />
              }
              {/* <a href="{park.url}">National Park Service’s {park.name} Website.</a> */}
            </Col>
          </Row>
        </Grid>
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
     
      <MapLive__Wrapper style={{ display : park.latLong != '' ? ' block' : ' none'}}>

        <MapLive__Component
          latLong={park.latLong}
          name={park.name}
          designation={park.designation}
          zoom={9}
        />
      </MapLive__Wrapper>

      { park.directionsInfo !== undefined && park.directionsInfo.length != 0 || 
        park.weatherInfo !== undefined && park.weatherInfo.length != 0 ||
        visitorCenters !== undefined && visitorCenters.length != 0 &&
      <Directions__Wrapper>
        <Grid>
            <Row>
              <Col xs={12} sm={6} md={6}>
                { park.directionsInfo !== undefined && park.directionsInfo.length != 0 &&
                  <Directions__Component park={park} />
                }

                { park.weatherInfo !== undefined && park.weatherInfo.length != 0 &&
                  <Weather__Component park={park} />
                }
              </Col>
              <Col xs={12} sm={6} md={6}>
                { visitorCenters !== undefined && visitorCenters.length != 0 &&
                  <VisitorCenters__Component visitorCenters={visitorCenters} />
                }
              </Col>
            </Row>
          </Grid>
      </Directions__Wrapper>
      }
      <Accordion__Wrapper>
        <Accordion allowZeroExpanded={true}>
        
        { campgrounds !== undefined && campgrounds.length != 0 &&
        <AccordionItem>
          <AccordionItemHeading aria-level="3">
            <AccordionItemButton>

              Campgrounds

            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>

          <Campgrounds__Component campgrounds={campgrounds} />

          </AccordionItemPanel>
        </AccordionItem>
        }

        { articles !== undefined && articles.length != 0 &&
        <AccordionItem>
          <AccordionItemHeading aria-level="3">
            <AccordionItemButton>

              Articles

            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <Articles__Wrapper>
            <Articles__Component articles={articles} />
          </Articles__Wrapper>
          </AccordionItemPanel>
        </AccordionItem>
        }

        { places !== undefined && places.length != 0 &&
        <AccordionItem>
          <AccordionItemHeading aria-level="3">
            <AccordionItemButton>

              Places

            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>

          <Places__Component places={places} />

          </AccordionItemPanel>
        </AccordionItem>
        }

        { people !== undefined && people.length != 0 &&
        <AccordionItem>
          <AccordionItemHeading aria-level="3">
            <AccordionItemButton>

              People

            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>

          <People__Component people={people} />

          </AccordionItemPanel>
        </AccordionItem>
        }

        </Accordion>
      </Accordion__Wrapper>

      <Footer__Component pageTitle={park.name} subTitle={park.designation} stateCode={stateCode} />

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
  padding: 15px 0;
  margin: 0;
  background-color: #1e1d1e;
  color: #ffffff; 
  margin: 0;

  a {
    color: #4c93d9;
  }
`


const NewsReleases__Wrapper = styled.div`
  background-color: #1e1d1e;
  color: #ffffff; 
  margin: 0;
  padding: 20px 0;
  a {
    color: #4c93d9;
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
    color: #4c93d9;
    text-decoration: none;
  }
`
const Accordion__Wrapper = styled.div`
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
}
`
const VisitorCenters__Wrapper = styled.div`
  background-color: #1e1d1e;
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
const MapLive__Wrapper = styled.div`
  z-index: -10; 
  width: 100%;
  height: 60vh;
  
  ${SuperQuery().minWidth.md.css`
    height: 45vh;
  `}
`



const Directions__Wrapper = styled.div`
  background-color: #1e1d1e;
  padding: 15px 0 35px 0;
  margin: 0;
`

const Articles__Wrapper = styled.div`
  background-color: #1e1d1e;
  color: #ffffff; 
  margin: 0;
  padding: 20px 0;
  a {
    color: #4c93d9;
    text-decoration: none;
  }
  h3 {
    color: #ffffff;
  }
`