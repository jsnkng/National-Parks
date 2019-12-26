import React, { Component } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

import Nav from './nav'
const ProgressBar = require('react-progress-bar-plus')
// require('react-progress-bar-plus/lib/progress-bar.css')
class Header extends Component {
  state = { autoIncrement: true,
            intervalTime: 25
          }

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      this.setState({ percent: 20 })
    }
    Router.onRouteChangeComplete = () => {
      this.setState({ percent: 100 })
    }
    Router.onRouteChangeError = () => {
      this.setState({ percent: -1 })
    }
  }
  
  render() {
      return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="An example PWA" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#ff6600" />
          <title>National Park Service: A State-by-State Guide</title>
          <link rel='icon' href='/favicon.ico' />
          <link rel="manifest" href="/manifest.json" />
          <meta name="apple-mobile-web-app-title" content="National Park Service State Guide" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
{/* <link rel="apple-touch-startup-image" 
media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
href="/image.png" /> */}
          <link rel="apple-touch-startup-image" sizes="512x512" href="/splash-icon-512x512.png" />
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
          <link rel="stylesheet" type="text/css" href="/progress-bar.css" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en"></script>
        </Head>

     
        <Loading__Wrapper>
        <ProgressBar percent={this.state.percent}
              autoIncrement={this.state.autoIncrement}
              intervalTime={this.state.intervalTime} 
                spinner={false}
              />
        </Loading__Wrapper>
        <Nav 
          pageTitle={this.props.pageTitle}
          pageStateCode={this.props.pageStateCode}
          pageSubTitle={this.props.pageSubTitle}
          pageSubSubTitle={this.props.pageSubSubTitle}
          pageSubSubSubTitle={this.props.pageSubSubSubTitle} />
      </>
    )
  }
}

export default Header

const Loading__Wrapper = styled.div`

  position:absolute;
  top: 0;
  left: 0;
  z-index: 100000;
  width: 100%;
  .react-progress-bar-percent {
    height: 4px;
    background: ${props => props.theme.colors.color_three};
    box-shadow: none;
    transition: all 200ms ease;
  }
`