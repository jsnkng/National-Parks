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
  // useEffect(() => {
  //     setCards(cards)
  //   }, [cards])
  


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
  const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
  const url = `https://developer.nps.gov/api/v1/parks?stateCode=${query.stateCode}&fields=images&api_key=${apiKey}`
  console.log(url)

    const res = await fetch(url)

    //const res = await fetch('http://localhost:3000/api/mockParks')
    const result = await res.json()
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
