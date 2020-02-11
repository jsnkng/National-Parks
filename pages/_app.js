import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import App from 'next/app'
import { PageTransition } from 'next-page-transitions'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import themes from '../config/theme'
import GlobalStyle from '../config/styles'
import * as gtag from '../config/gtag'
import cookies from 'next-cookies'

const stack = []

const MyApp = ({ appCookies, router, Component, pageProps }) => {
  const [themeName, setTheme] = useState('lightMode')
  const [lastPage, setLastPage] = useState('National Park Guides')

  const setThemeName = themeName => {
    setTheme(themeName)
    document.cookie = `themeName=${themeName}; path=/`
  }

  useEffect(() => {
    if (appCookies.themeName) {
      setThemeName(appCookies.themeName)
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeName('darkMode')
      }
    }
  }, [])

  useEffect(() => {
    Router.events.on('routeChangeStart', url => {
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', url => { 
      gtag.pageview(url)
      const lastStack = stack.slice(-1)
      if(lastStack[0] !== undefined && url === lastStack[0][1]) {
        stack.pop()
      }
      NProgress.done()
    })
    Router.events.on('routeChangeError', () => {
      NProgress.done()
    })
  }, [])

  

  const manageFuture = (href, as, title) => {
    setLastPage(title)
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
    // window.history.back()
  }

  return (
    <ThemeProvider theme={ { colors: themes[themeName], flexboxgrid: themes.flexboxgrid }}>
      <Head>
        <title>National Park Service: A State-by-State Guide</title>
        <meta property="og:title" content="National Park Service: A State-by-State Guide" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.natparguides.com" />
        <meta property="og:image" content="https://www.natparguides.com/us-nps.png" />
        <meta name="description" content="An homage to the iconic NPS print guides, National Park Guides combines all 450 plus parks into a simple, easily navigated digital guide." />
      </Head>
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
          <Component {...pageProps} router={router} themeName={themeName} setThemeName={setThemeName} manageHistory={manageHistory} manageFuture={manageFuture} lastPage={lastPage} key={router.asPath} />
      </PageTransition>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const appCookies = cookies(appContext.ctx);
  return { ...appProps, appCookies}
}

export default MyApp
