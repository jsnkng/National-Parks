import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import territories from '../../../config/states'
import DesignationList from '../../../components/designationlist'

import LazyLoad, { forceCheck } from 'react-lazyload'
import ParkBanner from '../../../components/park'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const State = ({ parks, designation, ToggleTheme, manageHistory, pageTransitionReadyToEnter }) => {
  const pageTransitionDelayEnter = true
  const [loaded, setLoaded] = useState(false)
  const [highlighted, setHighlighted] = useState(null)
  // const markers = []
  
  // data.slice(0).map((item) => {
  //   markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description, stateCode:state_id, parkCode:item.parkCode})
  // })

  useEffect(() => {
    setLoaded(true)
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
          <title>National Park Service Guide to {designation}</title>
        </Head>
        <Header 
            park={designation}
            designation=''
            state=''
            stateCode=''
            manageHistory={manageHistory} 
          title='National Park Service'
          title__sub='A State-by-State Guide'
        />
        <Content>
        <Row__Decorated>
          {/* <Col__Decorated xs={12} sm={6} md={5}>
            <h1>{territories[stateCode][0]}</h1>
          </Col__Decorated> */}
          {
          parks.slice(0).map((item, i=0) => {
            i++
            return(
              <Col__Decorated xs={12} sm={6} md={i % 4 === 1 ? 7 : i % 4 === 2 ? 5 : i % 4 === 3 ? 5 : 7 } key={item.id}>
                <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${item.states.toLowerCase().split(',')[0]}/park/${item.parkCode}`} passHref>
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
        <Footer title="National Park Service" subtitle="A State-By-State Guide" ToggleTheme={ToggleTheme} manageHistory={manageHistory}  highlighted={highlighted} setHighlighted={setHighlighted} />
      </>
    )
  }
}


State.getInitialProps = async ({ req, query }) => {
  const {designation} = query
  const {origin}  = absoluteUrl(req)
  const stateResult = await fetch(`${origin}/api/designation/${designation}`)
  const result = await stateResult.json()
  result.designation = designation
  console.log(result)
  return result
}

export default State


const Content = styled.main`
  position:relative;
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin: 3.5em 0 0 0;
  ${SuperQuery().minWidth.sm.css`
    margin: 3.75em 0 0 0;
  `}
  ${SuperQuery().minWidth.md.css`
    margin: 4em 0 0 0;
  `}
  h1 {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    padding: 2em .5em 0 0;
    text-align: right;
    font-size: 3em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -1.5px;
    margin: 0;
    border: none;
  }
  
`
const Row__Decorated = styled(Row)`
  width: 100%;
  padding: 0;
  margin:0;
`
const Col__Decorated = styled(Col)`
  position:relative;
  width: 100%;
  padding: 0;
`