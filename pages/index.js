import React from 'react'
import styled from 'styled-components';
import Head from 'next/head'
import Masthead from '../components/masthead';
import Map from '../components/map';

const Home = () => {
  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <Masthead pageTitle="National Park Service"></Masthead>
    <Map />
    
    <div>
      {/* Secrets{NPS_API1}, {NPS_KEY1}, {DB_URL1} */}
      Hello{process.env.NPS_URI}, {process.env.NPS_KEY}, {process.env.MONGODB_URI}
    </div>
                  
  </>
  )
}

export default Home
