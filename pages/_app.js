
import App from 'next/app'
import React from 'react'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

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
    font-size:14px;

    ${SuperQuery().minWidth.sm.css`
      font-size:16px;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size:18px;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size:20px;
    `}
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: .4em 0;
    padding: 0;
  }
  .accordion {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  .accordion__item + .accordion__item {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
      background-color: #f4f4f4;
      color: #444;
      cursor: pointer;
      padding: 12px 0 ;
      width: 100%;
      text-align: left;
      border: none;

      p {
      padding: 0 36px;
      }
  }

  .accordion__button:hover {
      background-color: #ddd;
  }

  .accordion__button:before {
      display: inline-block;
      content: '';
      height: 10px;
      width: 10px;
      margin-left: 12px;
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

  /* -------------------------------------------------- */
  /* ---------------- Animation part ------------------ */
  /* -------------------------------------------------- */

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
  colors: {
    primary: 'gold'
  },
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main id="page-wrap">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp