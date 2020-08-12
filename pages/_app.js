import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import App from 'next/app'

// use the page transition to smooth navigation
import { PageTransition } from 'next-page-transitions'

// use nprogress to provide user feedback about page loading
import NProgress from 'nprogress'

// use styled components to keep components and their styles together and because the syntax is friendly
import { ThemeProvider } from 'styled-components'

// get the default flexboxgrid settings for responsive layout and data representing the two themes 
import themes from '../config/theme'

// get the global stylesheet
import GlobalStyle from '../config/styles'

// get the analytics tracking id, event, and pageview code
import * as gtag from '../config/gtag'

// use cookies to keep track of theme
import cookies from 'next-cookies'

// created the stack array to handle history state because using the browser history state 
// keeps track of the vertical scroll position and doesn't reset it on navigation
const stack = []


const MyApp = ({ appCookies, router, Component, pageProps }) => {
  
  // initialize the themeName to a default theme 
  const [themeName, setTheme] = useState('lightMode')
  const [lastPage, setLastPage] = useState('National Park Guides')

  // updates the theme in app's state and sets cookie to persist theme state on relaunch
  const setThemeName = themeName => {
    setTheme(themeName)
    document.cookie = `themeName=${themeName}; path=/`
  }

  // set theme state by cookie or preference detection
  useEffect(() => {
    if (appCookies.themeName) {
      setThemeName(appCookies.themeName)
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setThemeName('darkMode')
      }
    }
  }, [])

  // set listeners for routing events to start and stop loading progress bar and to 
  // add and remove items from history stack, also triggers google pageview
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

  
  // passed to components that change "page" state. updates history stack
  // and execute router.push to change "page" state forward
  const manageFuture = (href, as, title) => {
    setLastPage(title)
    // Get current route and push to stack
    stack.push([router.route, router.asPath])
    // Get arguments href/as and push router to new route
    router.push(href, as)
  }

  // passed to components that change "page" state. updates history stack
  // and execute router.push to change "page" state to respond to back actions
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
        <meta property="og:title" key="ogtitle" content="National Park Service: A State-by-State Guide" />
        <meta property="og:type" key="ogtype" content="website" />
        <meta property="og:url" key="ogurl" content="https://www.natparguides.com" />
        <meta property="og:image" key="ogimage" content="https://www.natparguides.com/natparguides_ogimage.jpg" />
        <meta name="description" key="description" content="Every one of America’s National Park in an easily navigated photo-rich digital guide." />
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
