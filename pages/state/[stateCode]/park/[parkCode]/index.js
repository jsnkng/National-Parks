import React, { useState, useEffect } from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import { useRouter } from 'next/router'
import { Carousel } from 'react-responsive-carousel';
import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query';

import Masthead from '../../../../../components/masthead'
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

  return (
    <>
    <Masthead pageTitle={park.name} subTitle={park.designation} stateCode={stateCode}></Masthead>
     {/* <ResponsiveImage backgroundURL={park.images[0].url === undefined || park.images[0].url.length == 0 ? "" : park.images[0].url  } height="450px" /><br /><br /> */}
   
    <CarouselStyled showArrows={true} showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false}>
      { park.images.slice(0).map((item) => {
          return(
            <ResponsiveImage key={item.id} backgroundURL={item.url}>
              <h4>{item.title}</h4>
              {/* <h5>{item.caption}</h5> */}
            </ResponsiveImage>
          )
        })
      }
    </CarouselStyled>
    <Description>
      <Grid>
        <Row>
          <Col xs={12} sm={8} md={9}>
            {/* {park.fullName}<br /> */}
            <h2>{park.name} {park.designation}</h2>
            <p>{park.description}<br /></p>
            <a href="{park.url}">National Park Service’s {park.name} Resource.</a><br /><br />
            {/* {park.parkCode}<br /> */}
            {/* {park.id}<br /> */}
            {park.states}
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
        zoom={10}
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
          {/* <ResponsiveImage backgroundURL={park.images[1].url === undefined || park.images[1].url.length == 0 ? "" : park.images[1].url  } height="250px" /><br /><br /> */}
          </DirectionsWeather>
        </Col>
      </Row>
    </Grid>
    </DirectionsWeatherWrapper>

    <VisitorCenters visitorCenters={visitorCenters} />
    <NewsReleases newsReleases={newsReleases} />
    <Events events={events} />
    <Campgrounds campgrounds={campgrounds} />
    <Places places={places} />
    <Articles articles={articles} />
    <People people={people} />

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


const ResponsiveImage = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0;
  width: 100%;
  height: 65vh;
  max-width: 100%;

  ${SuperQuery().minWidth.md.css`
    height: 60vw;
    max-height: 72vh;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 70vw;
    max-height: 82vh;
  `}
  h4 {
    position: absolute;
    bottom: 35px;
    right: 20px;
    color: #ffffff;
    margin: 0;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.9);
  }
  h5 {
    position: absolute;
    bottom: 15px;
    right: 20px;
    color: #ffffff;
    margin: 0;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.9);
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


const MapWrapper = styled.div`
  width: 100%;
  height: 60vw !important;
  max-width: 100%;
  max-height: 400px !important;
  z-index: -10;
`

