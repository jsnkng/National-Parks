import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Park from '../../../components/parks';
import Masthead from '../../../components/masthead';
import states from '../../../components/statesLookup.js';
import absoluteUrl from 'next-absolute-url'

const Parks = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)
 
  // console.log(stateCode)
  // console.log(parks)


  return (
    <ParksWrapper>
      <Masthead pageTitle={`${states[stateCode]}`}>></Masthead>
      <ParksContainer>
        { parks.slice(0).map((item) => {
            return(
              <Park 
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
  margin: 20px;
`
