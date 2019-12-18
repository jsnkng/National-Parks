
import App from 'next/app'
import React, { useState } from 'react'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Masthead__Component from '../components/masthead';
import Footer__Component from '../components/footer'

import Link from 'next/link'
const links = [
  { href: '/', label: 'Home' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
    line-height: 1.6;
    font-size: 16px;

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
  }

  .accordion__item + .accordion__item {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
    color: #a1dde9;
    font-size: 1.25em;
    font-weight: 600;
    padding:  .5em 0;
    border-bottom: 1px solid #3c3a3c;
    outline: 0;
    cursor: pointer;
  }

  .accordion__button:hover {
      color: #ffffff;
  }

  .accordion__button:before {
      display: inline-block;
      content: '';
      height: 10px;
      width: 10px;
      margin-left: 0px;
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
const MyApp = ({ Component, pageProps }) => {
  const [pageTitle, setPageTitle] = useState(null)
  const [pageSubTitle, setPageSubTitle] = useState(null)
  const [pageStateCode, setPageStateCode] = useState(null)
  pageProps.setPageTitle = setPageTitle
  pageProps.setPageSubTitle = setPageSubTitle
  pageProps.setPageStateCode = setPageStateCode
  // console.dir(pageProps)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Masthead__Component 
          pageTitle={pageTitle} 
          pageSubTitle={pageSubTitle}
          pageStateCode={pageStateCode}
        />
        <main id="page-wrap">
          <Component {...pageProps} />
        </main>
      <Footer__Component pageTitle="U.S. National Parks" />
    </ThemeProvider>
  )
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

export default MyApp