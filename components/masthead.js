import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Masthead = props => {

  return (
    <HeaderMenu>
      <HeaderItem>
        <h1>
          <Link href="/">
            <a>{props.pageTitle}</a>
          </Link>
       </h1>
            {props.subTitle}
        
        
      </HeaderItem> 
      <img src="/US-National-Parks-logo-sml.gif" />
    </HeaderMenu>
  )
}
export default Masthead



const HeaderMenu = styled.header`
  background-color: #1e1d1e;
  color: #ffffff;
  font-family: Helvetica;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px;
  margin: 0;
  height: 60px;

  h1 {
    margin: 0;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 2.75em;
    font-weight: 600;
    float: left;
  }
`

const HeaderItem = styled.div`
  padding: 0 10px 0 10px;
  text-align: center;
  box-sizing: border-box;
  list-style-type: none;

  h1 {

    a {
      color: #fff;
      text-decoration: none;
    }
  }
  div {
    float: right;
  }
`
