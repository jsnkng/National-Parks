import React, { useState } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../components/datastates'
import Masthead__Component from '../../../components/masthead'
import Footer__Component from '../../../components/footer'

import Park__Component from '../../../components/park'
// import MapLive__Component from '../../../components/maplive'

const Parks = props => {

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }

  
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)

let markers = []

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
    <ParksWrapper>
    <Masthead__Component 
      pageTitle={'National Park Service'} 
      pageStateCode={stateCode}
      pageSubTitle={'A State-by-State Guide'}
      pageSubSubTitle={states[stateCode][0]}
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
     
      <ParksContainer  onClick={handleBannerClick}>
        { parks.slice(0).map((item) => {
          markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description, stateCode:stateCode, parkCode:item.parkCode})
            return(
              <Park__Component 
                key={item.id} 
                data={item} 
                stateCode={stateCode}
              />
            )
          })
        }
      </ParksContainer>
       {/* <MapLive__Wrapper>
        <MapLive__Component
            latLong={states[stateCode][2]}
            name={states[stateCode][0]}
            designation="D"
            zoom={6}
            markers={markers}
            link={true}
          />
      </MapLive__Wrapper> */}
      <Footer__Component
        pageTitle={'National Park Service'} 
        pageStateCode={stateCode}
        pageSubTitle={'A State-by-State Guide'}
        pageSubSubTitle={states[stateCode][0]}
        pageSubSubSubTitle={''}
       />
    </ParksWrapper>
    </>
  )
}
  
Parks.getInitialProps = async (context) => {
  const {stateCode} = context.query
  const {origin}  = absoluteUrl(context.req)
  const stateResult = await fetch(`${origin}/api/state/${stateCode}`)
  const result = await stateResult.json()
  return result
}
  
export default Parks

const ParksWrapper = styled.div`
position:relative;
  padding: 50px 0 0 0;
  ${SuperQuery().minWidth.sm.css`
    padding: 80px 0 0 0;
  `}
`
const ParksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin: 0px;
`
const MapLive__Wrapper = styled.div`
  position:relative;
  height: 600px !important;
  z-index: 10;
`
const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  z-index: 2000;
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
