import React, { useState } from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import states from '../config/states'
import MapDiagram from '../components/mapdiagram'


const Component = ({manageFuture}) => {
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
        <select value={`/state/${highlighted}/`} onChange={()=>manageFuture('/state/[stateCode]', this.target.value)}>
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

        <select value='' onChange={()=>manageFuture('/designation/[designation]', this.target.value)}>
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
          setHighlighted={setHighlighted} 
          manageFuture={manageFuture}
          />
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
  padding: 1.5rem .75rem;
 
  ${'' /* h3 {
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -1px;
    margin: .25rem auto;
    width: 95%
    ${SuperQuery().minWidth.md.css`
      margin: 1.5rem 0 1rem 1rem;
      font-size: 1.25rem;
    `} 
  } */}
  h2 {
      letter-spacing: -1px;
      font-size: 2.625rem;
      letter-spacing: -1.5px;
      margin: 1.25rem 0 0 .5rem;
      padding: 1.875rem 0 .5rem 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 2.5rem;
      margin: .75rem 0 0 .25rem;
    `} 
    ${SuperQuery().minWidth.lg.css`
      font-size: 3.375rem;
      margin: .25rem 0 0 .5rem;
    `} 
  }
  h3 {
    text-align: left;
    font-size: 2.25rem;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -1px;
    margin: .5rem 0 .5rem .5rem;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.625rem;
      margin: .75rem 0 0 .25rem;
    `} 
    ${SuperQuery().minWidth.lg.css`
      font-size: 1.75rem;
      margin: 1rem 0 0 .5rem;
    `} 
  }

  select {
    display: block;
    background: transparent;
    font-size: 1.5rem;
    outline: none;
    margin: .5rem 0 .75rem .625rem;
    padding: .125rem;
    width: 90%;
    color: ${({ theme }) => theme.colors.text};
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 1ex;
    background-origin: content-box;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnMiIKICAgdmlld0JveD0iMCAwIDM1Ljk3MDk4MyAyMy4wOTE1MTgiCiAgIGhlaWdodD0iNi41MTY5Mzk2bW0iCiAgIHdpZHRoPSIxMC4xNTE4MTFtbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAyLjAxNDUxLC00MDcuMTIyMjUpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHRleHQKICAgICAgIGlkPSJ0ZXh0MzMzNiIKICAgICAgIHk9IjYyOS41MDUwNyIKICAgICAgIHg9IjI5MS40Mjg1NiIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjQwcHg7bGluZS1oZWlnaHQ6MTI1JTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MXB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICB4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4KICAgICAgICAgeT0iNjI5LjUwNTA3IgogICAgICAgICB4PSIyOTEuNDI4NTYiCiAgICAgICAgIGlkPSJ0c3BhbjMzMzgiPjwvdHNwYW4+PC90ZXh0PgogICAgPGcKICAgICAgIGlkPSJ0ZXh0MzM0MCIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo0MHB4O2xpbmUtaGVpZ2h0OjEyNSU7Zm9udC1mYW1pbHk6Rm9udEF3ZXNvbWU7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpGb250QXdlc29tZTtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjFweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIj4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGgzMzQ1IgogICAgICAgICBzdHlsZT0iZmlsbDojMzMzMzMzO2ZpbGwtb3BhY2l0eToxIgogICAgICAgICBkPSJtIDIzNy41NjY5Niw0MTMuMjU1MDcgYyAwLjU1ODA0LC0wLjU1ODA0IDAuNTU4MDQsLTEuNDczMjIgMCwtMi4wMzEyNSBsIC0zLjcwNTM1LC0zLjY4MzA0IGMgLTAuNTU4MDQsLTAuNTU4MDQgLTEuNDUwOSwtMC41NTgwNCAtMi4wMDg5MywwIEwgMjIwLDQxOS4zOTM0NiAyMDguMTQ3MzIsNDA3LjU0MDc4IGMgLTAuNTU4MDMsLTAuNTU4MDQgLTEuNDUwODksLTAuNTU4MDQgLTIuMDA4OTMsMCBsIC0zLjcwNTM1LDMuNjgzMDQgYyAtMC41NTgwNCwwLjU1ODAzIC0wLjU1ODA0LDEuNDczMjEgMCwyLjAzMTI1IGwgMTYuNTYyNSwxNi41NDAxNyBjIDAuNTU4MDMsMC41NTgwNCAxLjQ1MDg5LDAuNTU4MDQgMi4wMDg5MiwwIGwgMTYuNTYyNSwtMTYuNTQwMTcgeiIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");
   ${'' /* background-color: ${({ theme }) => theme.colors.offbackground}; */}
   border:none;


    ${SuperQuery().minWidth.md.css`
    font-size: 1.25rem;
      margin: .5rem 0 .75rem .25rem;
    `} 
    ${SuperQuery().minWidth.lg.css`
      padding: .25rem;
      font-size: 1.75rem;
      margin: .5rem 0 0 .5rem;
    `} 
  }
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`

const Col__Decorated = styled(Col)`
  padding: 0;
  padding: 0;
`
const MapDiagram__Wrapper = styled.div`
  padding: 1rem 0 1rem .25rem;  
${SuperQuery().minWidth.md.css`
  padding: 1rem 0 0 1rem;    
`} 
`
