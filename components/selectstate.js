import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import Link from 'next/link'
import states from './statesLookup'
import SuperQuery from '@themgoncalves/super-query'

const SelectState = () => {
  return (
    <SelectStateWrapper>
    <div className="states__container">
        { Object.entries(states).map(([key, value]) => {
          const as = "/state/" + key
         return ( <div key={key} className="states__item"><Link href="/state/[stateCode]"  as={as}><a>{value}</a></Link></div>)} )
        }
    </div>
    </SelectStateWrapper>
  )
}

export default SelectState

const SelectStateWrapper = styled.div`
  margin: 0 auto;
  min-width:400px;
  max-width: 640px;

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

  .states__container {
    margin: 2em;
    columns: 2;
    ${SuperQuery().minWidth.sm.css`
      columns: 3;
    `}
  }
  .states__item {
    width: 140px;
    a {
      color: #333;
      font-weight: 500;
      letter-spacing: -.5px;
      text-decoration: none;
    }
    a:hover {
      color: #888;
    }
  }
`