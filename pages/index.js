import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'

import ParkBanner from '../components/park'
import Header from '../components/header'
import Footer from '../components/footer'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'

const Home = ({ parks, ToggleTheme, manageHistory, pageTransitionReadyToEnter }) => {

  const [loaded, setLoaded] = useState(false)
  const [highlighted, setHighlighted] = useState(null)
// console.log(parks)
  useEffect(() => {
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  if (!loaded) {
    return null
  } else {
    return (
      <>
        <Head>
          <title>National Park Service</title>
        </Head>
        <Header 
          park='National Park Service'
          designation='A State-By-State Guide'
          state=''
          stateCode={''}
        />
        <Content>
        <Row>
    <Col__Decorated xs={12} sm={6} md={5}>
      
      <h1>Explore America’s National Parks</h1>
      <p>From sea to shining-sea, city to natural wonder, across purple mountains, and amber waves of grain</p>
      {/* <h2>A State-By-State Guide</h2> */}
      {/* <MapDiagram__Wrapper>
      <MapDiagram 
        className="mapdiagram" 
        territories={'none'} 
        highlighted={highlighted} 
        setHighlighted={setHighlighted} />
        </MapDiagram__Wrapper> */}
    </Col__Decorated>
    <Col__Decorated xs={12} sm={6} md={7}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[0].states.split(',')[0].toLowerCase()}/park/${parks[0].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[0].images.length !== 0 ? `${process.env.AWS_URI}${parks[0].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[0].name}
            subtitle={parks[0].designation}
            states={parks[0].states}
          />
        </a>
      </Link>
      </Col__Decorated>
      <Col__Decorated xs={12} sm={6} md={7}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[1].states.split(',')[0].toLowerCase()}/park/${parks[1].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[1].images.length !== 0 ? `${process.env.AWS_URI}${parks[1].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[1].name}
            subtitle={parks[1].designation}
            states={parks[1].states}
          />
        </a>
      </Link>
        </Col__Decorated>
      <Col__Decorated xs={12} sm={6} md={5}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[2].states.split(',')[0].toLowerCase()}/park/${parks[2].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[2].images.length !== 0 ? `${process.env.AWS_URI}${parks[2].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[2].name}
            subtitle={parks[2].designation}
            states={parks[2].states}
          />
        </a>
      </Link>
        </Col__Decorated>
       <Col__Decorated xs={12} sm={6} md={5}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[3].states.split(',')[0].toLowerCase()}/park/${parks[3].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[3].images.length !== 0 ? `${process.env.AWS_URI}${parks[3].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[3].name}
            subtitle={parks[3].designation}
            states={parks[3].states}
          />
        </a>
      </Link>
        </Col__Decorated>
      <Col__Decorated xs={12} sm={6} md={7}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[4].states.split(',')[0].toLowerCase()}/park/${parks[4].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[4].images.length !== 0 ? `${process.env.AWS_URI}${parks[4].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[4].name}
            subtitle={parks[4].designation}
            states={parks[4].states}
          />
        </a>
      </Link>
        </Col__Decorated>
      {/*<Col__Decorated xs={12} sm={6} md={6}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[5].states.split(',')[0].toLowerCase()}/park/${parks[5].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[5].images.length !== 0 ? `${process.env.AWS_URI}${parks[5].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[5].name}
            subtitle={parks[5].designation}
            states={parks[0].states}
          />
        </a>
      </Link>
        </Col__Decorated>*/}
    </Row>
          
          <Row>
            <Col xs={12} sm={7}><br /><br />
              <h2>Find A National Park By State</h2>
              
              <MapDiagram__Wrapper>
              <MapDiagram
                className="mapdiagram" 
                territories={'none'} 
                highlighted={highlighted} 
                setHighlighted={setHighlighted} />
                </MapDiagram__Wrapper>
            </Col>
            <Col xs={12} sm={5}>
              <TerritoryList 
                className="territorylist" 
                highlighted={highlighted} 
                setHighlighted={setHighlighted} />
            </Col> 
          </Row>
        </Content>
        <Footer ToggleTheme={ToggleTheme} manageHistory={manageHistory} />
      </>
    )
  }
}

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req)
  const parkResult = await fetch(`${origin}/api/parks/aggregate`)
  const result = await parkResult.json()
  return result
}

Home.pageTransitionDelayEnter = true

export default Home

const Content = styled.main`
  color: ${({ theme }) => theme.colors.text};
 background-color: ${({ theme }) => theme.colors.background};
  margin: 30px 0;
  ${SuperQuery().minWidth.md.css`
  margin: 84px 0;
  `}
  p {
    font-size: 1.25em;
    margin: 1em 3.75em 1em 2.4em;
  }
  h1 {
    display: block;
    font-size: 2em;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 2.25em 0 0 1.5em;
    ${'' /* ${SuperQuery().minWidth.md.css`
      margin: 5px 0 0 66px;
      font-size: 1.375em;
      line-height: 1;
      letter-spacing: -1.5px;
    `} */}
  }
  h2 {
    display: block;
    font-size: 1.875em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: -20px 0 0 48px;
    border: none;
    ${'' /* ${SuperQuery().minWidth.md.css`
      margin: 0 0 0 66px;
      line-height: 1.1;
      font-size: 1em;
      letter-spacing: -1px;
    `} */}
  }
`
const Col__Decorated = styled(Col)`
  padding: 0;
`
const MapDiagram__Wrapper = styled.div`
  padding: 2em 0 1em 1em;
`
