import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Masthead = props => {
  console.log(props.headInfo)

// const [headInfo, setHeadInfo] = useState(props.headInfo)

// console.log(headInfo)
// console.log(headInfo.pageSubSubTitle)
// console.log(headInfo.pageTitle)
// props.headInfo.setPageTitle("hookabooka-booka")
// console.log(props.headInfo)
  return (
    <HeaderMenu>
      <HeaderItem>
        <Link href="/">
          <a><img src="/us-nps.png" width="90" /></a>
        </Link>
      </HeaderItem> 
      <HeaderItem>
        <Link href="/">
        <h1>{props.pageTitle}</h1>
        </Link>
        <Link href="/">
        <h2>{props.pageSubTitle}</h2>
        </Link>
      </HeaderItem> 
      <HeaderItem>
        <>
        <Link href={`/state/[stateCode]/`} as={`/state/${props.pageStateCode}`}>
          <h3><a>{props.pageSubSubTitle}</a></h3>
        </Link>
        <h4>{props.pageSubSubSubTitle}</h4>
        </>
      </HeaderItem> 
    </HeaderMenu>
  )
}
export default Masthead

const HeaderMenu = styled.header`
  display: grid;
  grid-template-columns: 1fr 6fr 6fr;
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  font-family: Helvetica;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: .5em;
  z-index: 120;
  margin: 0;
  ${SuperQuery().minWidth.md.css`
    grid-template-columns: 1fr 6fr 6fr;
  `}
`
const HeaderItem = styled.div`
  padding: 0;
  align-items: left;
  box-sizing: border-box;
  list-style-type: none;
  h1 {
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1em;
    width: 100%;
    margin: .375em 0 0 .5em;
    cursor: pointer;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5em;
    `}
  }
  h2 {
    margin: 4px 0 0 0;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .875em;
    width: 100%;
    margin: 0 0 0 .75em;
    cursor: pointer;
    ${SuperQuery().minWidth.md.css`
      font-size: 1em;
    `}
  }
  h3, h4 {
    float: right;
    text-align: right;
    margin: .25em .5em 0 0;
    font-weight: 600;
    letter-spacing: -.5px;
    line-height: 1;
    font-size: 1em;
    width: 100%;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5em;
    `}
  }
  h4 { 
    font-weight: 200;
    font-size: .r75em;
    ${SuperQuery().minWidth.md.css`
      font-size: 1em;
    `}
  }
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    }
  p {
    margin: 5px 0;
    font-size: .625em;
  }
`
