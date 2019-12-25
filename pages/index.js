import React, {useState} from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'
import Header__Component from '../components/header';
import Footer__Component from '../components/footer'

const Home = props => {
  console.log(props)
  const [highlighted, setHighlight] = useState(null)
  return (
  <>
    <Head>
      <title>This Doesn't Work</title>
    </Head>
    
    <Header__Component 
      pageTitle={"National Park Service"} 
      pageStateCode={''}
      pageSubTitle={"A State-by-State Guide"}
      pageSubSubTitle={'United States'}
      pageSubSubSubTitle={''} 
      pageLinkState={false}
      />
      <Content__Wrapper>
        <MapDiagram__Wrapper>
          <MapDiagram highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} states={'none'} />
        </MapDiagram__Wrapper>

        <TerritoryList__Wrapper >
          <TerritoryList highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} />
        </TerritoryList__Wrapper>
      </Content__Wrapper>
    <Footer__Component
      pageTitle={'National Park Service'} 
      pageStateCode={''}
      pageSubTitle={'A State-by-State Guide'}
      pageSubSubTitle={''}
      pageSubSubSubTitle={''}
      setTheme={props.setTheme}
      />
  </>
  )
}


export default Home

const Content__Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  padding: 60px 0;
  color: ${props => props.theme.colors.text};
${SuperQuery().minWidth.sm.css`
  padding: 90px 0 80px 0;
`}
 
`
const MapDiagram__Wrapper = styled.div`
  margin: 2em 0 0 .5em;
  max-width: 800px;
  ${SuperQuery().minWidth.md.css`
    margin: 2em auto;
  `}

`
const TerritoryList__Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2em 1em 2em;
  max-width: 610px;
  ${SuperQuery().minWidth.md.css`
    max-width: 800px;
  `}
`