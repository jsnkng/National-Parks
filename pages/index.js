import React, {useState} from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import FeaturedPark from '../components/featuredpark'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'

const Home = props => {
  props.setPageTitle("U.S. National Parks")
  props.setPageSubTitle("")
  props.setPageStateCode("")

  const [highlighted, setHighlight] = useState(null)
  const [park, setPark] = useState(props.data[0])
  return (
  <>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    
    {/* <FeaturedPark__Wrapper>
      <FeaturedPark park={park} />
    </FeaturedPark__Wrapper> */}

    <MapDiagram__Wrapper>
      <MapDiagram highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} states={'none'} />
    </MapDiagram__Wrapper>

    <TerritoryList__Wrapper>
      <TerritoryList highlighted={highlighted} onHighlight={(terr) => setHighlight(terr)} />
    </TerritoryList__Wrapper>

  </>
  )
}

Home.getInitialProps = async (query) => {
  const parkCode = "deva"
  const { origin } = absoluteUrl(query.req)
  const parksEndpoint = `${origin}/api/parks/${parkCode}`
  const parksResult = await fetch(parksEndpoint)
  const result = await parksResult.json()
  return result
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
