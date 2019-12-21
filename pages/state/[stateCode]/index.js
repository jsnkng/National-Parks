import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../components/datastates'
import Masthead__Component from '../../../components/masthead';
import Footer__Component from '../../../components/footer'

import Park__Component from '../../../components/park'
import MapLive__Component from '../../../components/maplive'

const Parks = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)


let markers = []
// markers.push({id: park.id, latLong: park.latLong, name: park.name, description: park.description}) 

  return (
    <ParksWrapper>
    <Masthead__Component 
      pageTitle={'USA National Park Service'} 
      pageStateCode={stateCode}
      pageSubTitle={'A State-by-State Guide'}
      pageSubSubTitle={states[stateCode][0]}
      pageSubSubSubTitle={''}
    />
      <MapLive__Wrapper>
        <MapLive__Component
            latLong={states[stateCode][2]}
            name={states[stateCode][0]}
            designation="D"
            zoom={6}
            markers={markers}
          />
      </MapLive__Wrapper>
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
      <Footer__Component
        pageTitle={'USA National Park Service'} 
        pageStateCode={stateCode}
        pageSubTitle={'A State-by-State Guide'}
        pageSubSubTitle={states[stateCode][0]}
        pageSubSubSubTitle={''}
       />
    </ParksWrapper>
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
  margin: 0;
`
const ParksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: left;
  margin: 0px;
`

const MapLive__Wrapper = styled.div`
  position:relative;
  width: 100%;
  height: 60vh !important;
  max-width: 100%;
  z-index: 10;
  margin: 80px auto 0;
  ${SuperQuery().minWidth.md.css`
    width: 100%;
    max-height: 400px !important;
  `}
`