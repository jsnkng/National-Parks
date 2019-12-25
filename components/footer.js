import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Footer = props => {
  console.log(props)
  return (
    <FooterMenu>
      <Link href="/" passHref>
        <img className="logo" src="/us-nps.png" width="90" />
      </Link>
      <Link href="/" passHref>
        <h3>National Park Service</h3>
      </Link>
      <Link href="/" passHref>
        <h4>A State-by-State Guide</h4>
      </Link>
      <p><a href="https://jsnkng.com">Jason King</a> | 2019</p>
      {/* <p><a onClick={() => props.setTheme()}>Toggle Theme</a></p> */}
    </FooterMenu>
  )
}

export default Footer

const FooterMenu = styled.footer`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  z-index: 120;
 
  .logo {
    position: absolute;
    top: 12px;
    right: 8px;
    width: 26px;
    cursor: pointer;
  }
  h3 {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 13px;
    right: 42px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .6em;
    cursor: pointer;
    text-decoration: none;
    border: none;
  }
  h4 {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 23px;
    right: 42px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .5em;
    cursor: pointer;
    text-decoration: none;
    border: none;
  }
  p {
    font-size: .5em;
    padding: 2em;
    a {
      color: #fff;
      text-decoration:none;
      font-weight: 700;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
