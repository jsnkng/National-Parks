import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import ParkBanner from './park'

const FeaturedGrid = ({ parks }) => {
  console.log(parks)
  return (
    <Row>
    <Col__Decorated xs={12} sm={6} md={6}>
      <h1>Explore America’s National Parks</h1>
      <h2>A State-by-State Guide</h2>

    </Col__Decorated>
    <Col__Decorated xs={12} sm={6} md={6}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[0].states.split(',')[0].toLowerCase()}/park/${parks[0].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[0].images.length !== 0 ? `${process.env.AWS_URI}${parks[0].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[0].name}
            subtitle={parks[0].designation}
          />
        </a>
      </Link>
      </Col__Decorated>
      <Col__Decorated xs={12} sm={6} md={4}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[1].states.split(',')[0].toLowerCase()}/park/${parks[1].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[1].images.length !== 0 ? `${process.env.AWS_URI}${parks[1].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[1].name}
            subtitle={parks[1].designation}
          />
        </a>
      </Link>
        </Col__Decorated>
      <Col__Decorated xs={12} sm={6} md={4}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[2].states.split(',')[0].toLowerCase()}/park/${parks[2].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[2].images.length !== 0 ? `${process.env.AWS_URI}${parks[2].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[2].name}
            subtitle={parks[2].designation}
          />
        </a>
      </Link>
        </Col__Decorated>
       <Col__Decorated xs={12} sm={6} md={4}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[3].states.split(',')[0].toLowerCase()}/park/${parks[3].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[3].images.length !== 0 ? `${process.env.AWS_URI}${parks[3].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[3].name}
            subtitle={parks[3].designation}
          />
        </a>
      </Link>
        </Col__Decorated>
      <Col__Decorated xs={12} sm={6} md={6}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[4].states.split(',')[0].toLowerCase()}/park/${parks[4].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[4].images.length !== 0 ? `${process.env.AWS_URI}${parks[4].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[4].name}
            subtitle={parks[4].designation}
          />
        </a>
      </Link>
        </Col__Decorated>
      <Col__Decorated xs={12} sm={6} md={6}>
      <Link href="/state/[stateCode]/park/[parkCode]" as={`/state/${parks[5].states.split(',')[0].toLowerCase()}/park/${parks[5].parkCode}`} passHref>
        <a>
          <ParkBanner 
            backgroundURL={
              parks[5].images.length !== 0 ? `${process.env.AWS_URI}${parks[5].images[0].url.replace(/[/:-]/g, '_')}` : 
              '/noimage.jpg'
            }
            title={parks[5].name}
            subtitle={parks[5].designation}
          />
        </a>
      </Link>
        </Col__Decorated>{/**/}
    </Row>
  )
}

export default FeaturedGrid

const Image = styled.div`
  position: relative;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0;
  width: 100%;
  height: 25vh;
  min-height:400px;
  max-width: 100%;
  -webkit-animation: myfirst 1s; /* Chrome, Safari, Opera */
  animation: myfirst 1s;
${'' /* 
  ${SuperQuery().minWidth.md.css`
    height: 80vw;
    max-height: 82vh;
    min-height:600px;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 80vw;
    max-height: 91vh;
  `} */}

  .caption {
    background-color: ${({ theme }) => theme.colors.trans_back};
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -1.5px;
    bottom: 0;
    right: 0;
    margin: 0;
    padding: .5rem;
    width: 100%;
    z-index: 20;

    h2 {
      float: left;
      margin: 0;
      font-weight: 700;
      letter-spacing: -1.5px;
      line-height: 1;
      font-size: 1.25rem;
      font-weight: 600;
      border: none;
    }
    h3 {
      position: absolute;
      top: 2.25rem;
      right: .5rem;
      text-align: right;
      font-weight: 400;
      font-size: 1rem;
      line-height: .85;
      letter-spacing: -1px;
      margin: 0;
      padding: 0;
    }
  }
`
const Col__Decorated = styled(Col)`
  padding: 0;
`