import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../../../config/datastates'
import PropTypes from 'prop-types'
import Header from '../../../../../components/header'
import Footer from '../../../../../components/footer'
import Alerts__Component from '../../../../../components/alerts'
import Articles__Component from '../../../../../components/articles'
import Campgrounds__Component from '../../../../../components/campgrounds'
import Description__Component from '../../../../../components/description'
import Events__Component from '../../../../../components/events'
import NewsReleases__Component from '../../../../../components/newsreleases'
import People__Component from '../../../../../components/people'
import Places__Component from '../../../../../components/places'
import SlideShow__Component from '../../../../../components/slideshow'
import VisitorInfo__Component from '../../../../../components/visitorinfo'
import VisitorCenters__Component from '../../../../../components/visitorcenters'


import LazyLoad, { forceCheck } from 'react-lazyload'

class Park extends React.Component {
  constructor(props) {
    super(props)
    this.park = props.data[0]
    this.alerts = props.alerts.data
    this.events = props.events.data
    this.visitorCenters = props.visitorcenters.data
    this.campgrounds = props.campgrounds.data
    this.newsReleases = props.newsreleases.data
    this.people = props.people.data
    this.places = props.places.data
    this.articles = props.articles.data
    this.parkCode = props.parkCode
    this.stateCode = props.stateCode
    this.stateName = states[props.stateCode] !== undefined && states[props.stateCode] !== "" ? states[props.stateCode][0] : ""
    this.state = {
      loaded: false,
      title: this.park.name, 
      subtitle: this.park.designation, 
      subsubtitle: states[props.stateCode] !== undefined && states[props.stateCode] !== "" ? states[props.stateCode][0] : "",
      state_id: props.stateCode,
    }

    this.markers = [{id: this.park.id, latLong: this.park.latLong, name: this.park.name, description: this.park.description}]
    
    this.visitorCenters !== undefined && this.visitorCenters.length != 0 &&
    this.visitorCenters.slice(0).map((item) => {
      this.markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description}) 
    })
    this.campgrounds !== undefined && this.campgrounds.length != 0 &&
    this.campgrounds.slice(0).map((item) => {
      this.markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description})
    })
    this.places !== undefined && this.places.length != 0 &&
    this.places.slice(0).map((item) => {
      this.markers.push({id: item.id, latLong: item.latLong, name: item.title, description: item.listingdescription})
    })
  } 

  static pageTransitionDelayEnter = true

  static async getInitialProps({ req, query }) {
    const { stateCode } = query
    const { parkCode } = query
    const { origin } = absoluteUrl(req)
    const parkResult = await fetch(`${origin}/api/parks/${parkCode}`)
    const result = await parkResult.json()
    result.stateCode = stateCode
    result.parkCode = parkCode
    return result
  }
  
  componentDidMount() {
    // this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
      forceCheck()
  // },2500)
  }

  componentWillUnmount() {
  }

  render() {
    const { loaded } = this.state
    if (!loaded) return null
    return (
    <>
      <Head>
        <title>{this.stateName} | {this.park.name} {this.park.designation}</title>
      </Head>
      <Header 
          title={this.state.title.replace(/&#333;/gi, "ō").replace(/&#257;/gi, "ā")} 
          subtitle={this.state.subtitle}
          subsubtitle={this.state.subsubtitle}
          stateCode={this.state.state_id}
      />
      <Content>
        { this.park.images !== undefined && this.park.images.length !== 0 &&
        <SlideShow__Component park={this.park} />
        }

        <Description__Component park={this.park} />

        { this.alerts !== undefined && this.alerts.length != 0 &&
        <Alerts__Component alerts={this.alerts} />
        }

        <VisitorInfo__Component park={this.park} markers={this.markers} />
        
        { this.events !== undefined && this.events.length != 0 &&
        <Events__Component park={this.park} events={this.events} />
        }
        { this.visitorCenters !== undefined && this.visitorCenters.length != 0 &&
        <VisitorCenters__Component park={this.park} visitorCenters={this.visitorCenters} />
        }
        { this.campgrounds !== undefined && this.campgrounds.length != 0 &&
        <Campgrounds__Component park={this.park} campgrounds={this.campgrounds} />
        }
        { this.newsReleases !== undefined && this.newsReleases.length != 0 &&
        <NewsReleases__Component park={this.park} newsReleases={this.newsReleases} />
        }
        { this.places !== undefined && this.places.length != 0 &&
        <Places__Component park={this.park} places={this.places} />
        }
        { this.articles !== undefined && this.articles.length != 0 &&
        <Articles__Component park={this.park} articles={this.articles} />
        }
        { this.people !== undefined && this.people.length != 0 &&
        <People__Component park={this.park} people={this.people} />
        } 
      </Content>
      <Footer
          setTheme={this.props.setTheme}
      />
    </>
    )
  }
}

Park.propTypes = {
  pageTransitionReadyToEnter: PropTypes.func,
}

Park.defaultProps = {
  pageTransitionReadyToEnter: () => {},
}

export default Park

const Content = styled.main`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  margin-top: 70px;
  ${SuperQuery().minWidth.sm.css`
    margin-top: 90px;
  `}

  h4 a {
    color: ${props => props.theme.colors.color_two};
  }
  a {
    color: ${props => props.theme.colors.color_one};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`