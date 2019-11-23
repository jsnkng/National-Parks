import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Card from '../../../components/card';
import Masthead from '../../../components/masthead';
import states from '../../../components/statesLookup.js';


const Parks = props => {
  const router = useRouter()
  const { stateCode } = router.query
  const [parks, setParks] = useState(props.data)
 


  return (
    <CardsWrapper>
    <Masthead pageTitle={`${states[stateCode]}`}>></Masthead>
      <CardsContainer>
        { parks.slice(0).map((item) => {
            return(
              <Card 
                key={item.id} 
                data={item} 
                stateCode={stateCode}
              />
            )
          })
        }
      </CardsContainer>
    </CardsWrapper>
  )
}
  
Parks.getInitialProps = async ({query}) => {
  const parksEndpoint = `http://localhost:3000/api/state/${query.stateCode}`
  const parksResult = await fetch(parksEndpoint)
  const result = await parksResult.json()
  
  
    return result
  }
  
export default Parks

const CardsWrapper = styled.div`
  margin: 0;
`
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: top;
  justify-content: center;
  margin: 20px;
`
