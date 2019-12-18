import React, {useState} from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'

const Home = props => {
  props.setPageTitle("U.S. National Parks")
  props.setPageSubTitle("")
  props.setPageStateCode("")

  const [highlighted, setHighlight] = useState(null)
  console.log(highlighted)
  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    <MapDiagram__Wrapper>
      <MapDiagram highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} states={'none'} />
    </MapDiagram__Wrapper>

    <TerritoryList__Wrapper>
      <TerritoryList highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} />
    </TerritoryList__Wrapper>

  </>
  )
}


export default Home

const FeaturedPark__Wrapper = styled.div`
  margin: 2em;
  max-width: 800px;
  ${SuperQuery().minWidth.md.css`
    margin: 2em auto;
  `}
`
const MapDiagram__Wrapper = styled.div`
  margin: 2em;
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
