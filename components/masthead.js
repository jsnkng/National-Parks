import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import states from './statesLookup.js';

const Masthead = props => {

  return (
    <HeaderMenu>
      <HeaderItem>
        <h1>{props.pageTitle}</h1>
      </HeaderItem> 
      <HeaderItem>
        <h2>{props.subTitle}</h2>
        <Link href={`/state/${props.stateCode}`}>
          <h3><a>{states[props.stateCode]}</a></h3>
        </Link>
        <Link href="/">
          <p><a>U.S. Department of the Interior<br />
          National Park Service</a></p>
        </Link>
      </HeaderItem> 
      <HeaderItem>
        <Link href="/">
          <a><img src="/US-National-Parks-logo-sml.gif" /></a>
        </Link>
      </HeaderItem> 
    </HeaderMenu>
  )
}
export default Masthead



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
  height: 70px;

`

const HeaderItem = styled.div`
  padding: 0 10px 0 10px;
  align-items: left;
  box-sizing: border-box;
  list-style-type: none;

  h1 {
    margin: 0;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 2.65em;
    width: 100%;
  }
  h2 {
    margin: 4px 0 0 0;
    font-weight: 600;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: .85em;
    width: 100%;
  }
  h3 {
    margin: 0;
    font-weight: 400;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: .85em;
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
