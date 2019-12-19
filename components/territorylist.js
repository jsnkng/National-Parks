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
          <Link 
            key={key} 
            prefetch
            href="/state/[stateCode]" 
            as={as}>
            <div className={props.highlighted === value[0] ? 'highlight' : ''}  
              onMouseOver={() => handleHover(value[0])}
              onMouseOut={() => handleHover(null)}>
              <a>{value[0]}</a>
            </div>
          </Link>
        )
      })
      }
    </TerritoryListWrapper>
  )
}

export default TerritoryList

const TerritoryListWrapper = styled.div`
  columns: 2;
  
  div {
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
