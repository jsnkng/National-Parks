
import App from 'next/app'
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1.5, // rem
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
  },
  // colors: {
  //   background: "#f1f1f1",
  //   offbackground: "#d1d1d1",
  //   text: "#1e1d1e",
  //   color_one: "#00ac47",
  //   color_two: "#69bb37",
  //   color_three: "#1e1d1e",
  //   spinner: "rgba(255,255,255,0.8)"
  // },
  colors:{
    background: "#1e1d1e",
    offbackground: "#474547",
    text: "#ffffff",
    color_one: "#3db7e3",
    color_two: "#a1dde9",
    color_three: "#1e1d1e",
    spinner: "rgba(0,0,0,0.8)"
  },
}

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
    
    background-color: ${props => props.theme.colors.background};
    ${SuperQuery().minWidth.sm.css`
      font-size: 20px;
      letter-spacing: -.5px;
    `}
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4,h5,h6 {
    word-break: normal;
  }

  h1 {
    font-size: 2.5em;
    margin: 0;
    padding: 0;
    line-height: .79;
    letter-spacing: -1.5px;

    span {
      display: inline-block;
      font-weight: 400;
      font-size: .725em;
      letter-spacing: -1px;
      line-height: .5;
    }
  }
  h2 {
    font-size: 2em;
    line-height: 1;
    margin: 0;
    padding: .425em .575em .425em 0;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.text};
    ${SuperQuery().minWidth.md.css`
      padding: .25em .25em .25em 0;
    `}
  }
  h3 {
    font-size: 1.5em;
    line-height: 1.1;
    letter-spacing: -1px;
    margin: .5em 0 0 0;
  }

  h4 {
    font-size: 1.75em;
    line-height: 1.1;
    letter-spacing: -1.5px;
    margin: 0;
    padding: .5em 0 0 0;
    ${SuperQuery().minWidth.md.css`
    font-size: 1.5em;
    `}
    ${SuperQuery().minWidth.lg.css`
    font-size: 1.75em;
    `}
  }
  h5 {
  }
  h6 {
    font-size: 2em;
  }
  a {
    color: #3db7e3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    padding: .5em 0 0 0;
    margin: 0 0 .5em 0;
    font-size: 1em;
    font-weight: 300;
    overflow-wrap: break-word;
  }
  ul {
    font-size: 1em;
    column-count: 1;
    list-style-type: none;
    padding: .25em 0 .25em 0;
    margin: 0;
    ${SuperQuery().minWidth.sm.css`
    column-count: 2;
    `}
  }
  li {
    font-size: .9em;
    list-style-type: none;
    padding: .3125em 0;
    font-weight: 300;
    overflow-wrap: break-word;
  }
  .articles__date {
    display: block;
    font-size: 1em;
    padding: 1em 0 0 0;
    margin: 0;
    font-weight: 700;
  }
  
  .description {
    font-size: 1.125em;
    overflow-wrap: break-word;
    padding: 0 .25em 1em .25em;
    ul {
      margin: 0;
      padding: 0 0 0 1em;
    }
    li {
      padding: .5em 0 0 .25em;
    }
  }
 .details {
    font-size: .875em;
    background-color: #323132;
    padding: 1em 1em;
    margin: 1em .25em;
    p {
      margin: 0;
      padding:0;
    }
    ${SuperQuery().minWidth.md.css`
      margin: 1em 0;
    `}
  }


  summary {
    outline: none;
  }
  #spinner {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background-color: ${props => props.theme.colors.spinner};
  color: ${props => props.theme.colors.text};
  font-size: .7em;
}
.btn__load-more {
  clear: both;
  display:none;
  height: 45px;
  margin: 2em auto 0;
  padding: 0 1em;
  font-size: .875em;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors.color_one};
  border: 1px solid ${props => props.theme.colors.color_two};
  background-color: ${props => props.theme.colors.spinner};
  cursor: pointer;
  &:hover {
    background-color: rgba(255,255,255,.015);
  }
  &.hidden {
    display:none;
  }
  ${SuperQuery().minWidth.md.css`
    display:block;
  `}
}
.btn__read-more {
  float: right;
  border: 1px solid ${props => props.theme.colors.color_two};
  padding: .25em 1.25em;
  margin: .5em 2em 2em 0;
  font-size: .875em;
  font-weight: 500;
  text-transform: uppercase; 
  color: ${props => props.theme.colors.color_one};
  background-color: ${props => props.theme.colors.spinner};
  cursor: pointer;
  &:hover {
    background-color: rgba(255,255,255,.015);
  }
  ${SuperQuery().minWidth.md.css`
  font-size: .625em;
    padding: .15em 1.15em;
    margin: 1px;
    border: 0;
    background-color: transparent;
    text-decoration: underline !important;
    &:hover {
      border:1px solid #a1dde9;
      background-color: rgba(255,255,255,0);
      text-decoration: none !important; 
      margin:0;
    }
  `}
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
    background-color: ${props => props.theme.colors.text};
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
  border: none;
  padding: 0;
}

.accordion__item + .accordion__item {
  ${'' /* border-bottom: 1px solid ${props => props.theme.colors.offbackground}; */}
}

.accordion__button {
  color: ${props => props.theme.colors.color_one};
  line-height: 1.2;
  font-weight: 600;
  text-indent: .5em;
  padding:  1em 0 1em .5em;
  border-bottom: 1px solid ${props => props.theme.colors.offbackground};
  outline: 0;
  cursor: pointer;
  text-indent: 0;
 
  h3 {
    letter-spacing:-1px;
    margin-block-end:0px;
    margin-block-start:0px;
    margin-bottom:0px;
    margin-inline-end:0px;
    margin-inline-start:0px;
    margin-left:.5em;
    margin-right:0px;
    margin-top:0px;
  }
}
.accordion__button:hover {
  color: ${props => props.theme.colors.color_two};
}

.accordion__button:before {
  display: inline-block;
  float: left;
  content: '';
  height: .5em;
  width: .5em;
  margin: .5em .5em 0 -.5em;
  
  border-bottom: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform: rotate(-45deg);
}
.accordion__button[aria-expanded='true'],
.accordion__button[aria-selected='true'] {
  color: ${props => props.theme.colors.color_two};
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
