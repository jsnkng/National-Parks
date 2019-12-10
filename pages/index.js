import React, {useState} from 'react'
import styled from 'styled-components';
import Head from 'next/head'
import Masthead from '../components/masthead';
import MapDiagram from '../components/map';
import TerritoryList from '../components/territorylist';


const Home = () => {
  const [highlighted, setHighlight] = useState(null)
  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <Masthead highlighted={highlighted} pageTitle="U.S. National Parks"></Masthead>
    
    <MapDiagram highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} />
    <TerritoryList highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} />
  </>
  )
}

export default Home
