import React, {useState, useEffect } from 'react'
import Head from 'next/head'

import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import fetch from 'isomorphic-unfetch'

import Footer from '../components/footer'
import FindAPark from '../components/findapark'

const Home = ({ parks, themeName, setThemeName, pageTransitionReadyToEnter, manageFuture }) => {
  const [loaded, setLoaded] = useState(false)
  const [backgroundURL, setBackgroundURL] = useState('')
  console.log(parks)
  useEffect(() => {
      const url =  parks[0].images === undefined || parks[0].images.length == 0 
      ? '/noimage.jpg' 
      : process.env.AWS_URI + parks[0].images[0].url.replace(/[/:-\s]/g, '_')
      setBackgroundURL(url)
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  if (!loaded) {
    return null
  } else {
    return (
      <>
      <Head>
        <title>Explore America’s National Parks</title>
      </Head>
      <Content backgroundURL={backgroundURL}>
        <div className='overlay'></div>
        <FindAPark__Container>
          <FindAPark manageFuture={manageFuture} />
        </FindAPark__Container>
        
        <div className='backgroundInfo' onClick={() => manageFuture("/state/[stateCode]/park/[parkCode]", `/state/${parks[0].states.split(',')[0].toLowerCase()}/park/${parks[0].parkCode}`)}>
          <p>{parks[0].name}</p>
          <p>{parks[0].images[0].title}</p>
          <p>{parks[0].images[0].credit}</p>
        </div>
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

Home.pageTransitionDelayEnter = true

Home.getInitialProps = async ({ req, query }) => {
  const {origin}  = absoluteUrl(req)
  const park = await fetch(`${origin}/api/parks/aggregate`)
  const result = await park.json()
  return result
}

export default Home

const Content = styled.main`
  color: ${({ theme }) => theme.colors.text };
  background: url( ${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 2rem 0 0 1rem;

  ${SuperQuery().minWidth.sm.css`
    align-items: center;
    padding: 0;
  `}

  .backgroundInfo {
    font-size: .875rem;
    position: absolute;
    bottom: 4rem;
    left: 2rem;
  }
 .overlay {
   position: absolute;
   top: 0;
   left: 0;
   height: 100vh;
   width: 100vw;
   background-color: ${ ({ theme }) => theme.colors.trans_back };
 }
`
const FindAPark__Container = styled.div`
  ${SuperQuery().maxWidth.of('360px').css`
  `}
  ${SuperQuery().minWidth.sm.css`
    padding: 1.5rem 0 0 2rem;
  `}
  ${SuperQuery().minWidth.lg.css`
    padding: 1.5rem 0 0 2rem;
  `}
`
