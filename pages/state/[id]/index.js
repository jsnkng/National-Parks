import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import Card from '../../../components/card';
import Masthead from '../../../components/masthead';

const states = {
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}

const Parks = props => {
  const router = useRouter()
  const { id } = router.query
  const [parks, setParks] = useState(props.data)
  // useEffect(() => {
  //     setCards(cards)
  //   }, [cards])
  


  return (
    <CardsWrapper>
    <Masthead pageTitle={`${states[id]}`}>></Masthead>
      <CardsContainer>
        { parks.slice(0).map((item) => {
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
  
Parks.getInitialProps = async ({query}) => {
  const apiKey = 'O5YBusXqpWGTqfOUMaeMNBg6oGfUdeh4vYzjBRvj'
  const url = `https://developer.nps.gov/api/v1/parks?stateCode=${query.id}&fields=images&api_key=${apiKey}`
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
