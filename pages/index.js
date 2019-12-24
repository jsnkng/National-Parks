import React, {useState} from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'
import Masthead__Component from '../components/masthead';
import Footer__Component from '../components/footer'

const Home = props => {

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }

  
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
       <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script>
    </Head>
    
    <Masthead__Component 
      pageTitle={"National Park Service"} 
      pageStateCode={''}
      pageSubTitle={"A State-by-State Guide"}
      pageSubSubTitle={'United States'}
      pageSubSubSubTitle={''} 
      pageLinkState={false}
      />
     <Spinner className={isSpinnerVisible ? 'show' : 'hide'}>
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        Loading
        </div>
      </Spinner>
      <Content__Wrapper>
        <MapDiagram__Wrapper>
          <MapDiagram highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} states={'none'} handleBannerClick={handleBannerClick} />
        </MapDiagram__Wrapper>

        <TerritoryList__Wrapper >
          <TerritoryList highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} handleBannerClick={handleBannerClick} />
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
  padding: 90px 0 80px 0;
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

const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 400;
  background-color: ${props => props.theme.colors.spinner};
  color: ${props => props.theme.colors.text};
  font-size: .7em;
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`
