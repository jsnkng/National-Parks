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
  padding: 2em 0 1.125em .5em; 
  columns: 2;
  ${SuperQuery().minWidth.sm.css`
    columns: 2;
    font-size: .625em;
  `}
  ${SuperQuery().minWidth.md.css`
    columns: 3;
  `}
  a {
    color:  ${({ theme }) => theme.colors.color_one};
    display: block;
    letter-spacing: -1px;
    font-weight: 700;
    font-size: 1.125em;
    line-height: 1.2;
    letter-spacing: -.5px;
    text-decoration: none;
    margin: .375em 0;
    padding: .125em;
  }
  a.highlight , a:hover  {
    color:  ${({ theme }) => theme.colors.color_three};
    text-decoration: underline;
  }
`
