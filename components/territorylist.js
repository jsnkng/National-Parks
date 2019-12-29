import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import states from '../config/datastates'
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
  padding: 1em 0 1em 1em; 
  letter-spacing: -1px;
  font-weight: 700;
  font-size: 1.5em;
  columns: 2;
  ${SuperQuery().minWidth.sm.css`
    padding: 0;
    font-size: 1em;
    columns: 3;
  `}
  ${SuperQuery().minWidth.lg.css`
    columns: 2;
  `}
  ${SuperQuery().minWidth.xl.css`
    columns: 3;
  `}
  a {
    color:  ${props => props.theme.colors.color_one};
    display: block;
    font-weight: 500;
    letter-spacing: -.5px;
    text-decoration: none;
  }
  a.highlight , a:hover  {
    font-weight: 700;
    text-decoration: underline;
    color:  ${props => props.theme.colors.color_three};
  }
`
