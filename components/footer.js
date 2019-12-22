import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Footer = props => {
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
     
    </FooterMenu>
  )

}
export default Footer

const FooterMenu = styled.footer`
  position: relative;
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
    top: 12px;
    right: 12px;
    width: 32px;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 16px;
      right: 12px;
      width: 45px;
    `}
    
  }
  h3 {
    position: absolute;
    top: 2px;
    right: 50px;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1.25em;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 5px;
      right: 65px;
    `}
  }
  h4 {
    position: absolute;
    top: 21px;
    right: 50px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .95em;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 29px;
      right: 65px;
    `}
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
