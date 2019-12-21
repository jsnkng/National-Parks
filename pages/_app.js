
import App from 'next/app'
import React, { useState } from 'react'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Masthead__Component from '../components/masthead';
import Footer__Component from '../components/footer'


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Helvetica -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
    line-height: 1.6;
    font-size: 16px;

    background-color: #3c3a3c;
    ${SuperQuery().minWidth.sm.css`
      font-size:18px;
    `}
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: .4em 0;
    padding: 0;
  }
  summary {
    outline: none;
  }
  .accordion {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 0 .5em;
  }

  .accordion__item + .accordion__item {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
    color: #a1dde9;
    font-size: 1.25em;
    font-weight: 600;
    padding:  1em 0 1em 1em;
    border-bottom: 1px solid #3c3a3c;
    outline: 0;
    cursor: pointer;
    line-height: 1.25;
  }

  .accordion__button:hover {
      color: #ffffff;
  }

  .accordion__button:before {
      display: inline-block;
      content: '';
      height: 10px;
      width: 10px;
      margin-left: -22px;
      margin-right: 12px;
      border-bottom: 2px solid currentColor;
      border-right: 2px solid currentColor;
      transform: rotate(-45deg);
  }

  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
      transform: rotate(45deg);
  }

  .accordion__panel {
      animation: fadein 0.35s ease-in;
  }
  @keyframes fadein {
      0% {
          opacity: 0;
      }

      100% {
          opacity: 1;
      }
  }
`

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      xs: 0,  // em
      sm: 36, // em
      md: 48, // em
      lg: 62,  // em
      xl: 75
    },
    breakpoints: {
      xs: 0,  // em
      sm: 36, // em
      md: 48, // em
      lg: 62,  // em
      xl: 75
    }
  }
}