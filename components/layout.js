import React from 'react'
import Head from 'next/head'
import theme from '../config/_themes'

const Layout = props => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <Head>
       
      </Head>

      {children}

    </ThemeProvider>
  )
}

export default Layout