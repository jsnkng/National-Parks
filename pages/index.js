import React, {useState} from 'react'
import styled from 'styled-components';
import Head from 'next/head'
import Masthead from '../components/masthead';
import Footer from '../components/footer'
import MapDiagram from '../components/MapDiagram';
import TerritoryList from '../components/territorylist';
import SuperQuery from '@themgoncalves/super-query'


const Home = () => {
  const [highlighted, setHighlight] = useState(null)
  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <Masthead highlighted={highlighted} pageTitle="U.S. National Parks"></Masthead>
    
    <MapDiagramWrapper>
      <MapDiagram highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} states={'none'} />
    </MapDiagramWrapper>

    <TerritoryListWrapper>
      <TerritoryList highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} />
    </TerritoryListWrapper>

    <Footer highlighted={highlighted} pageTitle="U.S. National Parks" ></Footer>
  </>
  )
}

export default Home

const MapDiagramWrapper = styled.div`
  
  margin: 2em;
  max-width: 800px;

  ${SuperQuery().minWidth.md.css`
    margin: 2em auto;
  `}

`
const TerritoryListWrapper = styled.div`
  
  margin: 2em 5em;
  max-width: 800px;

  ${SuperQuery().minWidth.md.css`
    margin: 2em auto;
  `}

`
