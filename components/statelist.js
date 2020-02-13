import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import territories from '../config/states'


const Component = () => {
  return (
    <StateList>
      <ul>
        { Object.entries(territories).map(([key, value]) => {
          return ( 
            <li>
              <Link href={`/state/[stateCode]`} as={`/state/${key}/`} key={key}>
              <a>
                {territories[key][0]}
              </a>
            </Link>
            </li>
          )
        })}
      </ul>
    </StateList>
  )
}
  
export default Component

const StateList = styled.div`
  background: rgba(25,25,25,0.6);
  margin: 1rem 0;
  padding: 1.25rem 1rem;
  columns: auto 9rem;
  font-size: 1.25rem;
  font-weight: 400; 
  border-radius: 4px;
  ul, li {
    list-style-type: none;
    margin: 0;
    padding:0;
  }
  ${SuperQuery().minWidth.sm.css`
    columns: auto 16rem;
    font-size: 1.75rem;
  `}
`
