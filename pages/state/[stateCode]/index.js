import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../config/datastates'

import LazyLoad, { forceCheck } from 'react-lazyload'
import ParkBanner from '../../../components/park'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const State = props => {
  const [loaded, setLoaded] = useState(false)
  const markers = []
  
  props.data.slice(0).map((item) => {
    markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description, stateCode:props.state_id, parkCode:item.parkCode})
  })
  const pageTransitionDelayEnter = true

  useEffect(() => {
    setLoaded(true)
    props.pageTransitionReadyToEnter()
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
          <title>National Park Service Guide to {states[props.stateCode][0]}</title>
        </Head>
        <Header 
            park='National Park Service'
            designation='A State-By-State Guide'
            state={states[props.stateCode][0]}
            stateCode={props.stateCode}
        />
        <Content>
          {
          props.data.slice(0).map((item) => {
            return(
              <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${props.state_id}/park/${item.parkCode}`} passHref key={item.id}>
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
            )
          })
          }
        </Content>
        <Footer
            setTheme={props.setTheme}
        />
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
  margin-top: 70px;
  ${SuperQuery().minWidth.md.css`
    margin-top: 88px;
  `}
`