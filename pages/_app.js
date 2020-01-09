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
  
  stack.push(router.asPath)

  const manageHistory = () => { 
    const back = stack.pop()
    const back2 = stack.pop()
    const as = back2 !== undefined ? back2 : '/'
    const href = as.includes('park') ? '/state/[stateCode]/park/[parkCode]/' : as.includes('state') ? '/state/[stateCode]/' :  '/'

    href !== undefined && router.push(href, as)
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
          <Component {...pageProps} router={router} themeName={themeName} setThemeName={setThemeName} manageHistory={manageHistory} key={router.asPath} />
      </PageTransition>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default MyApp
