import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'
import { forceCheck } from 'react-lazyload'
import territories from '../../../config/states'

import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Banner from '../../../components/elements/banner'


const Page = ({ result, themeName, setThemeName, pageTransitionReadyToEnter, manageHistory, manageFuture }) => {
  const { data } = result
  const { stateCode }  = result
  
   /* Flag loaded state of page for pageTransitions */
  const [loaded, setLoaded] = useState(false)

  /* Choose a random item to be the hero */
  const [heroIdx, setHeroIdx] = useState(Math.floor(Math.random()*(data.length)))

  /* Create a copy of data  and remove the hero item from it */
  const parks = [ ...data ]
  parks.splice(heroIdx,1)

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoaded(true)
    pageTransitionReadyToEnter()
  }, [])

  useEffect(() => {
    forceCheck()
  })
  if (!loaded) {
    return null
  } else {
    return (
      <>
        <Head>
          <title>National Park Service Guide to {territories[stateCode][0]}</title>  
          <meta property="og:title" key="ogtitle" content={`National Park Service Guide to ${territories[stateCode][0]}`} />
          <meta property="og:type" key="ogtype" content="website" />
          <meta property="og:url" key="ogurl" content={`https://www.natparguides.com/state/${stateCode}/`} />
          <meta property="og:image" key="ogimage" content="https://www.natparguides.com/natparguides_ogimage.jpg" />
          <meta name="description" key="description" content={`National Park Guide to ${territories[stateCode][0]}: There are ${data.length} National Parks in ${territories[stateCode][0]}.`} />
     
        </Head>
      
        <Header 
          title={territories[stateCode][0]}
          title__sub=''
          manageHistory={manageHistory}
          manageFuture={manageFuture}
          lastPage='Home'
        />

        <BackgroundOverlay>
          <Banner
            backgroundURL={
              data[heroIdx].images !== undefined && data[heroIdx].images.length !== 0 
              ? process.env.AWS_URI + data[heroIdx].images[0].url.replace(/[/:-\s]/g, '_')
              : '/noimage.jpg' 
            }
            title={data[heroIdx].name}
            subtitle={data[heroIdx].designation}
            headline={territories[stateCode][0]}
            dimensions={{xl: true, height: '100%', width: '100%', 'minHeight': '100vh', 'minWidth': '100vw'}}
            manageFuture={manageFuture}
            link={{ 
              href: `/state/[stateCode]/park/[parkCode]`, 
              as: `/state/${stateCode}/park/${data[heroIdx].parkCode}`, 
              title: `${territories[stateCode][0]}` 
            }}
            
          />
        </BackgroundOverlay>
             
        <Content>
          <Row__Decorated>
            {
            parks.slice(0).map((item, index) => {
              return(
                <Col__Decorated 
                  xs={12} 
                  sm={6} 
                  md={(index + 1) % 4 === 1 ? 7 
                    : (index + 1) % 4 === 2 ? 5 
                    : (index + 1) % 4 === 3 ? 5 
                    : 7 
                  } 
                  key={index+item.id}
                >
                <Banner
                  backgroundURL={
                    item.images !== undefined && item.images.length !== 0 
                    ? process.env.AWS_URI + item.images[0].url.replace(/[/:-\s]/g, '_')
                    : '/noimage.jpg' 
                  }
                  title={item.name}
                  subtitle={item.designation}
                  dimensions={{xl: false, height: '100%', width: '100%', 'minHeight': '24rem', 'minWidth': '100%'}}
                  manageFuture={manageFuture}
                  link={{ 
                    href: `/state/[stateCode]/park/[parkCode]`, 
                    as: `/state/${stateCode}/park/${item.parkCode}`, 
                    title: `${territories[stateCode][0]}` 
                  }}
                  />
                </Col__Decorated>
              )
            })
            }
          </Row__Decorated>
        </Content>

        <Footer__Wrapper>
          <Footer themeName={themeName} 
            setThemeName={setThemeName}
            manageHistory={manageHistory}
            manageFuture={manageFuture} 
          />
        </Footer__Wrapper>
      </>
    )
  }
}

Page.pageTransitionDelayEnter = true


export async function getStaticProps(context) {
  const apiResult = await fetch(`${process.env.WEB_URI}/state/${context.params.stateCode}`)
  const result = await apiResult.json()
  result.stateCode = context.params.stateCode

  return {
    props: {
       result 
    }, // will be passed to the page component as props
  }

}

export async function getStaticPaths() {
  // Get the paths we want to pre-render from the states configuration file we've already loaded at var = territories
  const paths = Object.entries(territories).map(([key, value]) => {
    return { params: { stateCode: key }}
  })
console.log(paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}


export default Page

const Content = styled.main`
  position:relative;
  margin-top: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  ${'' /* ${SuperQuery().minWidth.of('568px').and.maxWidth.of('896px').and.landscape.css`
    margin-top: calc(100vh - 4rem)
  `} */}
`
const Row__Decorated = styled(Row)`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Col__Decorated = styled(Col)`
  margin: 0;
  padding: 0;
`
const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index:1;
  background-color: ${ ({ theme }) => theme.colors.image_overlay_light };
`
const Footer__Wrapper = styled.div`
    height: 3rem;
    color: ${({ theme }) => theme.colors.text } !important;
  }
`
