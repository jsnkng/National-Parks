import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query';

import Park from '../../../components/parks';
import Masthead from '../../../components/masthead';
import Footer from '../../../components/footer'

import states from '../../../components/statesLookup';

const Parks = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)
 
  return (
    <ParksWrapper>
      <Masthead pageTitle="U.S. National Parks" stateCode={stateCode}></Masthead>
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
      <Footer pageTitle={`${states[stateCode]}`} subTitle="National Parks" stateCode={stateCode}></Footer>
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

  ${'' /* ${SuperQuery().minWidth.md.css`
    margin: 20px;
  `} */}
`
