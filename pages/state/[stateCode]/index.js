import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query'
import states from '../../../components/datastates'

import Park__Component from '../../../components/park'
import MapLive__Component from '../../../components/maplive'

const Parks = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)
  props.setPageTitle("U.S. National Parks")
  props.setPageSubTitle("")
  props.setPageStateCode(stateCode)
console.log(parks)

const latLong = "lat:45.30777545, long:-68.30063316"
let markers = []

  return (
    <ParksWrapper>
      <MapLive__Wrapper>
      <MapLive__Component
          latLong={latLong}
          name={states[stateCode][0]}
          designation="D"
          zoom={7}
          markers={markers}
        />
      </MapLive__Wrapper>
      <ParksContainer>
        { parks.slice(0).map((item) => {
          markers.push({id: item.id, latLong: item.latLong, name: item.name, description: item.description})
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
    </ParksWrapper>
  )
}
  
Parks.getInitialProps = async (context) => {
  const {stateCode} = context.query
  const {origin}  = absoluteUrl(context.req)
  const parksResult = await fetch(`${origin}/api/state/${stateCode}`)
  const result = await parksResult.json()
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
  justify-content: center;
  margin: 0px;
`

const MapLive__Wrapper = styled.div`
  z-index: -10; 
  width: 100%;
  height: 60vh;
  
  max-height: 400px !important;
  ${SuperQuery().minWidth.md.css`
    height: 45vh;
  `}
`
