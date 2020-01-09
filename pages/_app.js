import React, { useState, useEffect } from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import themes from '../config/theme'
import GlobalStyle from './_styles'
import * as gtag from '../config/gtag'
import { PageTransition } from 'next-page-transitions'

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
const stack = []

const MyApp = ({ router, Component, pageProps }) => {
  const [themeName, setThemeName] = useState('dayTheme')
  
  const manageFuture = (href, as) => {
    // if(stack.length === 0) { stack.push('/') } 
    // Get current route and push to stack
    stack.push([router.route, router.asPath])
    // Get arguments href/as and push router to new routex
    router.push(href, as)
    console.log(stack)
  }
  const manageHistory = () => { 
    // const back = stack.pop()
    const back = stack.pop()
    // console.log(back)
    const href = back.length !== 0 ? back[0] : '/'
    const as = back.length !== 0 ? back[1] : '/'
    // const href = as.includes('park') ? '/state/[stateCode]/park/[parkCode]/' : as.includes('state') ? '/state/[stateCode]/' :  '/'
    router.push(href, as)
    // href !== undefined && router.push(href, as)
    console.log(stack)
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