const CarouselStyled = styled(Carousel)`
  margin-top: -80px;

  ${SuperQuery().minWidth.md.css`
    margin-top: -90px;
  `}
  ${SuperQuery().minWidth.lg.css`
    margin-top: -100px;
  `}
  .carousel .control-arrow, .carousel.carousel-slider .control-arrow {
    -webkit-transition: all 0.25s ease-in;
    -moz-transition: all 0.25s ease-in;
    -ms-transition: all 0.25s ease-in;
    -o-transition: all 0.25s ease-in;
    transition: all 0.25s ease-in;
    opacity: 0.4;
    filter: alpha(opacity=40);
    position: absolute;
    z-index: 2;
    top: 20px;
    background: none;
    border: 0;
    font-size: 32px;
    cursor: pointer; 
  }
  .carousel .control-arrow:hover {
    opacity: 1;
    filter: alpha(opacity=100); }
  .carousel .control-arrow:before, .carousel.carousel-slider .control-arrow:before {
    margin: 0 5px;
    display: inline-block;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    content: ''; }
  .carousel .control-disabled.control-arrow {
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: inherit;
    display: none; }
  .carousel .control-prev.control-arrow {
    left: 0; 
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #fff; 
  }
  .carousel .control-next.control-arrow {
    right: 0; 
  }
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #fff; 
  }
  .carousel {
    position: relative;
    width: 100%; 
  }
  .carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; 
  }
  .carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none; 
  }
  .carousel .carousel {
    position: relative; 
  }
  .carousel .control-arrow {
    outline: 0;
    border: 0;
    background: none;
    top: 50%;
    margin-top: -13px;
    font-size: 18px; 
  }
  .carousel .thumbs-wrapper {
    margin: 20px;
    overflow: hidden; 
  }
  .carousel .thumbs {
    -webkit-transition: all 0.15s ease-in;
    -moz-transition: all 0.15s ease-in;
    -ms-transition: all 0.15s ease-in;
    -o-transition: all 0.15s ease-in;
    transition: all 0.15s ease-in;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    position: relative;
    list-style: none;
    white-space: nowrap; 
  }
  .carousel .thumb {
    -webkit-transition: border 0.15s ease-in;
    -moz-transition: border 0.15s ease-in;
    -ms-transition: border 0.15s ease-in;
    -o-transition: border 0.15s ease-in;
    transition: border 0.15s ease-in;
    display: inline-block;
    width: 80px;
    margin-right: 6px;
    white-space: nowrap;
    overflow: hidden;
    border: 3px solid #fff;
    padding: 2px; 
  }
  .carousel .thumb:focus {
    border: 3px solid #ccc;
    outline: none; 
  }
  .carousel .thumb.selected, .carousel .thumb:hover {
    border: 3px solid #333; 
  }
  .carousel .thumb img {
    vertical-align: top; 
  }
  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden; 
  }
  .carousel.carousel-slider .control-arrow {
    top: 0;
    color: #fff;
    font-size: 26px;
    bottom: 0;
    margin-top: 0;
    padding: 5px; 
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: rgba(0, 0, 0, 0.2); 
  }
  .carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    -webkit-transition: height 0.15s ease-in;
    -moz-transition: height 0.15s ease-in;
    -ms-transition: height 0.15s ease-in;
    -o-transition: height 0.15s ease-in;
    transition: height 0.15s ease-in; 
  }
  .carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex; 
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column; 
  }
  .carousel .slider-wrapper.axis-vertical {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex; 
  }
  .carousel .slider-wrapper.axis-vertical .slider {
    -webkit-flex-direction: column;
    flex-direction: column; 
  }
  .carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%; 
  }
  .carousel .slider.animated {
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out; 
  }
  .carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    text-align: center;
    background: #000; 
  }
  .carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0; 
  }
  .carousel .slide iframe {
    display: inline-block;
    width: calc(100% - 80px);
    margin: 0 40px 40px;
    border: 0; 
  }
  .carousel .slide .legend {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    position: absolute;
    bottom: 40px;
    left: 50%;
    margin-left: -45%;
    width: 90%;
    border-radius: 10px;
    background: #000;
    color: #fff;
    padding: 10px;
    font-size: 12px;
    text-align: center;
    opacity: 0.25;
    -webkit-transition: opacity 0.35s ease-in-out;
    -moz-transition: opacity 0.35s ease-in-out;
    -ms-transition: opacity 0.35s ease-in-out;
    -o-transition: opacity 0.35s ease-in-out;
    transition: opacity 0.35s ease-in-out; 
  }
  .carousel .control-dots {
    position: absolute;
    bottom: 0;
    margin: 10px 0;
    text-align: center;
    width: 100%; 
  }
  @media (min-width: 960px) {
    .carousel .control-dots {
      bottom: 0; 
    } 
  }
  .carousel .control-dots .dot {
    -webkit-transition: opacity 0.25s ease-in;
    -moz-transition: opacity 0.25s ease-in;
    -ms-transition: opacity 0.25s ease-in;
    -o-transition: opacity 0.25s ease-in;
    transition: opacity 0.25s ease-in;
    opacity: 0.3;
    filter: alpha(opacity=30);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
    background: #fff;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    cursor: pointer;
    display: inline-block;
    margin: 0 8px; 
  }
  .carousel .control-dots .dot.selected, .carousel .control-dots .dot:hover {
    opacity: 1;
    filter: alpha(opacity=100); 
  }
  .carousel .carousel-status {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    font-size: 10px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
    color: #fff; 
  }
  .carousel:hover .slide .legend {
    opacity: 1; 
  }
`