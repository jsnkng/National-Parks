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
    {/* https://www.image-maps.com/maps/united_states/?state=Virginia */}
    <Map />
    
                  
  </>
  )
        }


export default Home