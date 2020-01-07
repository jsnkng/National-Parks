import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Router from 'next/router'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import states from '../config/states'
import MapDiagram from '../components/mapdiagram'

function handleStateChange(e) {
  e.preventDefault()
  Router.push('/state/[stateCode]', e.target.value)
}
function handleDesignationChange(e) {
  e.preventDefault()
  Router.push('/designation/[designation]', e.target.value)
}

const Component = () => {
  const router = useRouter()
  const [highlighted, setHighlighted] = useState('')


  return (
  <FindAPark>
    <Row__Decorated>
      <Col__Decorated xs={12} sm={12} md={4}>
        <h2>Explore America’s National Parks</h2>
        {/* <h3>O beautiful for spacious skies,<br />
            For amber waves of grain,<br />
            For purple mountain majesties<br />
            Above the fruited plain!<br />
            America! America!</h3> */}
       
        <h3>Find a Park</h3>
        <select value={`/state/${highlighted}/`} onChange={handleStateChange}>
          <option>By State</option>
          { Object.entries(states).map(([key, value]) => {
            return ( 
              <option     value={`/state/${key}/`} 
                key={key} >
                  {value[0]}
              </option>
            )
          })}
        </select>

        <select value='' onChange={handleDesignationChange}>
          <option>By Designation</option>
          <option value='/designation/National%20Monument/'>
            National Monument
          </option>
          <option value='/designation/National%20Park/'>
            National Park
          </option>
          <option value='/designation/National%20Historic%20Park/'>
            National Historic Park
          </option>
          <option value='/designation/National%20Historical%20Park/'>
            National Historical Park
          </option>
          <option value='/designation/National%20Historic%20Site/'>
            National Historic Site
          </option>
          <option value='/designation/Park/'>
            Park
          </option>
          <option value='/designation/National%20Military%20Park/'>
            National Military Park
          </option>
          <option value='/designation/National%20Battlefield/'>
            National Battlefield
          </option>
          <option value='/designation/National%20Memorial/'>
            National Memorial
          </option>
          <option value='/designation/National%20Heritage%20Corridor/'>
            National Heritage Corridor
          </option>
          <option value='/designation/National%20Historical%20Reserve/'>
            National Historical Reserve
          </option>
          <option value='/designation/National%20Recreation%20Area/'>
            National Recreation Area
          </option>
          <option value='/designation/National%20Heritage%20Area/'>
            National Heritage Area
          </option>
          <option value='/designation/Part%20of%20Statue%20of%20Liberty%20National%20Monument/'>
            Part of Statue of Liberty National Monument
          </option>
          <option value='/designation/National%20Monument%20%26%20Preserve/'>
            National Monument & Preserve
          </option>
          <option value='/designation/National%20Preserve/'>
            National Preserve
          </option>
          <option value='/designation/Cultural%20Heritage%20Corridor/'>
            Cultural Heritage Corridor
          </option>
          <option value='/designation/National%20Historic%20Trail/'>
            National Historic Trail
          </option>
          <option value='/designation/National%20Scenic%20Trail/'>
            National Scenic Trail
          </option>
          <option value='/designation/National%20Geologic%20Trail/'>
            National Geologic Trail
          </option>
          <option value='/designation/Ecological%20%26%20Historic%20Preserve/'>
            Ecological & Historic Preserve
          </option>
          <option value='/designation/National%20Seashore/'>
            National Seashore
          </option>
          <option value='/designation/National%20Recreational%20River/'>
            National Recreational River
          </option>
          <option value='/designation/National%20River%20%26%20Recreation%20Area/'>
            National River & Recreation Area
          </option>
          <option value='/designation/National%20Scenic%20Riverways/'>
            National Scenic Riverways
          </option>
          <option value='/designation/National%20Scenic%20Riverway/'>
            National Scenic Riverway
          </option>
          <option value='/designation/Wild%20%26%20Scenic%20River/'>
            Wild & Scenic River
          </option>
          <option value='/designation/National%20River/'>
            National River
          </option>
          <option value='/designation/National%20Lakeshore/'>
            National Lakeshore
          </option>
          <option value='/designation/International%20Historic%20Site/'>
            International Historic Site
          </option>
          <option value='/designation/International%20Park/'>
            International Park
          </option>
        </select>

      </Col__Decorated>
      <Col__Decorated xs={12} sm={12} md={8}>
        <MapDiagram__Wrapper>
          <MapDiagram
          className="mapdiagram" 
          territories={'none'} 
          highlighted={highlighted} 
          setHighlighted={setHighlighted} />
        </MapDiagram__Wrapper>
      </Col__Decorated>
    </Row__Decorated> 
  </FindAPark>
  )
}

export default Component

const FindAPark = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 120;
  padding: 1.5em .75em;
 
  ${'' /* h3 {
    font-size: 1.5em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -1px;
    margin: .25em auto;
    width: 95%
    ${SuperQuery().minWidth.md.css`
      margin: 1.5em 0 1em 1em;
      font-size: 1.25em;
    `} 
  } */}
  h2 {
      letter-spacing: -1px;
      font-size: 2.625em;
      margin: .25em 0 0 .5em;
      padding: 0 0 .75em 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.625em;
      margin: .75em 0 0 .25em;
    `} 
    ${SuperQuery().minWidth.lg.css`
      font-size: 2.25em;
      margin: .25em 0 0 .5em;
    `} 
  }
  h3 {
    text-align: left;
    font-size: 2.25em;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 1.5em 0 .5em .5em;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.625em;
      margin: .75em 0 0 .25em;
    `} 
    ${SuperQuery().minWidth.lg.css`
      font-size: 1.75em;
      margin: 1em 0 0 .5em;
    `} 
  }

  select {
    display: block;
    font-size: 1.5em;
    outline: none;
    border: none;
    margin: .5em 0 .75em .625em;
    padding: .125em;
    width: 90%;
    ${SuperQuery().minWidth.md.css`
    font-size: 1.25em;
      margin: .5em 0 .75em .25em;
    `} 
    ${SuperQuery().minWidth.lg.css`
      padding: .25em;
      font-size: 1.75em;
      margin: .5em 0 0 .5em;
    `} 
  }
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`

const Col__Decorated = styled(Col)`
  position: relative;
  padding: 0;
`
const MapDiagram__Wrapper = styled.div`
  padding: 1em .25em 1em 1em;  
${SuperQuery().minWidth.md.css`
  padding: 1em 0 0 1em;    
`} 
`
