import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

import styled, { ThemeProvider } from 'styled-components'
import  themes  from '../config/_themes'
import GlobalStyle from './_styles'
import * as gtag from '../config/gtag'

// import Loader from '../components/loader'
import { PageTransition } from 'next-page-transitions'

// Router.events.on('routeChangeComplete', url => gtag.pageview(url))

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', url => { 
  gtag.pageview(url)
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

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
      <>
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <PageTransition
          timeout={400}
          classNames="page-transition"
          // loadingComponent={<ProgressBar percent={this.state.percent}
          //     autoIncrement={this.state.autoIncrement}
          //     intervalTime={this.state.intervalTime} 
          //       spinner={false} />}
          // loadingComponent={<Loader />}
          loadingDelay={1000}
          loadingTimeout={{
            enter: 400,
            exit: 400,
          }}
          loadingClassNames="loading-indicator"
          // monkeyPatchScrolling={true}
        >
          <Component {...pageProps} setTheme={this.setTheme} key={router.asPath} />
        </PageTransition>
      </ThemeProvider>
      </>
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

