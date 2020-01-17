import React, {useState, useEffect } from 'react'
import Head from 'next/head'

import absoluteUrl from 'next-absolute-url'
import fetch from 'isomorphic-unfetch'

import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import states from '../config/states'
import MapDiagram from '../components/mapdiagram'
import Footer from '../components/footer'
import { Moon } from '../svgs/moon.svg'
import { Sun } from '../svgs/sun.svg'

const Home = ({ parks, themeName, setThemeName, pageTransitionReadyToEnter, manageFuture }) => {
  const [loaded, setLoaded] = useState(false)
  const [backgroundURL, setBackgroundURL] = useState('')
  const [highlighted, setHighlighted] = useState('')

  const handleStateChange = (e) => {
    e.preventDefault()
    manageFuture('/state/[stateCode]', e.target.value)
  }
  const handleDesignationChange = (e) => {
    e.preventDefault()
    manageFuture('/designation/[designation]', e.target.value)
  }
  
  useEffect(() => {
    const url =  parks[0].images === undefined || parks[0].images.length == 0 
      ? '/noimage.jpg' 
      : process.env.AWS_URI + parks[0].images[0].url.replace(/[/:-\s]/g, '_')
    setBackgroundURL(url)
    setLoaded(true)
    pageTransitionReadyToEnter()

    
    // console.log(parks)

  }, [])

  if (!loaded) {
    return null
  } else {
    return (
      <>
      <Head>
        <title>Explore America’s National Parks</title>
      </Head>
      <Background backgroundURL={backgroundURL}>
        <BackgroundOverlay />
        
        <Content>
        <a href="/">
          <div className='top__logo'>
            <span className="top__logo--text" href="/">National<br />Park<br />Service</span>
            <img className="top__logo--image" src="/us-nps.png" width="90" alt="National Parks Service" />
          </div></a>
          <Grid__FindAPark fluid>
            <Row>
              <Col  xs={12} smOffset={2} sm={8} mdOffset={0} md={4} lg={4}>
                
                <h1><a href="/">Explore America’s<br /> National Parks</a></h1>
                
                <h2>Find a Park</h2>
                <label for='state'>By State</label>
                <select id='state' value={`/state/${highlighted}/`} onChange={handleStateChange.bind(this)}>
                  <option label='By State'>By State</option>
                  { Object.entries(states).map(([key, value]) => {
                    return ( 
                      <option label={states[key][0]} value={`/state/${key}/`} 
                        key={key} />
                    )
                  })}
                </select>

                <label for='designation'>By Designation</label>
                <select id='designation' value='' onChange={handleDesignationChange.bind(this)}>
                <option label='By Designation'>By Designation</option>
                <option label='National Monuments' value='/designation/National%20Monument/' />
                <option label='National Parks' value='/designation/National%20Park/' />
                <option label='National Historical Parks' value='/designation/National%20Historical%20Park/' />
                <option label='National Historic Sites' value='/designation/National%20Historic%20Site/' />
                <option label='Parks' value='/designation/Park/' />
                <option label='National Military Parks' value='/designation/National%20Military%20Park/' />
                <option label='National Battlefields' value='/designation/National%20Battlefield/' />
                <option label='National Memorials' value='/designation/National%20Memorial/' />
                <option label='National Heritage Corridors' value='/designation/National%20Heritage%20Corridor/' />
                <option label='National Historical Reserves' value='/designation/National%20Historical%20Reserve/' />
                <option label='National Recreation Areas' value='/designation/National%20Recreation%20Area/' />
                <option label='National Heritage Areas' value='/designation/National%20Heritage%20Area/' />
                <option label='Part of Statue of Liberty National Monument' value='/designation/Part%20of%20Statue%20of%20Liberty%20National%20Monument/' />
                <option label='National Monuments & Preserves' value='/designation/National%20Monument%20%26%20Preserve/' />
                <option label='National Preserves' value='/designation/National%20Preserve/' />
                <option label='Cultural Heritage Corridors' value='/designation/Cultural%20Heritage%20Corridor/' />
                <option label='National Historic Trails' value='/designation/National%20Historic%20Trail/' />
                <option label='National Scenic Trails' value='/designation/National%20Scenic%20Trail/' />
                <option label='National Geologic Trails' value='/designation/National%20Geologic%20Trail/' />
                <option label='Ecological & Historic Preserves' value='/designation/Ecological%20%26%20Historic%20Preserve/' />
                <option label='National Seashores' value='/designation/National%20Seashore/' />
                <option label='National Recreational Rivers' value='/designation/National%20Recreational%20River/' />
                <option label='National Rivers & Recreation Areas' value='/designation/National%20River%20%26%20Recreation%20Area/' />
                <option label='National Scenic Riverways' value='/designation/National%20Scenic%20Riverway/' />
                <option label='Wild & Scenic Rivers' value='/designation/Wild%20%26%20Scenic%20River/' />
                <option label='National Rivers' value='/designation/National%20River/' />
                <option label='National Lakeshores' value='/designation/National%20Lakeshore/' />
                <option label='International Historic Sites' value='/designation/International%20Historic%20Site/' />
                <option label='International Parks' value='/designation/International%20Park/' />
              </select>
              
              
                
              </Col>
              <Col xs={12} smOffset={2} sm={8} mdOffset={0} md={8} lg={8}>

                <MapDiagram__Wrapper>
                  <MapDiagram
                    className="mapdiagram" 
                    territories={'none'} 
                    highlighted={highlighted} 
                    setHighlighted={setHighlighted} 
                    manageFuture={manageFuture}
                  />
                </MapDiagram__Wrapper>
                <BackgroundDetails
                  onClick={() => manageFuture("/state/[stateCode]/park/[parkCode]", 
                  `/state/${parks[0].states.split(',')[0].toLowerCase()}/park/${parks[0].parkCode}`)}
                >
                  {parks[0].name.replace(/&#333;/gi, "ō").replace(/&#257;/gi, "ā")}<br />
                  <strong>{parks[0].designation}</strong><br />
                  {states[`${parks[0].states.split(',')[0].toLowerCase()}`][0]}
                  {/* <a href='/'><img className='logo' src='/us-nps.png' width='90' alt='National Parks Guide' /></a> */}
                </BackgroundDetails>
              </Col>
            </Row>

          </Grid__FindAPark>
        </Content>

        <FooterHome>

          <Grid fluid>
          <Row className='bottom'>
          
            <Col className='bottom__themeswitcher' xs={12}>
            <a className='bottom__credit' href="#"><strong>JSNKNG</strong> / 2020</a>
        
            { themeName !== 'lightMode' &&
              <Sun aria-label='Set Day Mode' onClick={() => { 
                setThemeName('lightMode')
                document.cookie = `themeName=lightMode; path=/`
              } } />
            }
            { themeName === 'lightMode' &&
              <Moon aria-label='Set Night Mode'  onClick={() => { 
                setThemeName('darkMode')
                document.cookie = `themeName=darkMode; path=/`
              } } />
            }
            </Col>
          </Row> 
        </Grid>

        
        </FooterHome>

      </Background>
      </>
    )
  }
}

Home.pageTransitionDelayEnter = true

Home.getInitialProps = async ({ req, query }) => {
  const {origin}  = absoluteUrl(req)
  const park = await fetch(`${origin}/api/parks/aggregate`)
  const result = await park.json()
  return result
}

export default Home
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url( ${props => props.backgroundURL});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index:0;
`
const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index:1;
  background-color: ${ ({ theme }) => theme.colors.image_overlay_opaque };
`
const BackgroundDetails = styled.div`
position: absolute;
bottom: 1rem;
left: 1.25rem;
  color: ${({ theme }) => theme.colors.home_text};
  text-align: left;
  font-size: .75rem;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.home_text_shadow};
  z-index: 100;

  img.logo {
    width: 3rem;
  }
`
const Content = styled.main`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.home_text };
  z-index: 100;
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  .top__logo {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    min-width: 110px;
  }

  .top__logo--image {
    cursor: pointer;
    border: none;
    width: 2.25em;
    margin-right: .5rem;
  }
  .top__logo--text {
    text-align:right;
    font-size: .875rem;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin-right: .5rem;
    text-shadow: 0.5px 0.5px 1px ${({ theme }) => theme.colors.home_text_shadow};
    ${SuperQuery().minWidth.md.css`
      font-size: .875rem;
      letter-spacing: -1.5px;
    `}
  }

`
const FooterHome = styled.div`
position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  color: ${({ theme }) => theme.colors.home_text };
  z-index: 900;
  height: 3rem;
  .bottom {
    display: flex;
    align-content: flex-start;
    ${SuperQuery().minWidth.md.css`
      padding:  0;
    `}
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
      color: inherit;
    }
  }
  .bottom__credit {
    font-size: 0.75rem;
    padding: 0.75rem 0 0 0;
    z-index: 1000;
    text-shadow: 0.5px 0.5px 1px ${({ theme }) => theme.colors.home_text_shadow};
  }
  .bottom__themeswitcher {
    display: flex;
    justify-content: flex-end;
    width: 52px;
    height: 28px;
    z-index: 1000;

    svg {
      width: 38px;
      height: 38px;
      cursor: pointer;
      outline: none;
      padding: 10px;
      margin: 0;
      &:hover {
        padding: 12px;
      }
      margin-right: -1rem;

      ${'' /* background-color: rgba(0,0,0,0.1); */}
      ${'' /* filter: ${({ theme }) => theme.colors.color_filter}; */}
      transition: filter 0.25s;

    }
  }

`

const Grid__FindAPark = styled(Grid)`
  z-index: 100;

  ${SuperQuery().maxWidth.of('375px').css`
    margin: 0 0 1rem 0;
  `}

  h1 {
    font-size: 2.5rem;
    letter-spacing: -0.1rem;
    line-height: .975;
    margin: 0;
    padding: 0 0 0.5rem 0;
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.home_text_shadow};
    border-bottom:3px solid ${({ theme }) => theme.colors.home_text};
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
    border-bottom: 0;
    ${SuperQuery().maxWidth.of('375px').css`
      font-size: 1.25rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 2rem;
    `}
  }
  label {
    position: absolute;
    left: -100rem;
  }
  select {
    display: block;
    width: 104%;
    background: rgba(0,0,0,0.07);
    color:#222;
    filter: ${({ theme }) => theme.colors.color_filter};

    text-shadow: 0.5px 0.5px 1px rgba(255,255,255,.4);
    font-size: 1.5rem;
    outline: none;
    margin: 1rem -0.75rem 0.75rem -0.5rem;
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

  }

`
const MapDiagram__Wrapper = styled.div`
  margin:3rem 0 0 0rem;
  ${SuperQuery().maxWidth.md.and.landscape.css`
    display: none;
  `}
  ${SuperQuery().maxWidth.of('375px').css`
    margin: 2rem 0 0 0;
  `}
  ${SuperQuery().minWidth.md.css`
    margin: 0;
  `}

  ${SuperQuery().minWidth.md.and.landscape.css`
    margin: 0 2rem 0 3rem;
  `}
`