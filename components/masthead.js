import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import SuperQuery from '@themgoncalves/super-query'

const Masthead = props => {
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }
  
  return (
  <>
    <Head>
      <title>National Park Service: A State-by-State Guide</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
       <meta name="theme-color" content="#ff6600" />
       <link rel="apple-touch-icon" href="/static/icon.png" />
       <meta name="apple-mobile-web-app-title" content="National Park Service State Guide" />
       <meta name="apple-mobile-web-app-status-bar-style" content="default" />
       <meta name="apple-mobile-web-app-capable" content="yes" />
       <meta name="mobile-web-app-capable" content="yes" />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />


       <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script>
    </Head>
    <HeaderMenu >
      <Link href="/" passHref>
        <Logo className="logo" src="/us-nps.png" width="90" onClick={props.pageStateCode ? handleBannerClick : ""} />
      </Link>
      <Link href="#" passHref>
        <Title>{props.pageTitle}</Title>
      </Link>
      <Link href="#" passHref>
        <Title__Sub>{props.pageSubTitle}</Title__Sub>
      </Link>
      { props.pageLinkState !== false &&
      <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
        <Title__Secondary onClick={handleBannerClick}>{props.pageSubSubTitle}</Title__Secondary>
      </Link>
      }
      { props.pageLinkState === false &&
        <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
          <Title__Secondary>{props.pageSubSubTitle}</Title__Secondary>
        </Link>
      }
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
    </HeaderMenu>
    </>
  )
}
export default Masthead

const HeaderMenu = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  z-index: 120;
  ${SuperQuery().minWidth.sm.css`
    grid-template-columns: 4fr 4fr;
    height: 90px;
  `}
`

const Logo = styled.img.attrs()`
  position: absolute;
  top: 12px;
  left: 8px;
  width: 45px;
  cursor: pointer;

  ${SuperQuery().minWidth.sm.css`
    top: 17px;
    left: 12px;
    width: 52px;
  `}
`
const Title = styled.span.attrs()`
  float: left;
  clear: left;
  margin: 12px 0 0 60px;
  padding: 0;
  text-align:left;
  font-weight: 700;
  letter-spacing: -.5px;
  line-height: 1;
  font-size: 1em;
  max-width: 52%;
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${SuperQuery().minWidth.sm.css`
    margin: 17px 0 0 75px;
    font-size: 1.5em;
    letter-spacing: -1.5px;
  `}
`
const Title__Sub = styled.div.attrs()`
  float: left;
  clear: left;
  margin: 0 0 0 60px;
  padding: 0;
  text-align:left;
  font-weight: 500;
  letter-spacing: -.5px;
  line-height: 1;
  font-size: .875em;
  max-width: 45%;
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${SuperQuery().minWidth.sm.css`
    margin: 0px 0 0 77px;
    font-size: 1.125em;
    letter-spacing: -1.5px;
  `}
`
const Title__Secondary = styled.div.attrs()`
  position: absolute;
  margin: 14px 10px 0 0;
  padding: 0;
  top: 0;
  right: 0;
  text-align: right;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 1;
  font-size: 1.375em;
  max-width: 50%;
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${SuperQuery().minWidth.sm.css`
    margin: 27px 10px 0 0;
    font-size: 2em;
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
