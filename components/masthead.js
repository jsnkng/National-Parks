import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import states from './statesLookup.js';
import SuperQuery from '@themgoncalves/super-query'

const Masthead = props => {

  return (
    <HeaderMenu>
      <HeaderItem>
        <Link href="/">
          <a><img src="/US-National-Parks-logo-sml-bw.png" width="42" /></a>
        </Link>
      </HeaderItem> 
      <HeaderItem>
        <h1>{props.pageTitle}</h1>
        <Link href={`/state/[stateCode]/`} as={`/state/${props.stateCode}`}>
        <h2><a>{states[props.stateCode] !== undefined ? states[props.stateCode][0] : props.highlighted}</a></h2>
        </Link>
      </HeaderItem> 
      <HeaderItem>
        <h3>{props.subTitle}</h3>
      </HeaderItem> 
    </HeaderMenu>
  )
}
export default Masthead

const HeaderMenu = styled.header`
  display: grid;
  grid-template-columns: 1fr 12fr 6fr ;
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  font-family: Helvetica;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 15px;
  z-index: 10;
  margin: 0;

  ${SuperQuery().minWidth.md.css`
    height: 60px;
  `}
  ${SuperQuery().minWidth.lg.css`
    height: 70px;
  `}
`

const HeaderItem = styled.div`
  padding: 0;
  align-items: left;
  box-sizing: border-box;
  list-style-type: none;
  h1 {
    margin: 0;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1.5em;
    width: 100%;
  }
  h2 {
    margin: 4px 0 0 0;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: 1em;
    width: 100%;
  }
  h3 {
    float: right;
    text-align: right;
    margin: .85em 1.5em 0 0;
    font-weight: 400;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .75em;
    width: 100%;
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
