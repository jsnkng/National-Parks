import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Card from '../components/card';

const Parks = props => {
    console.dir('total '+ props.total)
    console.log('data '+ props.data)
  const [parks, setParks] = useState(props.data)
  // useEffect(() => {
  //     setCards(cards)
  //   }, [cards])
  

  const readParks = () => {
    const doReadParks = async () => {
      const res = await fetch('http://localhost:3000/api/mockParks')
      const data = await res.json()
      // setCards([])
      setParks(data)
    }
    doReadParks()
  }


  return (
    <CardsWrapper>
      <CardsContainer>
        { parks.slice(0).reverse().map((item) => {
            return(
              <Card 
                key={item.id} 
                data={item} 
              />
            )
          })
        }
      </CardsContainer>
    </CardsWrapper>
  )
}
  
Parks.getInitialProps = async () => {
    // const res = await fetch('https://developer.nps.gov/api/v1/parks?stateCode=NY&fields=images&api_key=O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj')

    const res = await fetch('http://localhost:3000/api/mockParks')
    console.log('res '+res)
    const result = await res.json()
    console.log('result '+result.total)
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