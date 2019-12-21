import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Footer = props => {

  return (
    <FooterMenu>
      <FooterItem>
      <>
        <Link href={`/state/[stateCode]/`} as={`/state/${props.pageStateCode}`} passHref>
          <h3><a>{props.pageSubSubTitle}</a></h3>
        </Link>
        <h4>{props.pageSubSubSubTitle}</h4>
        </>
      </FooterItem> 
      <FooterItem>
      <Link href="/" passHref>
        <h1>{props.pageTitle}</h1>
        </Link>
        <Link href="/" passHref>
        <h2>{props.pageSubTitle}</h2>
        </Link>
      </FooterItem> 
      <FooterItem>
        <Link href="/">
          <a><img className="logo" src="/us-nps.png" width="90" /></a>
        </Link>
      </FooterItem> 
    </FooterMenu>
  )
}
export default Footer


const FooterMenu = styled.header`
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
`
const FooterItem = styled.div`
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
