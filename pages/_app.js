import App from 'next/app'
import React from 'react'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { push as Menu } from 'react-burger-menu'

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
  }
  button {
    background: transparent;
    background-color: #0a0a0a; 
    border-radius: 2px;
    border: 1px solid #2f2f2f;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: .75em;
    font-weight: bold;
    padding: 4px 18px;
    margin: 0 5px;
    text-decoration: none;
  }
  button:hover {
    background: linear-gradient(to bottom, #111111 5%, #000000 100%);
    background-color: #333333;
  }
  button:active {
    position: relative;
    top: 1px;
  }
  /* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
`

const theme = {
  colors: {
    primary: 'gold'
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
      <div id="outer-container">
      <GlobalStyle />

      
        <Menu right width={ '320px' } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } >
        {links.map(link => (
          <li key={link.label}>
            <Link  href={link.href}>
              <a>{link.label}</a>
            </Link>
            </li>
        ))}
        </Menu>
        <main id="page-wrap">
          <Component {...pageProps} />
        </main>
        </div>
      </ThemeProvider>
    )
  }
}

