import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import states from './datastates'
import SuperQuery from '@themgoncalves/super-query'

const TerritoryList = props => {
  const handleHover = (territory) => {
    props.onHighlight(territory)
  }
  return (
    <TerritoryList__Wrapper>
      { Object.entries(states).map(([key, value]) => {
        return ( 
          <Link href="/state/[stateCode]" as={`/state/${key}`} key={key}>
            <a className={props.highlighted === value[0] ? 'highlight' : ''}  
              onMouseOver={() => handleHover(value[0])}
              onMouseOut={() => handleHover(null)}>
              {value[0]}
            </a>
          </Link>
        )
      })  
      }
    </TerritoryList__Wrapper>
  )
}

export default TerritoryList

const TerritoryList__Wrapper = styled.div`
  columns: 2;
  ${SuperQuery().minWidth.sm.css`
    columns: 3;
  `}
  a {
    display: block;
    font-weight: 500;
    letter-spacing: -.5px;
    text-decoration: none;
    color: #333333;
  }
  a.highlight , a:hover  {
    color: green;
    font-weight: 700;
    text-decoration: underline;
  }
`
