import React, {useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'

import states from '../config/states'
import ParkBanner from '../components/park'
import Header from '../components/header'
import Footer from '../components/footer'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'
import DesignationList from '../components/designationlist'

const Home = ({ parks, ToggleTheme, manageHistory, pageTransitionReadyToEnter }) => {
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)
  const [highlighted, setHighlighted] = useState('')
console.log('h', highlighted)
  const handleChange = e => {
    router.push(e.target.value)
  }

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
      <Col__Decorated xs={12} sm={12} md={4}>
        {/* <h1>Explore America’s National Parks</h1> */}
        {/* <h2>O beautiful for spacious skies,<br />
            For amber waves of grain,<br />
            For purple mountain majesties<br />
            Above the fruited plain!<br />
            America! America!</h2> */}
            <h3>Find a Park</h3>
        <select value={`/state/${highlighted}/`} onChange={(e) => handleChange(e)}>
        <option>By State</option>
        <option>–––––––––––––––––</option>
        
        { Object.entries(states).map(([key, value]) => {
          return ( 
            <option 
              value={`/state/${key}/`} 
              key={key} >
                {value[0]}
            </option>
          )
        })}
      </select>
        <select value='' onChange={(e) => handleChange(e)}>
        <option>By Designation</option>
        <option>–––––––––––––––––</option>
        <option 
      value='/designation/National%20Monument/'>
          National Monument
      </option>
      <option 
      value='/designation/National%20Park/'>
        National Park
      </option>
      <option 
      value='/designation/National%20Historic%20Park/'>
        National Historic Park
      </option>
      <option 
      value='/designation/National%20Historical%20Park/'>
        National Historical Park
      </option>
      <option 
      value='/designation/National%20Historic%20Site/'>
        National Historic Site
      </option>
      <option 
      value='/designation/Park/'>
        Park
      </option>
      <option 
      value='/designation/National%20Military%20Park/'>
        National Military Park
      </option>
      <option 
      value='/designation/National%20Battlefield/'>
        National Battlefield
      </option>
      <option 
      value='/designation/National%20Memorial/'>
        National Memorial
      </option>
      <option 
      value='/designation/National%20Heritage%20Corridor/'>
        National Heritage Corridor
      </option>
      <option 
      value='/designation/National%20Historical%20Reserve/'>
        National Historical Reserve
      </option>
      <option 
      value='/designation/National%20Recreation%20Area/'>
        National Recreation Area
      </option>
      <option 
      value='/designation/National%20Heritage%20Area/'>
        National Heritage Area
      </option>
      <option 
      value='/designation/Part%20of%20Statue%20of%20Liberty%20National%20Monument/'>
        Part of Statue of Liberty National Monument
      </option>
      <option 
      value='/designation/National%20Monument%20%26%20Preserve/'>
        National Monument & Preserve
      </option>
      <option 
      value='/designation/National%20Preserve/'>
        National Preserve
      </option>
      <option 
      value='/designation/Cultural%20Heritage%20Corridor/'>
        Cultural Heritage Corridor
      </option>
      <option 
      value='/designation/National%20Historic%20Trail/'>
        National Historic Trail
      </option>
      <option 
      value='/designation/National%20Scenic%20Trail/'>
        National Scenic Trail
      </option>
      <option 
      value='/designation/National%20Geologic%20Trail/'>
        National Geologic Trail
      </option>
      <option 
      value='/designation/Ecological%20%26%20Historic%20Preserve/'>
        Ecological & Historic Preserve
      </option>
      <option 
      value='/designation/National%20Seashore/'>
        National Seashore
      </option>
      <option 
      value='/designation/National%20Recreational%20River/'>
        National Recreational River
      </option>
      <option 
      value='/designation/National%20River%20%26%20Recreation%20Area/'>
        National River & Recreation Area
      </option>
      <option 
      value='/designation/National%20Scenic%20Riverways/'>
        National Scenic Riverways
      </option>
      <option 
      value='/designation/National%20Scenic%20Riverway/'>
        National Scenic Riverway
      </option>
      <option 
      value='/designation/Wild%20%26%20Scenic%20River/'>
        Wild & Scenic River
      </option>
      <option 
      value='/designation/National%20River/'>
        National River
      </option>
      <option 
      value='/designation/National%20Lakeshore/'>
        National Lakeshore
      </option>
      <option 
      value='/designation/International%20Historic%20Site/'>
        International Historic Site
      </option>
      <option 
      value='/designation/International%20Park/'>
        International Park
      </option>
      </select>
    </Col__Decorated>
    <Col__Decorated xs={12} sm={12} md={8}>
      <MapDiagram__Wrapper>
        <MapDiagram
        className="mapdiagram" 
        territories={'none'} 
        highlighted={highlighted} 
        setHighlighted={setHighlighted} />
      </MapDiagram__Wrapper>
    </Col__Decorated>
  </Row__Decorated> 

  <Row__Decorated>
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
      <Col__Decorated xs={12} sm={6} md={5}>
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
       <Col__Decorated xs={12} sm={6} md={7}>
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
        <Col__Decorated xs={12} sm={6} md={5}>
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
      </Col__Decorated>
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
    font-size: 1.5em;
    line-height: 1.4;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 1em .25em 1.5em 1em;
    border: none;
    font-style: italic;
    ${SuperQuery().minWidth.md.css`
      font-size: 1em;
      margin: 1em .25em 1em 1.5em;
    `} 
    ${SuperQuery().minWidth.lg.css`
      font-size: 1.375em;
      margin: 1em .25em 1em 2em;
    `} 
  }
  
  h3 {
    text-align: center;
    width: 100%;
    font-size: 2em;
    line-height: .875;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 1em auto 0;
    
    ${SuperQuery().minWidth.md.css`
      text-align: left;
      font-size: 1.25em;
      margin: .75em 1.25em;
    `} 
    ${SuperQuery().minWidth.lg.css`
      text-align: left;
      font-size: 1.5em;
      margin: 1.25em 1.75em .75em 1.75em;
    `} 
  }

  select {
    display: block;
    font-size: 1.75em;
    outline: none;
    border: none;
    margin: .75em auto .25em auto;
    width: 60%;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.25em;
      margin: .75em 1.25em;
      
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 1.5em;
      margin: .25em 1.75em .75em 1.75em;
      
    `}
  }

`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
const Col__Decorated = styled(Col)`
  position: relative;
  padding: 0;
`
const MapDiagram__Wrapper = styled.div`
  padding: 1em 1em 2em 2em;
  ${SuperQuery().minWidth.md.css`
    padding: 2em;
  `}

`
