import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'
import Router from 'next/router'


const Masthead = props => {
  
  return (
    <HeaderMenu>
      <HeaderItem>
        <Link href="/" passHref>
          <a><img className="logo" src="/us-nps.png" width="90" /></a>
        </Link>
        <Link href="/" passHref>
        <h1>{props.pageTitle}</h1>
        </Link>
        <Link href="/" passHref>
        <h2>{props.pageSubTitle}</h2>
        </Link>
      </HeaderItem> 
      <HeaderItem>
        
      </HeaderItem> 
      <HeaderItem>
        <>
        <Link href={`/state/[stateCode]/`} as={`/state/${props.pageStateCode}`} passHref>
          <h3><a>{props.pageSubSubTitle}</a></h3>
        </Link>
        <h4>{props.pageSubSubSubTitle}</h4>
        </>
      </HeaderItem> 
      {/* <HeaderItem>
        <>
        <Link href={`/state/[stateCode]/`} as={`/state/${props.pageStateCode}`} passHref>
          <h3><a>{props.pageSubSubTitle}</a></h3>
        </Link>
        <h4>{props.pageSubSubSubTitle}</h4>
        </>
      </HeaderItem>  */}
    </HeaderMenu>
  )
}
export default Masthead

const HeaderMenu = styled.header`
  display: grid;
  grid-template-columns: 6fr 3fr ;
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 52px;
  padding: .5em;
  z-index: 120;
  margin: 0;
  ${SuperQuery().minWidth.sm.css`
    grid-template-columns: 4fr 4fr;
    height: 60px;
  `}
`
const HeaderItem = styled.div`
 .logo {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    ${SuperQuery().minWidth.sm.css`
      top: 10px;
      right: 10px;
      width: 60px;
    `}
  }

  h1 {
    position: absolute;
    top: 5px;
    left: 20px;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1.25em;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 5px;
      font-size: 1.5em;
    `}
   
  }
  h2 {
    position: absolute;
    top: 27px;
    left: 20px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: 1em;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 32px;
      font-size: 1.125em;
    `}
   
  }
  h3{
    position: absolute;
    top: 5px;
    right: 67px;
    text-align: right;
    font-weight: 600;
    letter-spacing: -.5px;
    line-height: 1;
    font-size: 1.25em;
    ${SuperQuery().minWidth.sm.css`
      top: 5px;    
      right: 80px;
      font-size: 1.5em;
    `}
  }
  h4 { 
    display: block;
    position: absolute;
    top: 23px;
    right: 67px;
    font-weight: 200;
    font-size: 1em;
    ${SuperQuery().minWidth.sm.css`
      top: 32px;
      right: 80px;
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
