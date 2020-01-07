import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'

import Header from '../components/header'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import ThemeSwitcher from '../components/themeswitcher'

const State = ({ parks, designation, themeName, setThemeName, pageTransitionReadyToEnter }) => {
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
          <title>National Park Service Guide to {designation}</title>
        </Head>
        <Header 
            park=''
            designation=''
            state=''
            stateCode=''
          title='About'
          title__sub=''
          title_as='about'
          title_href='about'
        />
        <Content>
          <Col__Decorated xs={12}>


      <ThemeSwitcher__Container>
        <ThemeSwitcher id='themeSwitcher' themeName={themeName} setThemeName={setThemeName} />
      </ThemeSwitcher__Container>
          </Col__Decorated> 
   
      <Copyright__Container>
        <Copyright />
      </Copyright__Container>
        </Content>
      </>
    )
  }
}

State.pageTransitionDelayEnter = true

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
  padding: 3.5em 0 3.5em 0;
  ${SuperQuery().minWidth.sm.css`
    margin: 3.75em 0 0 0;
  `}
  ${SuperQuery().minWidth.md.css`
    margin: 4em 0 0 0;
  `}
  h3 {
    display: block;
    color: ${({ theme }) => theme.colors.text};
    padding: 2em .5em ;
    text-align: left;
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

const Copyright__Container = styled.div`
  position: relative;
  top: 120px;
  left: 120px;
  z-index: 1000;
`
const ThemeSwitcher__Container = styled.div`
  position: relative;
  top: 200px;
  left: 120px;
  width: 52px;
  height: 28px;
  z-index: 1000;
`