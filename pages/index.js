import React, {useState, useEffect } from 'react'
import Head from 'next/head'
import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import { forceCheck } from 'react-lazyload'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DesignationList from '../components/designationlist'
import StateList from '../components/statelist'
import MapDiagram from '../components/elements/mapdiagram'

import territories from '../config/states'

const Home = ({ parks, themeName, setThemeName, pageTransitionReadyToEnter, manageFuture }) => {
  const [loaded, setLoaded] = useState(false)
  const [backgroundURL, setBackgroundURL] = useState('')
  const [highlighted, setHighlighted] = useState('')

  const handleStateChange = (e) => {
    e.preventDefault()
    manageFuture(`/state/[stateCode]`, e.target.value)
  }
  const handleDesignationChange = (e) => {
    e.preventDefault()
    manageFuture(`/designation/[designation]`, e.target.value)
  }
  const handleClick = () => {
    manageFuture(
      `/state/[stateCode]/park/[parkCode]`, 
      `/state/${parks[0].states.split(',')[0].toLowerCase()}/park/${parks[0].parkCode}`, 
      parks[0].designation)
  }

  useEffect(() => {
    const url =  parks[0].images === undefined || parks[0].images.length == 0 
      ? '/noimage.jpg' 
      : process.env.AWS_URI + parks[0].images[0].url.replace(/[/:-\s]/g, '_')
    setBackgroundURL(url)
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
        <title>National Park Service: A State-by-State Guide</title>
        <meta property="og:title" key="ogtitle" content="National Park Service: A State-by-State Guide" />
        <meta property="og:type" key="ogtype" content="website" />
        <meta property="og:url" key="ogurl" content="https://www.natparguides.com" />
        <meta property="og:image" key="ogimage" content="https://www.natparguides.com/natparguides_ogimage.jpg" />
        <meta name="description" key="description" content="Every one of America’s National Park in an easily navigated photo-rich digital guide." />
      </Head>
      <Background backgroundURL={backgroundURL}>
        <BackgroundOverlay />
        <Content>
        <a href="/"><div className='top__logo'></div></a>

          <Tabs>
            <h1>Explore America’s<br /> National Parks</h1>
            <TabList>
              <Tab>By&nbsp;Map</Tab>
              <Tab>By&nbsp;Designation</Tab>
              <Tab>By&nbsp;State</Tab>
            </TabList>

            <TabPanel>
              <Grid__FindAPark fluid>
                <Row className='reversible'>
                  <Col__Decorated xs={12} smOffset={1} sm={10} mdOffset={0} md={4} lg={3}>
                    
                    <label htmlFor='state'>By State</label>
                    <select id='state' value={`/state/${highlighted}/`} onChange={handleStateChange.bind(this)}>
                      <option label='By State'>By State</option>
                      { Object.entries(territories).map(([key, value]) => {
                        return ( 
                          <option label={territories[key][0]} value={`/state/${key}/`} 
                            key={key}>{territories[key][0]}</option>
                        )
                      })}
                    </select>

                    <label htmlFor='designation'>By Designation</label>
                    <select id='designation' value='' onChange={handleDesignationChange.bind(this)}>
                      <option label='By Designation'>By Designation</option>
                      <option label='National Battlefields' value='/designation/National%20Battlefield/'>National Battlefields</option>
                      <option label='National Geologic Trails' value='/designation/National%20Geologic%20Trail/'>National Geologic Trails</option>
                      <option label='National Heritage Areas' value='/designation/National%20Heritage%20Area/'>National Heritage Areas</option>
                      <option label='National Heritage Corridors' value='/designation/National%20Heritage%20Corridor/'>National Heritage Corridors</option>
                      <option label='National Historical Parks' value='/designation/National%20Historical%20Park/'>National Historical Parks</option>
                      <option label='National Historical Park & Ecological Preserve' value='/designation/National%20Historical%20Park%20%26%20Ecological%20Preserve/'>National Historical Park & Ecological Preserve</option>
                      <option label='National Historical Reserves' value='/designation/National%20Historical%20Reserve/'>National Historical Reserves</option>
                      <option label='National Historic Sites' value='/designation/National%20Historic%20Site/'>National Historic Sites</option>
                      <option label='National Historic Trails' value='/designation/National%20Historic%20Trail/'>National Historic Trails</option>
                      <option label='National Lakeshores' value='/designation/National%20Lakeshore/'>National Lakeshores</option>
                      <option label='National Military Parks' value='/designation/National%20Military%20Park/'>National Military Parks</option>
                      <option label='National Memorials' value='/designation/National%20Memorial/'>National Memorials</option>
                      <option label='National Monuments' value='/designation/National%20Monument/'>National Monuments</option>
                      <option label='National Monuments & Preserves' value='/designation/National%20Monument%20%26%20Preserve/'>National Monuments & Preserves</option>
                      <option label='National Parks' value='/designation/National%20Park/'>National Parks</option>
                      <option label='National Parkway' value='/designation/National%20Parkway/'>National Parkway</option>
                      <option label='National Park & Preserve' value='/designation/National%20Park%20%26%20Preserve/'>National Park & Preserve</option>
                      <option label='National Preserves' value='/designation/National%20Preserve/'>National Preserves</option>
                      <option label='National Recreation Areas' value='/designation/National%20Recreation%20Area/'>National Recreation Areas</option>
                      <option label='National Rivers & Recreation Areas' value='/designation/National%20River%20%26%20Recreation%20Area/'>National Rivers & Recreation Areas</option>
                      <option label='National Scenic Trails' value='/designation/National%20Scenic%20Trail/'>National Scenic Trails</option>
                      <option label='National Seashores' value='/designation/National%20Seashore/'>National Seashores</option>
                      <option label='Cultural Heritage Corridors' value='/designation/Cultural%20Heritage%20Corridor/'>Cultural Heritage Corridors</option>
                      <option label='International Historic Sites' value='/designation/International%20Historic%20Site/'>International Historic Sites</option>
                      <option label='International Parks' value='/designation/International%20Park/'>International Parks</option>
                    </select>
                  </Col__Decorated>
                  <Col__Decorated xs={12} md={8} lg={9}>
                    <MapDiagram__Wrapper>
                      <MapDiagram
                        className={`mapdiagram`}
                        highlighted={highlighted} 
                        setHighlighted={setHighlighted} 
                        manageFuture={manageFuture}
                      />
                    </MapDiagram__Wrapper>
                  </Col__Decorated>
                </Row>
              </Grid__FindAPark>
              
            </TabPanel>

            <TabPanel> 

                    <DesignationList />

            </TabPanel>

            <TabPanel> 

                    <StateList />

            </TabPanel>
          </Tabs>
          
          <BackgroundDetails
            onClick={handleClick}>
            {parks[0].name.replace(/&#333;/gi, "ō").replace(/&#257;/gi, "ā").replace(/&#241;/gi, "ñ")}<br />
            <strong>{parks[0].designation}</strong><br />
            {territories[`${parks[0].states.split(',')[0].toLowerCase()}`][0]}
          </BackgroundDetails>
        </Content>
      </Background>
      </>
    )
  }
}

Home.pageTransitionDelayEnter = true

Home.getInitialProps = async ({ req, query }) => {
  const {origin}  = absoluteUrl(req)
  const park = await fetch(`${origin}/api/parks/random`)
  const result = await park.json()
  return result
}

export default Home

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem 0;
  background: url( ${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index:0;
`
const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 5rem 0;
  width: 100vw;
  min-height: 100vh;
  z-index:1;
  background: ${({ theme }) => theme.colors.image_overlay_darkgradient};
`
const BackgroundDetails = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1.25rem;
  color: ${({ theme }) => theme.colors.home_text};
  text-align: left;
  font-size: .75rem;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.home_text_shadow};
  cursor: pointer;
  z-index: 10;
  ${SuperQuery().maxWidth.md.and.maxHeight.of('320px').css`
    bottom: 0.5rem;
    line-height: 0.875rem;
  `}
  img.logo {
    width: 3rem;
  }
`
const Content = styled.main`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.home_text };
  z-index: 1000;
  width: 90%;
  ${SuperQuery().minWidth.of('1360px').css`
    padding: 6rem;
    width: 100%;
  `}
  h1 {
    font-size: 2.5rem;
    letter-spacing: -0.1rem;
    line-height: .975;
    margin: 0;
    padding: 0 0 0.5rem 0;
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
    border-bottom:3px solid ${({ theme }) => theme.colors.home_text};
  ${SuperQuery().maxWidth.md.and.maxHeight.of('320px').css`
    font-size: 1.75rem;
  `}
    ${SuperQuery().maxWidth.of('375px').css`
      font-size: 1.75rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 2rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 2.5rem;
    `}
    a {
      color: ${({ theme }) => theme.colors.home_text};
      text-decoration: none !important;
    }
  }
  h2 {
    text-align: left;
    font-size: 2rem;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.1rem;
    text-shadow: 0.5px 0.5px 2px ${({ theme }) => theme.colors.home_text_shadow};
    margin: 0;
    padding: 0 0 0.5rem 0;
    border-bottom:3px solid ${({ theme }) => theme.colors.home_text};
    ${SuperQuery().maxWidth.of('375px').css`
      font-size: 1.25rem;
    `}
    ${SuperQuery().maxWidth.md.and.maxHeight.of('320px').css`
      font-size: 1.25rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 2rem;
    `}
  }
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  
  .top__logo {
    position: absolute;
    top: 0.5rem;
    right: 0.375rem;
    width: 80px;
    height: 50px;
    background: url('/us-nps-logo.png');
    background-size: contain;
    background-repeat: no-repeat;

    ${SuperQuery().minWidth.sm.css`
      top: 1rem;
      right: 1rem;
      width: 150px;
      height: 80px;
    `}
  }
  .top__logo--image {
    cursor: pointer;
    border: none;
  }
  
  .react-tabs__tab-list {
    display: flex;
    justify-content: space-around;
    margin: 0.5rem 0 0 0;
    padding: 0;
    font-size: 1rem;
    font-weight:400;
    ${SuperQuery().maxWidth.of('375px').css`
    font-size: 0.875rem;
    `}
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.25rem;
      padding: 0 1rem 0 1rem;
    `}
  }
  .react-tabs__tab.react-tabs__tab--selected {
    background: rgba(0,0,0,0.5);
  }
  .react-tabs__tab {
    display: inline-block;
    margin: 0;
    padding: 0.575rem;  
    margin: 0.5rem 0.25rem 0 0.25rem;  
    background: rgba(0,0,0,0.2);
  
    border-radius: 4px;
  }
`
const Grid__FindAPark = styled(Grid)`
  background: rgba(0,0,0,0.33);
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  ${SuperQuery().minWidth.md.css`
    padding: 2rem 2rem;
  `}
  .reversible {
    display: flex;
    align-content: space-between;
  }
  label {
    position: absolute;
    left: -100rem;
  }
  select {
    display: block;
    width: 100%;
    background: rgba(0,0,0,0.07);
    color:#222;
    filter: ${({ theme }) => theme.colors.color_filter};
    text-shadow: 0.5px 0.5px 1px rgba(255,255,255,.4);
    font-size: 1.5rem;
    outline: none;
    margin: 1rem 0 0.75rem 0;
    padding: 0.375rem 0.5rem;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 1ex;
    background-origin: content-box;
    background-image: url("data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 492 492' style='enable-background:new 0 0 492 492;' xml:space='preserve'><path d='M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z'/></svg>");
    border: none;
    border-bottom: 3px solid #666;
    border-radius: 0;
    ${SuperQuery().maxWidth.of('375px').css`
      font-size: 1rem;
    `}
    ${SuperQuery().maxWidth.md.and.maxHeight.of('320px').css`
      font-size: 1rem;
    `}
  }
`
const MapDiagram__Wrapper = styled.div`
  margin: 2rem 0 1rem 0;
  padding: 0;
  ${SuperQuery().minWidth.md.and.landscape.css`
    margin: 0 2rem 0 3rem;
  `}
`
const Footer__Wrapper = styled.div`
  height: 3rem;
  color: ${({ theme }) => theme.colors.text } !important; 
`

const Col__Decorated = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`