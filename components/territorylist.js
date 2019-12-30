import styled from 'styled-components'
import Link from 'next/link'
import states from '../config/datastates'
import SuperQuery from '@themgoncalves/super-query'

const Component = props => {
  const handleHover = (territory) => {
    props.onHighlight(territory)
  }
  return (
    <TerritoryList>
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
    </TerritoryList>
  )
}

export default Component

const TerritoryList = styled.div`
  padding: 2em 0; 
  columns: 2;
  ${SuperQuery().minWidth.sm.css`
    columns: 2;
  `}
  ${SuperQuery().minWidth.md.css`
    columns: 3;
    font-size: .75em;
  `}
  a {
    color:  ${props => props.theme.colors.color_one};
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
    color:  ${props => props.theme.colors.color_three};
    text-decoration: underline;
  }
`
