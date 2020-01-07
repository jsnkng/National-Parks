import React, {useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

import Footer from '../components/footer'
import FindAPark from '../components/findapark'

const About = ({ parks, themeName, setThemeName, pageTransitionReadyToEnter }) => {
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
      
    
      <Content>
    
        <FindAPark__Container>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link> 
        <FindAPark router={router} />
      </FindAPark__Container>
       
      </Content>
      <Footer router={router} themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

// About.getInitialProps = async ({ req, query }) => {
//   const { origin } = absoluteUrl(req)
//   const parkResult = await fetch(`${origin}/api/parks/aggregate`)
//   const result = await parkResult.json()
//   return result
// }

About.pageTransitionDelayEnter = true

export default About

const Content = styled.main`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0;
  img.logo {
    position: absolute;
    top: 1.125em;
    right: 1.125em;
    cursor: pointer;
    border: none;
    margin: 0;
    padding: 0;
    width: 80px;
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
    margin: 0 1em 0 .5em;
    ${SuperQuery().minWidth.sm.css`
      margin: .5em 0 0 .25em;
    `}
  }
  
`

const FindAPark__Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.gradient_one};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1000;
  padding: .5em 0 0 0;
  margin: 0 0 -4em 0;
  height: 100vh;
  
  ${SuperQuery().minWidth.sm.css`
    padding: 4.75em 0 0 0;
  `}
`

