import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import Header from '../components/header'
import Footer from '../components/footer'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'

const Home = props => {
  const pageTransitionDelayEnter = true
  const [loaded, setLoaded] = useState(false)
  const [highlighted, setHighlighted] = useState(null)

  useEffect(() => {
    setLoaded(true)
    props.pageTransitionReadyToEnter()
  }, [])

  if (!loaded) {
    return null
  } else {
    return (
      <>
        <Head>
          <title>National Park Service</title>
        </Head>
        <Header 
          park='National Park Service'
          designation='A State-By-State Guide'
          state='United States'
          stateCode={''}
        />
        <Content>
          <Row>
            <Col xs={12} lg={6}>
              <MapDiagram 
                className="mapdiagram" 
                territories={'none'} 
                highlighted={highlighted} 
                setHighlighted={setHighlighted} />
            </Col>
            <Col xs={12} lg={6}>
              <TerritoryList 
                className="territorylist" 
                highlighted={highlighted} 
                setHighlighted={setHighlighted} />
            </Col> 
          </Row>
        </Content>
        <Footer
          setTheme={props.setTheme}
        />
      </>
    )
  }
}


export default Home

const Content = styled.main`
  padding: 6em 1em 2em 2em;
  min-height: 85vh;
`
