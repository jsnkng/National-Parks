import React, {useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import Footer from '../components/footer'

const About = ({ themeName, setThemeName, pageTransitionReadyToEnter, manageHistory }) => {
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
          <title>Explore America’s National Parks</title>
        </Head>
        <Content>
          
        </Content>
        <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

About.pageTransitionDelayEnter = true

export default About

const Content = styled.main`
`
