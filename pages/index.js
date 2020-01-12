import React, {useState, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import Footer from '../components/footer'
import FindAPark from '../components/findapark'

const Home = ({ themeName, setThemeName, pageTransitionReadyToEnter, manageFuture }) => {
  const [loaded, setLoaded] = useState(false)
 
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
        <title>Explore America’s National Parks</title>
      </Head>
      <Content>
        <FindAPark__Container>
          <img className='logo' src='/us-nps.png' width='90' alt='National Parks Guide' />
          <FindAPark manageFuture={manageFuture} />
        </FindAPark__Container>
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

Home.pageTransitionDelayEnter = true

export default Home
const Content = styled.main`
  color: ${({ theme }) => theme.colors.text };
  margin: 0;
  padding: 0;
  img.logo {
    position: absolute;
    top: 1.125rem;
    right: 1.125rem;
    width: 50px;
    ${SuperQuery().minWidth.sm.css`
      width: 90px;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 100px;
    `}
    ${SuperQuery().minWidth.lg.css`
      width: 120px;
    `}
  }
  h2 {
    margin: 0 2.25rem 2rem .5rem;
    ${SuperQuery().maxWidth.of('360px').css`
      margin: .25rem .25rem 0 .5rem;
    `}
    ${SuperQuery().minWidth.sm.css`
      margin: 1rem 0 0 .25rem;
    `}
  }
`
const FindAPark__Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  color: ${ ({ theme }) => theme.colors.text };
  height: 100vh;
  padding: 4rem 0 0 0;
  ${SuperQuery().maxWidth.of('360px').css`
    padding: 0 0 0 0;
  `}
  ${SuperQuery().minWidth.sm.css`
    padding: 6rem 0 0 0;
  `}
  ${SuperQuery().minWidth.lg.css`
    padding: 10rem 0 0 0;
  `}
`
