import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import absoluteUrl from 'next-absolute-url'
import SuperQuery from '@themgoncalves/super-query';

import Park__Component from '../../../components/park';
import Masthead__Component from '../../../components/masthead';
import Footer__Component from '../../../components/footer'

import states from '../../../components/datastates';

const Parks = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)
 
  return (
    <ParksWrapper>
      <Masthead__Component pageTitle="U.S. National Parks" stateCode={stateCode} />
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
      <Footer__Component pageTitle={`${states[stateCode][0]}`} subTitle="National Parks" stateCode={stateCode} />
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
