import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ParkBanner from '../components/park'
import Header from '../components/header'
import Footer from '../components/footer'

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
          park='Explore America'
          designation='US National Parks Guide'
          state=''
          stateCode={''}
          title='National Park Service'
          title__sub='A State-by-State Guide'
        />
        <Content>
        <Row__Decorated>
    <Col__Decorated xs={12} sm={6} md={5}>
      
      {/* <h1>Explore America’s National Parks</h1> */}
      <h2>O beautiful for spacious skies,
          For amber waves of grain,
          For purple mountain majesties
          Above the fruited plain!
          America! America!</h2>
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
    </Row__Decorated>
    
   
        </Content>
        <Footer ToggleTheme={ToggleTheme} manageHistory={manageHistory} highlighted={highlighted} setHighlighted={setHighlighted} />
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
    margin: 3.5em 0 0 0;
  ${SuperQuery().minWidth.sm.css`
    margin: 3.75em 0 0 0;
  `}
  ${SuperQuery().minWidth.md.css`
    margin: 4em 0 0 0;
  `}
  
  p {
    font-size: 1.25em;
    margin: 1em 3.75em 1em 2.4em;
  }
  
  h2 {
    display: block;
    font-size: 1.875em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: .75em .25em 1em 1.5em;
    border: none;
    ${SuperQuery().minWidth.sm.css`
      margin: 1.75em 0 1.25em 1em;
      font-size: 1.5em;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5em;
      margin: 2em 1em 0 1em;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 1.75em;
      margin: 2em 1em 0 1.25em;
    `}
  }
  
  h3 {
    text-align: center;
    width: 100%;
    font-size: 2em;
    line-height: .875;
    font-weight: 200;
    letter-spacing: -1px;
    margin: .75em auto;
    
  }



`
const Row__Decorated = styled(Row)`
  width: 100%;
  padding: 0;
  margin:0;
`
const Col__Decorated = styled(Col)`
  width: 100%;
  padding: 0;
`
const MapDiagram__Wrapper = styled.div`
`
