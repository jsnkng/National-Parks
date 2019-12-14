import React, { useState } from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import absoluteUrl from 'next-absolute-url'

import Park__Component from '../../../components/park'

import states from '../../../components/datastates'

const Parks = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)
  props.setPageTitle("U.S. National Parks")
  props.setPageSubTitle("")
  props.setPageStateCode(stateCode)

  console.log("deez",props)
  return (
    <ParksWrapper>
      <ParksContainer>
        { parks.slice(0).map((item) => {
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
