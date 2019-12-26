import React, { useState } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../components/datastates'
import Header__Component from '../../../components/header'
import Footer__Component from '../../../components/footer'

import Park__Component from '../../../components/park'
// import MapLive__Component from '../../../components/maplive'

const Parks = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)
  let markers = []

  return (
    <>
    <Head>
      <title>This Doesn't Work</title>
    </Head>
    <ParksWrapper>
      <Header__Component 
        pageTitle={'National Park Service'} 
        pageStateCode={stateCode}
        pageSubTitle={'A State-by-State Guide'}
        pageSubSubTitle={states[stateCode][0]}
        pageSubSubSubTitle={''}
        pageLinkState={false}
      />
    
      <ParksContainer>
        { parks.slice(0).map((item) => {
          markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description, stateCode:stateCode, parkCode:item.parkCode})
            return(
              <Park__Component 
                key={item.id} 
                data={item} 
                stateCode={stateCode}
              />
            )
          })
        }
      </ParksContainer>
       {/* <MapLive__Wrapper>
        <MapLive__Component
            latLong={states[stateCode][2]}
            name={states[stateCode][0]}
            designation="D"
            zoom={6}
            markers={markers}
            link={true}
          />
      </MapLive__Wrapper> */}
      <Footer__Component
        pageTitle={'National Park Service'} 
        pageStateCode={stateCode}
        pageSubTitle={'A State-by-State Guide'}
        pageSubSubTitle={states[stateCode][0]}
        pageSubSubSubTitle={''}
        setTheme={props.setTheme}
       />
    </ParksWrapper>
    </>
  )
}
  
Parks.getInitialProps = async (context) => {
  const {stateCode} = context.query
  const {origin}  = absoluteUrl(context.req)
  const stateResult = await fetch(`${origin}/api/state/${stateCode}`)
  const result = await stateResult.json()
  return result
}
  
export default Parks

const ParksWrapper = styled.div`
position:relative;
  padding: 70px 0 0 0;
  ${SuperQuery().minWidth.sm.css`
    padding: 90px 0 0 0;
  `}
`
const ParksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin: 0px;
`
// const MapLive__Wrapper = styled.div`
//   position:relative;
//   height: 600px !important;
//   z-index: 10;
// `