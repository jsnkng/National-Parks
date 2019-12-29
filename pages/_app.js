import App, { Container } from 'next/app'
// import React from 'react'
import Router from 'next/router'
import styled, { ThemeProvider } from 'styled-components'
import  themes  from '../config/_themes'
import GlobalStyle from './_styles'
import * as gtag from '../config/gtag'

// import Loader from '../components/loader'
import { PageTransition } from 'next-page-transitions'
// window.addEventListener('popstate', function(event) {
//   // The popstate event is fired each time when the current history entry changes.

//   var r = confirm("You pressed a Back button! Are you sure?!");

//   if (r == true) {
//       // Call Back button programmatically as per user confirmation.
//       history.back();
//       // Uncomment below line to redirect to the previous page instead.
//       // window.location = document.referrer // Note: IE11 is not supporting this.
//   } else {
//       // Stay on the current page.
//       history.pushState(null, null, window.location.pathname);
//   }

//   history.pushState(null, null, window.location.pathname);

// }, false);

Router.events.on('routeChangeComplete', url => gtag.pageview(url))


export default class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        flexboxgrid: themes.flexboxgrid,
        colors: themes.colors.dayTheme,
      }, 
      percent: 20,
      autoIncrement: true,
      intervalTime: 50
    }
  }

  setTheme = (themeName) => {
    this.setState({
      theme: {
        flexboxgrid: themes.flexboxgrid,
        colors: themes.colors[themeName]
      } 
    })
  }
  
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, router, pageProps } = this.props
   
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <PageTransition
          timeout={500}
          classNames="page-transition"
          // loadingComponent={<ProgressBar percent={this.state.percent}
          //     autoIncrement={this.state.autoIncrement}
          //     intervalTime={this.state.intervalTime} 
          //       spinner={false} />}
          // loadingComponent={<Loader />}
          loadingDelay={500}
          loadingTimeout={{
            enter: 400,
            exit: 440,
          }}
          loadingClassNames="loading-indicator"
          // monkeyPatchScrolling={true}
        >
          <Component {...pageProps} setTheme={this.setTheme} key={router.asPath} />
        </PageTransition>
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

