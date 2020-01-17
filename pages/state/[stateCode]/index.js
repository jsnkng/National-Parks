import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import LazyLoad, { forceCheck } from 'react-lazyload'
import MapDiagram from '../../../components/mapdiagram'

import states from '../../../config/states'

import Header from '../../../components/header'
import Footer from '../../../components/footer'
import ParkBanner from '../../../components/park'

const State = ({ data, state_id, stateCode, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  const [loaded, setLoaded] = useState(false)
  const [highlighted, setHighlighted] = useState('')
  const [backgroundURL, setBackgroundURL] = useState('')
  const [backgroundIdx, setBackgroundIdx] = useState(Math.floor(Math.random()*(data.length)))
  // const [parks, setParks] = useState(data)
  // console.log(parks.splice(backgroundIdx,1))
  // setParks(parks.splice(backgroundIdx,1))
  const parks = data.slice()
  parks.splice(backgroundIdx,1)
  
  useEffect(() => {
    const url =  data[backgroundIdx].images === undefined || data[backgroundIdx].images.length == 0 
    ? '/noimage.jpg' 
    : process.env.AWS_URI + data[backgroundIdx].images[0].url.replace(/[/:-\s]/g, '_')
    setBackgroundURL(url)
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
          <title>National Park Service Guide to {states[stateCode][0]}</title>
        </Head>

        <Background backgroundURL={backgroundURL}>
        <BackgroundOverlay onClick={() => manageFuture("/state/[stateCode]/park/[parkCode]", `/state/${stateCode}/park/${data[backgroundIdx].parkCode}`)} />
        <BackgroundDetails onClick={() => manageFuture("/state/[stateCode]/park/[parkCode]", `/state/${stateCode}/park/${data[backgroundIdx].parkCode}`)} >
        
                <div className='background__title'>{data[backgroundIdx].name.replace(/&#333;/gi, "ō").replace(/&#257;/gi, "ā")} </div>
                <div className='background__subtitle'>{data[backgroundIdx].designation}</div>
             
                  <p className='background__description'>{data[backgroundIdx].description}</p>
              
        </BackgroundDetails> 
          
          

        <Header 
          title={states[stateCode][0]}
          title__sub=''
          manageHistory={manageHistory}
          manageFuture={manageFuture}
        />
        <Content>
        <Row__Decorated>
          {
          parks.slice(0).map((item, i=0) => {
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
        <FooterHome>
          <Footer themeName={themeName} setThemeName={setThemeName} />
        </FooterHome>
      </Background>
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
  margin-top: 86vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  ${'' /* margin: 14rem 0 0 0;
  ${SuperQuery().minWidth.md.css`
    margin: 15rem 0 0 0;
  `} */}
  ${'' /* ${SuperQuery().maxWidth.of('896px').and.landscape.css`
    margin: 0 0 4rem 0;
  `} */}

`
const Row__Decorated = styled(Row)`
  padding: 0;
`
const Col__Decorated = styled(Col)`
  padding: 0;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url( ${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index:10000; 


`
const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index:1;
  background-color: ${ ({ theme }) => theme.colors.overlay };
`
const BackgroundDetails = styled.div`
  position: absolute;
  top: 33vh;
  left: 2rem;
  color: ${({ theme }) => theme.colors.home_text};
  text-align: left;
  font-size: .75rem;
  text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
  z-index: 100;

  .background__title {
    font-size: 3rem;
    letter-spacing: -0.1rem;
    line-height: .96;
    font-weight: 700;
    margin: 0;
    padding: 0;
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().maxWidth.of('375px').css`
      font-size: 1.75rem;
    `}
   
    a {
      color: #fff;
      text-decoration: none !important;
    }
    z-index:10000;
  }
  .background__subtitle {
    font-size: 2.25rem;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.1rem;
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().maxWidth.of('375px').css`
      font-size: 1.25rem;
    `}

    z-index:10000;
  }
  .background__description {
    min-width: 275px;
    max-width: 600px;
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.2125;
    font-weight: 400;
    letter-spacing: -0.01rem;
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.home_text_shadow};

  }
`

const FooterHome = styled.div`
  z-index: 900;
  height: 3rem;

`

const Description = styled.div`
`
const MapDiagram__Wrapper = styled.div`

`