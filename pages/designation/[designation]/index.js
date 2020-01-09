import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'

import LazyLoad, { forceCheck } from 'react-lazyload'
import ParkBanner from '../../../components/park'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const Designations = ({ parks, designation, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory }) => {
  const [loaded, setLoaded] = useState(false)
  const router = useRouter()

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
          title={`${designation}s`}
          title__sub=''
          manageHistory={manageHistory}
        />
        <Content>
        <Row__Decorated>
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
      <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}

Designations.pageTransitionDelayEnter = true

Designations.getInitialProps = async ({ req, query }) => {
  const {designation} = query
  const {origin}  = absoluteUrl(req)
  const stateResult = await fetch(`${origin}/api/designation/${designation}`)
  const result = await stateResult.json()
  result.designation = designation
  return result
}

export default Designations


const Content = styled.main`
  position:relative;
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin: 4rem 0;
  ${SuperQuery().minWidth.md.css`
    margin: 4.5rem 0;
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
