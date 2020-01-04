import React, { useState, useEffect } from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import themes from '../config/theme'
import GlobalStyle from './_styles'
import * as gtag from '../config/gtag'
import { PageTransition } from 'next-page-transitions'
import Toggle from 'react-toggle'

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

const MyApp = ({ router, Component, pageProps }) => {
  
  const [theme, setTheme] = useState('dayTheme')

  const ToggleTheme = () => {
    const themename = theme === 'dayTheme' ? 'nightTheme' : 'dayTheme'
    return (
      <Toggle
        defaultChecked={true}
        icons={false}
        aria-label='Set Day|Night Mode'
        onChange={() => setTheme(themename)}
        />
    )
  }
  return (
    <>
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <PageTransition
        timeout={400}
        classNames="page-transition"
        loadingDelay={1000}
        loadingTimeout={{
          enter: 400,
          exit: 400,
        }}
        loadingClassNames="loading-indicator"
      >
        <Component {...pageProps} ToggleTheme={ToggleTheme} key={router.asPath} />
      </PageTransition>
    </ThemeProvider>
    </>
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