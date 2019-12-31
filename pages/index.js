import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

import Header from '../components/header'
import Footer from '../components/footer'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'

class Home extends React.Component {
  static pageTransitionDelayEnter = true

  constructor(props) {
    super(props)

    this.state = {
      loaded: false,
      highlighted: null
    }
  }

  componentDidMount() {
    this.props.pageTransitionReadyToEnter()
    this.setState({ loaded: true })
  }

  componentWillUnmount() {
  }

  render() {
    const { loaded } = this.state
    if (!loaded) return null
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
                highlighted={this.state.highlighted} 
                onHighlight={(terr) => this.setState({ highlighted: terr })} />
            </Col>
            <Col xs={12} lg={6}>
              <TerritoryList 
                className="territorylist" 
                highlighted={this.state.highlighted} 
                onHighlight={(terr) => this.setState({ highlighted: terr })} />
            </Col> 
          </Row>
        </Content>
          <Footer
              setTheme={this.props.setTheme}
          />
      </>
    )
  }
}

Home.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

Home.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}

export default Home

const Content = styled.main`
  padding: 8em 2em 2em 2em;
  min-height: 85vh;
`
