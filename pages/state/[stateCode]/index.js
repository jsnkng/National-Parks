import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../config/states'

import LazyLoad, { forceCheck } from 'react-lazyload'
import ParkBanner from '../../../components/park'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const State = ({ data, state_id, ToggleTheme, pageTransitionReadyToEnter, stateCode }) => {
  const pageTransitionDelayEnter = true
  const [loaded, setLoaded] = useState(false)
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
          <title>National Park Service Guide to {states[stateCode][0]}</title>
        </Head>
        <Header 
            park='National Park Service'
            designation='A State-By-State Guide'
            state={states[stateCode][0]}
            stateCode={stateCode}
        />
        <Content>
        <Row>
          {
          data.slice(0).map((item) => {
            return(
              <Col__Decorated xs={12} sm={6} lg={4}>
                <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${stateCode}/park/${item.parkCode}`} passHref key={item.id}>
                  <a>
                    <ParkBanner 
                      backgroundURL={item.images === undefined || item.images.length == 0 
                        ? "/noimage.jpg" 
                        : process.env.AWS_URI + item.images[0].url.replace(/[/:-\s]/g, '_')}
                      title={item.name}
                      subtitle={item.designation}
                    />
                  </a>
                </Link>
              </Col__Decorated>
              
            )
          })
          }
        </Row>
        </Content>
        <Footer ToggleTheme={ToggleTheme} />
      </>
    )
  }
}


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
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin: 70px 0;
  ${SuperQuery().minWidth.md.css`
    margin: 88px 0;
  `}
`
const Col__Decorated = styled(Col)`
  width: 100%;
  padding: 0;
`