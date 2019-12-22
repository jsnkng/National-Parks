
import App from 'next/app'
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Component 
            {...pageProps} />
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
    font-family: Helvetica, "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    font-size: 16px;
    background-color: #3c3a3c;
    ${SuperQuery().minWidth.sm.css`
      font-size: 20px;
      line-height: 1.6;
    `}
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: .4em 0;
    padding: 0;
  }
  summary {
    outline: none;
  }

  #spinner {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background-color: rgba(0,0,0,0.8);
  color: #ffffff;
  font-size: .7em;
}

.btn__load-more {
  clear: both;
  width: 160px;
  height: 45px;
  margin: 1em auto;
  font-size: .875em;
  font-weight: 500;
  text-transform: uppercase;
  color: #a1dde9;
  border:1px solid #a1dde9;
  background-color: rgba(0,0,0,.9);
  &.hidden {
    display:none;
  }
}
#spinner.show {
    display: block;
  }
  #spinner.hide {
    display: none;
  }
  .sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 100px auto;
  }
  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: #ffffff;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; 
  }
  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.sk-cube-grid .sk-cube9 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
@-webkit-keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
  }
}
@keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  } 
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
    font-size: 1em;
    font-weight: 600;
    padding:  .75em 0 .75em 1em;
    border-bottom: 1px solid #3c3a3c;
    outline: 0;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.125em;
    `}
  }

  .accordion__button:hover {
    color: #ffffff;
  }

  .accordion__button:before {
    display: inline-block;
    content: '';
    height: .5em;
    width: .5em;
    margin-left: -20px;
    margin-right: 10px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
    ${SuperQuery().minWidth.sm.css`
      margin-right: 20px;
      border-bottom: 3px solid currentColor;
      border-right: 3px solid currentColor;
    `}
  }

  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
    margin-left: -18px;
    margin-right: 8px;
    ${SuperQuery().minWidth.sm.css`
      margin-right: 18px;
    `}
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
      lg: 75,  // em
      xl: 100
    },
    breakpoints: {
      xs: 0,  // em
      sm: 36, // em
      md: 48, // em
      lg: 75,  // em
      xl: 100
    }
  }
}