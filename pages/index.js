import React, {useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import Footer from '../components/footer'
import FindAPark from '../components/findapark'

const Home = ({ parks, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  const [limit, setLimit] = useState(6)
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
        <FindAPark__Container>
          <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          <FindAPark manageFuture={manageFuture} />
        </FindAPark__Container>
          {/* <Row__Decorated>
          {
            parks.slice(0,limit).map((item, i=0) => {
              i++
              return(
                <Col__Decorated xs={12} sm={6} md={i % 4 === 1 ? 7 : i % 4 === 2 ? 5 : i % 4 === 3 ? 5 : 7 } key={item.id}>
                  <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${item.states.split(',')[0].toLowerCase()}/park/${item.parkCode}`} passHref>
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

      <Row__Decorated>
        <button className={limit >= parks.length ? "hidden btn__load-more" : "btn__load-more" } onClick={() => setLimit(limit + 2)}>Load More</button>
      </Row__Decorated>*/}
      </Content>
      <Footer themeName={themeName} setThemeName={setThemeName} />
      </>
    )
  }
}
// Home.getInitialProps = async ({ req, query }) => {
//   const { origin } = absoluteUrl(req)
//   const parkResult = await fetch(`${origin}/api/parks/aggregate`)
//   const result = await parkResult.json()
//   return result
// }

Home.pageTransitionDelayEnter = true

export default Home
const Content = styled.main`
  color: ${({ theme }) => theme.colors.text };
  background: ${({ theme }) => theme.colors.background};
  height: 100vh;
  margin: 0;
  padding: 0;
  ${({ theme }) => console.log('lo', theme)};
  img.logo {
    position: absolute;
    top: 1.125rem;
    right: 1.125rem;
    width: 70px;
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
    margin: 0 1.25rem 0 .5rem;
    ${SuperQuery().minWidth.sm.css`
      margin: 1rem 0 0 .25rem;
    `}
  }
  
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`

const Col__Decorated = styled(Col)`
  padding: 0;
  padding: 0;
`
const FindAPark__Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  color: ${ ({ theme }) => theme.colors.text };
  z-index: 1000;
  height: 100vh;
    padding: 2rem 0 0 0;
  
  ${SuperQuery().minWidth.sm.css`
    padding: 6rem 0 0 0;
  `}

  ${SuperQuery().minWidth.lg.css`
    padding: 10rem 0 0 0;
  `}

  ${'' /* ${ ({ theme }) => SuperQuery(theme.flexboxgrid.mybreakpoints).minWidth.sml.css`
    padding: 12rem 0 0 0;
  `} */}
`

