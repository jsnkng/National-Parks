import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'

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
      <Container>
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
          <Box>
            <Box xs={12} lg={6}>
              <MapDiagram 
                className="mapdiagram" 
                territories={'none'} 
                highlighted={highlighted} 
                setHighlighted={setHighlighted} />
            </Box>
            <Box xs={12} lg={6}>
              <TerritoryList 
                className="territorylist" 
                highlighted={highlighted} 
                setHighlighted={setHighlighted} />
            </Box> 
          </Box>
        </Content>
        <Footer
          setTheme={props.setTheme}
        />
      </Container>
    )
  }
}


export default Home

const Content = styled.main`
  padding: 6em 1em 2em 2em;
  min-height: 85vh;
`
