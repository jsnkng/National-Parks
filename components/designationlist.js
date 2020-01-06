import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({ highlighted, setHighlighted }) => {

  return (
    <DesignationList>
      <Link href='/designation/[designation]' as='/designation/National%20Monument/'>
          <a>National Monument</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Military%20Park/'>
        <a>National Military Park</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Preserve/'>
        <a>National Preserve</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Park/'>
        <a>National Park</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/Park/'>
        <a>Park</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Memorial/'>
        <a>National Memorial</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Heritage%20Area/'>
        <a>National Heritage Area</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Scenic%20Trail/'>
        <a>National Scenic Trail</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/Part%20of%20Statue%20of%20Liberty%20National%20Monument/'>
        <a>Part of Statue of Liberty National Monument</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Historic%20Park/'>
        <a>National Historic Park</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Historic%20Site/'>
        <a>National Historic Site</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Historical%20Park/'>
        <a>National Historical Park</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Historical%20Reserve/'>
        <a>National Historical Reserve</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Heritage%20Corridor/'>
        <a>National Heritage Corridor</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Geologic%20Trail/'>
        <a>National Geologic Trail</a>
      </Link>
      <Link href='/designation/[designation]' as='/designation/National%20Recreation%20Area/'>
        <a>National Recreation Area</a>
      </Link>
    </DesignationList>
  )
}


export default Component

const DesignationList = styled.div`
  padding: 2em 0 1.125em .5em; 
  columns: 2;
  ${SuperQuery().minWidth.sm.css`
    columns: 3;
  `}
  ${SuperQuery().minWidth.md.css`
    columns: 5;
  `}
  ${SuperQuery().minWidth.lg.css`
    columns: 3;
  `}
  a {
    color:  ${({ theme }) => theme.colors.color_one};
    display: block;
    letter-spacing: -1px;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.2;
    letter-spacing: -.5px;
    text-decoration: none;
    margin: 0;
    padding: .5em;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
    font-size: .875em;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: .75em;
      padding: .25em;
    `}
  }
  a.highlight , a:hover  {
    color:  ${({ theme }) => theme.colors.color_three};
    text-decoration: underline;
  }
`
