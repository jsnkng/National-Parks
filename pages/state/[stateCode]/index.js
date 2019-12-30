import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../config/datastates'

import LazyLoad, { forceCheck } from 'react-lazyload'
import Park__Component from '../../../components/park'
import Header from '../../../components/header'
import Footer from '../../../components/footer'
import PropTypes from 'prop-types'

class Parks extends React.Component {
  constructor(props) {
    super(props)
    this.stateName = states[props.state_id] !== undefined && states[props.state_id] !== "" ? states[props.state_id][0] : ""
    this.state = {
      loaded: false,
      title: 'National Park Service', 
      subtitle: 'A State-by-State Guide', 
      subsubtitle: this.stateName,
      state_id: props.state_id,
    }



    this.markers = []
    props.data.slice(0).map((item) => {
      this.markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description, stateCode:this.state.state_id, parkCode:item.parkCode})
    })
  }

  static pageTransitionDelayEnter = true

  static async getInitialProps({ req, query }) {
    const { stateCode } = query
    const { origin }  = absoluteUrl(req)
    const stateResult = await fetch(`${origin}/api/state/${stateCode}`)
    const result = await stateResult.json()
    result.stateCode = stateCode
    return result
  }
  

  componentDidMount() {
    this.props.pageTransitionReadyToEnter()
    this.setState({ loaded: true })
    forceCheck()
  }

  componentWillUnmount() {
  }

  render() {
    const { loaded } = this.state
    if (!loaded) return null
    return (
      <>
        <Head>
          <title>National Park Service Guide to {this.stateName}</title>
        </Head>
        <Header 
            title={this.state.title} 
            subtitle={this.state.subtitle}
            subsubtitle={this.state.subsubtitle}
            stateCode={""}
          />
          <Content>
            { this.props.data.slice(0).map((item) => {
              return(
                <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${this.state.state_id}/park/${item.parkCode}`} passHref key={item.id}>
                  <a>
                    <Park__Component 
                      backgroundURL={item.images === undefined || item.images.length == 0 
                        ? "/noimage.jpg" 
                        : process.env.AWS_URI + item.images[0].url.replace(/[/:-\s]/g, '_')}
                      title={item.name}
                      subtitle={item.designation}
                    />
                  </a>
                </Link>
              )
            })
            }
          </Content>
          <Footer
              setTheme={this.props.setTheme}
          />
      </>
    )
  }
}

Parks.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

Parks.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}

export default Parks


const Content = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin-top: 70px;
  ${SuperQuery().minWidth.sm.css`
    margin-top: 90px;
  `}

`