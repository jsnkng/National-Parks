import React, {useState} from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'
import Masthead__Component from '../components/masthead';
import Footer__Component from '../components/footer'

const Home = props => {

  const [highlighted, setHighlight] = useState(null)
  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
       <meta name="theme-color" content="#ff6600" />
       <link rel="apple-touch-icon" href="/static/icon.png" />
       <meta name="apple-mobile-web-app-title" content="Hacker News" />
       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
       <meta name="apple-mobile-web-app-capable" content="yes" />
       <meta name="mobile-web-app-capable" content="yes" />
    </Head>
    
    <Masthead__Component 
      pageTitle={"National Park Service"} 
      pageStateCode={''}
      pageSubTitle={"A State-by-State Guide"}
      pageSubSubTitle={''}
      pageSubSubSubTitle={''}
      />
      <Content__Wrapper>
        <MapDiagram__Wrapper>
          <MapDiagram highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} states={'none'} />
        </MapDiagram__Wrapper>

        <TerritoryList__Wrapper>
          <TerritoryList highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} />
        </TerritoryList__Wrapper>
      </Content__Wrapper>
    <Footer__Component
      pageTitle={'National Park Service'} 
      pageStateCode={''}
      pageSubTitle={'A State-by-State Guide'}
      pageSubSubTitle={''}
      pageSubSubSubTitle={''}
      />
  </>
  )
}


export default Home

const Content__Wrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 52px 0 52px 0;
${SuperQuery().minWidth.sm.css`
  padding: 80px 0 80px 0;
`}
 
`
const MapDiagram__Wrapper = styled.div`
  margin: 2em 0 0 .5em;
  max-width: 800px;
  ${SuperQuery().minWidth.md.css`
    margin: 2em auto;
  `}

`
const TerritoryList__Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2em 1em 2em;
  max-width: 610px;
  ${SuperQuery().minWidth.md.css`
    max-width: 800px;
  `}
`
