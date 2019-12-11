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
    <TerritoryListWrapper>
      { Object.entries(states).map(([key, value]) => {
        const as = "/state/" + key
        return ( 
          <div key={key} className={props.highlighted === value[0] ? 'highlight' : ''}  
              onMouseOver={() => handleHover(value[0])}
              onMouseOut={() => handleHover(null)}>
            <Link 
              href="/state/[stateCode]" 
              as={as} >
              <a>{value[0]}</a>
            </Link>
          </div>
        )
      })
      }
    </TerritoryListWrapper>
  )
}

export default TerritoryList

const TerritoryListWrapper = styled.div`
  columns: 2;
  
  select {
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 97% 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-left:5px;
    text-align: left;
    white-space: nowrap;
    color:#737373;
    font-weight: bold;
    font-size:12px;
  }
  div {
    width: 140px;
    a {
      font-weight: 500;
      letter-spacing: -.5px;
      text-decoration: none;
      color: #333333;
    }
    &.highlight a, a:hover  {
      color: green;
      font-weight: 700;
      text-decoration: underline;
    }
  }

  ${SuperQuery().minWidth.sm.css`
    columns: 3;
  `
}

`