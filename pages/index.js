import React from 'react'
import styled from 'styled-components';
import Head from 'next/head'
import Masthead from '../components/masthead';
import Map from '../components/map';

const Home = () => {
  
// NPS API
const NPS_API = process.env.NPS_API
const NPS_KEY = process.env.NPS_KEY


// Connection URL
const DB_URL = process.env.DB_URL

  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <Masthead pageTitle="National Park Service"></Masthead>
    <Map />
    
    <div>
      Hello{NPS_API}, {NPS_KEY}, {DB_URL}
    </div>
                  
  </>
  )
        }


export default Home
