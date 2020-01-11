import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import themes from '../config/theme'
import GlobalStyle from './_styles'
import * as gtag from '../config/gtag'

const stack = []

const MyApp = ({ router, Component, pageProps }) => {
  const [themeName, setThemeName] = useState('dayTheme')

  useEffect(() => {
    Router.events.on('routeChangeStart', url => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', url => { 
      gtag.pageview(url)
      NProgress.done()
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done()
    })
  }, [])
  
  const manageFuture = (href, as) => {
    // Get current route and push to stack
    stack.push([router.route, router.asPath])
    // Get arguments href/as and push router to new routex
    router.push(href, as)
  }
  const manageHistory = () => { 
    const back = stack.pop()
    const href = back !== undefined && back.length !== 0 ? back[0] : '/'
    const as = back !== undefined && back.length !== 0 ? back[1] : '/'
    router.push(href, as)
  }

  return (
    <ThemeProvider theme={ { colors: themes[themeName], flexboxgrid: themes.flexboxgrid }}>
      <GlobalStyle />
      <PageTransition
        timeout={400}
        classNames="page-transition"
        loadingDelay={1000}
        loadingTimeout={{
          enter: 400,
          exit: 400,
        }}
        loadingClassNames="loading-indicator">
          <Component {...pageProps} router={router} themeName={themeName} setThemeName={setThemeName} manageHistory={manageHistory} manageFuture={manageFuture} key={router.asPath} />
      </PageTransition>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default MyApp
