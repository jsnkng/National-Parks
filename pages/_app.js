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

const stack = []

const MyApp = ({ router, Component, pageProps }) => {
  const [themeName, setThemeName] = useState('dayTheme')

  // console.log('pageload stack', stack)
  // const fwdStack = path => stack.push(path)


  // fwdStack(router.asPath)
  // console.log('fwdStack stack', stack)

  const manageHistory = () => {}
  // const manageHistory = () => { 
  //   const back = stack.pop()
  //   const back2 = stack.pop()
  //   const as = back2 !== undefined ? back2 : '/'
  //   const href = as.includes('park') ? '/state/[stateCode]/park/[parkCode]/' : as.includes('state') ? '/state/[stateCode]/' :  '/'

  //   href !== undefined && router.push(href, as)
  //   console.log(href, as)
  //   // Router.replace(stack.pop())
  // }

  // const manageHistory = {}
  // manageHistory.href = '/state/[stateCode]/'
  // const [back] = stack.slice(-2)
  // manageHistory.as = back
  // console.log(manageHistory)

  // const manageHistory = (path) => {
  //   console.log('manageHistory stack', stack)
  //   if (path !== -1) {
  //     // stack.push(path)
  //   } else {
  //     console.log('go back page', stack.slice(-2, -1))
  //     const backstack = stack.slice(0, -1)
  //     console.log('go back stack', backstack)
  //     // const back = stack.slice(-2, -1)
  //     // setStack(stack.slice(0,-1))
  //     // setStack(stack.slice(0))
  //     // console.log(stack)
  //     // console.log(stack.slice(stack.length))
  //     // Router.push('/state/ca/')
  //   }
  // }
  const ToggleTheme = () => {
    return (
      <Toggle
        defaultChecked={themeName === 'dayTheme' ? true : false}
        icons={false}
        aria-label='Set Day|Night Mode'
        onChange={() => setThemeName(themeName === 'dayTheme' ? 'nightTheme' : 'dayTheme')}
        />
    )
  }
  return (
    <>
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
        loadingClassNames="loading-indicator"
      >
        <Component {...pageProps} ToggleTheme={ToggleTheme} manageHistory={manageHistory} key={router.asPath} />
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