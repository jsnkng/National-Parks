import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import states from './datastates';

const Footer = props => {

  return (
    <HeaderMenu>
      <HeaderItem>
        <h1>{props.pageTitle}</h1>
        <Link href={`/state/[stateCode]/`} as={`/state/${props.stateCode}`}>
        <h2><a>{states[props.stateCode] !== undefined ? states[props.stateCode][0] : props.highlighted}</a></h2>
        </Link>
      </HeaderItem> 
      <HeaderItem>
        <h3>{props.subTitle}</h3>
      </HeaderItem> 
      <HeaderItem>
        <Link href="/">
          <a><img src="/US-National-Parks-logo-sml-bw.png" width="32" /></a>
        </Link>
      </HeaderItem> 
    </HeaderMenu>
  )
}
export default Footer


const HeaderMenu = styled.header`
  display: grid;
  grid-template-columns: 12fr 6fr 1fr;
  background-color: #1e1d1e;
  color: #ffffff;
  font-family: Helvetica;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  margin: 0;

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
