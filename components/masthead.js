import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Masthead = props => {
  return (
    <HeaderMenu>
      <Link href="/" passHref>
        <img className="logo" src="/us-nps.png" width="90" />
      </Link>
      <Link href="/" passHref>
        <h1>{props.pageTitle}</h1>
      </Link>
      <Link href="/" passHref>
        <h2>{props.pageSubTitle}</h2>
      </Link>
      <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
        <h3>{props.pageSubSubTitle}</h3>
      </Link>
      <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
        <h4>{props.pageSubSubSubTitle}</h4>
      </Link>
    </HeaderMenu>
  )
}
export default Masthead

const HeaderMenu = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: 6fr 3fr ;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  z-index: 120;
  ${SuperQuery().minWidth.sm.css`
    grid-template-columns: 4fr 4fr;
    height: 90px;
  `}
 .logo {
    position: absolute;
    top: 8px;
    right: 10px;
    width: 35px;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 10px;
      right: 12px;
      width: 70px;
    `}
  }
  h1 {
    position: absolute;
    top: 5px;
    left: 10px;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1em;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 5px;
      left: 15px;
      font-size: 1.5em;
    `}
  }
  h2 {
    position: absolute;
    top: 20px;
    left: 10px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .875em;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 35px;
      left: 15px;
      font-size: 1.125em;
    `}
  }
  h3{
    position: absolute;
    top: 5px;
    right: 55px;
    text-align: right;
    font-weight: 600;
    letter-spacing: -.5px;
    line-height: 1;
    font-size: 1em;
    ${SuperQuery().minWidth.sm.css`
      top: 5px;    
      right: 95px;
      font-size: 1.5em;
    `}
  }
  h4 { 
    display: block;
    position: absolute;
    top: 20px;
    right: 55px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .875em;
    ${SuperQuery().minWidth.sm.css`
      top: 35px;
      right: 95px;
      font-size: 1em;
    `}
  }
`
