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
import FindAPark from '../components/findapark'

const Home = ({ parks, themeName, setThemeName, pageTransitionReadyToEnter }) => {
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()
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
    
      <FindAPark__Container>
        <FindAPark router={router} />
      </FindAPark__Container>
      <Content>
    
        <Row__Decorated>
        {
          parks.slice(0).map((item, i=0) => {
            i++
            return(
              <Col__Decorated xs={12} sm={6} md={i % 4 === 1 ? 7 : i % 4 === 2 ? 5 : i % 4 === 3 ? 5 : 7 } key={item.id}>
                <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${item.states.split(',')[0].toLowerCase()}/park/${item.parkCode}`} passHref>
                  <a>
                    <ParkBanner 
                      backgroundURL={item.images === undefined || item.images.length == 0 
                        ? "/noimage.jpg" 
                        : process.env.AWS_URI + item.images[0].url.replace(/[/:-\s]/g, '_')}
                      title={item.name}
                      subtitle={item.designation}
                      states={item.states}
                    />
                  </a>
                </Link>
              </Col__Decorated>
              
            )
          })
          }


        </Row__Decorated>
      </Content>
      <Footer router={router} themeName={themeName} setThemeName={setThemeName} />
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
    ${SuperQuery().minWidth.md.css`
      font-size: 1em;
      margin: 1em .25em 1em 1.5em;
    `} 
    ${SuperQuery().minWidth.lg.css`
      font-size: 1.375em;
      margin: 1em .25em 1em 2em;
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

const FindAPark__Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.gradient_one};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1000;
  padding: 3.5em 0 0 0;
  margin: 0 0 -4em 0;
`