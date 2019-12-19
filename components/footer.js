import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Footer = props => {

  return (
    <FooterMenu>
      <FooterItem>
      <>
        <Link href={`/state/[stateCode]/`} as={`/state/${props.pageStateCode}`}>
          <h3><a>{props.pageSubSubTitle}</a></h3>
        </Link>
        <h4>{props.pageSubSubSubTitle}</h4>
        </>
      </FooterItem> 
      <FooterItem>
      <Link href="/">
        <h1>{props.pageTitle}</h1>
        </Link>
        <Link href="/">
        <h2>{props.pageSubTitle}</h2>
        </Link>
      </FooterItem> 
      <FooterItem>
        <Link href="/">
          <a><img src="/us-nps.png" width="90" /></a>
        </Link>
      </FooterItem> 
    </FooterMenu>
  )
}
export default Footer


const FooterMenu = styled.header`
  display: grid;
  grid-template-columns: 6fr 6fr 1fr;
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

const FooterItem = styled.div`
  padding: 0;
  align-items: left;
  box-sizing: border-box;
  list-style-type: none;

  h1 {
    clear:both;
    float: right;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1em;
    margin: .375em .5em 0 .5em;
    cursor: pointer;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5em;
    `}
  }
  h2 {
    clear:both;
    float: right;
    margin: 4px 0 0 0;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .875em;
    margin: 0 .5em 0 .75em;
    cursor: pointer;
    ${SuperQuery().minWidth.md.css`
      font-size: 1em;
    `}
  }
  h3, h4 {
    clear:both;
    float: left;
    text-align: right;
    margin: .25em .5em 0 0;
    font-weight: 600;
    letter-spacing: -.5px;
    line-height: 1;
    font-size: 1em;
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
