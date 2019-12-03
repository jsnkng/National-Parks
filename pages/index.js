import React from 'react'
import styled from 'styled-components';
import Head from 'next/head'
import Masthead from '../components/masthead';
import Map from '../components/map';
import SelectState from '../components/selectstate';

const Home = () => {
  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <Masthead pageTitle="U.S. National Parks"></Masthead>
    <Map />
    <SelectState />
        
  </>
  )
}

export default Home
