import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import territories from '../../../config/states'

import LazyLoad, { forceCheck } from 'react-lazyload'
import ParkBanner from '../../../components/park'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const State = ({ data, state_id, stateCode, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
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
          <title>National Park Service Guide to {territories[stateCode][0]}</title>
        </Head>
        <Header 
          title={territories[stateCode][0]}
          title__sub=''
          manageHistory={manageHistory}
          manageFuture={manageFuture}
        />
        <Content>
        <Row__Decorated>
          {
          data.slice(0).map((item, i=0) => {
            i++
            return(
              <Col__Decorated xs={12} sm={6} md={i % 4 === 1 ? 5 : i % 4 === 2 ? 7 : i % 4 === 3 ? 7 : 5 } key={item.id}>
              <div onClick={() => manageFuture("/state/[stateCode]/park/[parkCode]", `/state/${stateCode}/park/${item.parkCode}`)}>
              <ParkBanner
                  backgroundURL={item.images === undefined || item.images.length == 0 
                    ? "/noimage.jpg" 
                    : process.env.AWS_URI + item.images[0].url.replace(/[/:-\s]/g, '_')}
                  title={item.name}
                  subtitle={item.designation}
                  states={item.states}
                  href="/state/[stateCode]/park/[parkCode]"
                  as={`/state/${stateCode}/park/${item.parkCode}`}

                /></div>
              </Col__Decorated>
            )
          })
          }
        </Row__Decorated>
        </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

State.pageTransitionDelayEnter = true

State.getInitialProps = async ({ req, query }) => {
  const {stateCode} = query
  const {origin}  = absoluteUrl(req)
  const stateResult = await fetch(`${origin}/api/state/${stateCode}`)
  const result = await stateResult.json()
  result.stateCode = stateCode
  return result
}

export default State

const Content = styled.main`
  position:relative;
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin: 4rem 0;
  ${SuperQuery().minWidth.md.css`
    margin: 5rem 0;
  `}
  ${SuperQuery().maxWidth.md.and.landscape.css`
    margin: 0 0 4rem 0;
  `}
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
