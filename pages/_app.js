
import App from 'next/app'
import React from 'react'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'

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
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: .4em 0;
    padding: 0;
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

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
      <div id="outer-container">
      <GlobalStyle />
        <main id="page-wrap">
          <Component {...pageProps} />
        </main>
        </div>
      </ThemeProvider>
    )
  }
}

