import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import states from '../config/states'

const Component = ({ highlighted, setHighlighted }) => {

  return (
    <TerritoryList>
      { Object.entries(states).map(([key, value]) => {
        return ( 
          <Link href="/state/[stateCode]" as={`/state/${key}`} key={key}>
            <a className={highlighted === value[0] ? 'highlight' : ''}  
              onMouseOver={() => setHighlighted(value[0])}
              onMouseOut={() => setHighlighted(null)}>
              {value[0]}
            </a>
          </Link>
        )
      })  
      }
    </TerritoryList>
  )
}


export default Component

const TerritoryList = styled.div`
  padding: 2rem 0 1.125rem .5rem; 
  columns: 2;
  ${SuperQuery().minWidth.sm.css`
    columns: 3;
  `}
  ${SuperQuery().minWidth.md.css`
    columns: 3;
  `}
  ${SuperQuery().minWidth.lg.css`
    columns: 4;
  `}
  a {
    color:  ${({ theme }) => theme.colors.color_one};
    display: block;
    letter-spacing: -1px;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1;
    letter-spacing: -.5px;
    text-decoration: none;
    margin: 0;
    padding: .5rem;
    cursor: pointer;
  }
  a.highlight , a:hover  {
    color:  ${({ theme }) => theme.colors.color_three};
    text-decoration: underline;
  }
`
