import React, { useState } from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import states from '../config/states'
import MapDiagram from '../components/mapdiagram'


const Component = ({manageFuture}) => {
  const [highlighted, setHighlighted] = useState('')

  const handleStateChange = (e) => {
    e.preventDefault()
    manageFuture('/state/[stateCode]', e.target.value)
  }
  const handleDesignationChange = (e) => {
    e.preventDefault()
    manageFuture('/designation/[designation]', e.target.value)
  }

  return (
  <FindAPark>
  <Grid fluid={true}>
    <Row>
      <Col xs={12} sm={12} md={4} style={{position: 'relative'}}>
        <h2>Explore America’s National Parks</h2>
        <h3>Find a Park</h3>
        <select value={`/state/${highlighted}/`} onChange={handleStateChange.bind(this)}>
          <option>By State</option>
          { Object.entries(states).map(([key, value]) => {
            return ( 
              <option value={`/state/${key}/`} 
                key={key} >
                  {value[0]}
              </option>
            )
          })}
        </select>

        <select value='' onChange={handleDesignationChange.bind(this)}>
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

      </Col>
      <Col xs={12} sm={12} md={8}>
          <MapDiagram__Wrapper>
          <MapDiagram
          className="mapdiagram" 
          territories={'none'} 
          highlighted={highlighted} 
          setHighlighted={setHighlighted} 
          manageFuture={manageFuture}
          />
        </MapDiagram__Wrapper>
      </Col>
    </Row> 
    </Grid>
  </FindAPark>
  )
}

export default Component

const FindAPark = styled.div`
  position: relative;
  width: 95vw;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 120;
  padding: 0;
  

  h2 {
    font-size: 2.5rem;
    letter-spacing: -0.1rem;
    line-height: .925;
    padding-bottom: 1rem;
    margin:0 4rem 0 0;
    ${SuperQuery().maxWidth.of('325px').css`
      font-size: 2.375rem;
      padding: 1.875rem 0 .5rem 0;
    `}

    ${SuperQuery().minWidth.sm.css`
    margin:0 15rem 0 0;
    `}
    ${SuperQuery().minWidth.md.css`
    margin:0;
    `} 
    ${SuperQuery().minWidth.lg.css`
      font-size: 3.375rem;
    `} 
  }
  h3 {
    text-align: left;
    font-size: 2rem;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.1rem;
  }

  select {
    display: block;
    background: transparent;
    font-size: 1.5rem;
    outline: none;
    margin: 0.75rem 0 0.75rem -0.125rem;
    padding: 0.125rem;
    width: 90%;
    
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 1ex;
    background-origin: content-box;
    background-image: url("data:image/svg+xml;utf8,<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 492 492' style='enable-background:new 0 0 492 492;' xml:space='preserve'><path d='M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z'/></svg>");
    border:none;
    filter: ${({ theme }) => theme.colors.color_filter};
   ${SuperQuery().maxWidth.of('325px').css`
      margin: 0.5rem 0 0.75rem 0.625rem;
      padding: 0.125rem;
    `}
    ${SuperQuery().minWidth.sm.css`
    padding:0 11rem 0 0;
    `}
    ${SuperQuery().minWidth.md.css`
    padding:0;
    `}
  }
`

const MapDiagram__Wrapper = styled.div`
  margin: 2rem -1.25rem;
  ${SuperQuery().minWidth.md.css`
    margin: 0 -2rem 0 2rem;
  `}
`