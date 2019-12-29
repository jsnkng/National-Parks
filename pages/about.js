import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'
import Header__Component from '../components/header';
import Footer__Component from '../components/footer'

import PropTypes from 'prop-types'

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
    this.timeoutId = setTimeout(() => {
      const { pageTransitionReadyToEnter } = this.props
      pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 200)
  }

  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  render() {
    const { loaded } = this.state
    if (!loaded) return null
    return (
        <>
        <Head>
          <title>National Park Service</title>
        </Head>
        
        <Header__Component 
          pageTitle={"National Park Service"} 
          pageStateCode={''}
          pageSubTitle={"A State-by-State Guide"}
          pageSubSubTitle={'United States'}
       
        />
        <Content__Wrapper>
            <MapDiagram__Wrapper>
                <MapDiagram highlighted={this.state.highlighted} onHighlight={(terr) => this.setState({ highlighted: terr })} states={'none'} />
            </MapDiagram__Wrapper>

            <TerritoryList__Wrapper >
                <TerritoryList highlighted={this.state.highlighted} onHighlight={(terr) => this.setState({ highlighted: terr })} />
            </TerritoryList__Wrapper>
        </Content__Wrapper>
        <Footer__Component
          pageTitle={"National Park Service"} 
          pageStateCode={''}
          pageSubTitle={"A State-by-State Guide"}
          pageSubSubTitle={'United States'}
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