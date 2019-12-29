import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = props => {
  return (
    <Header>
      
      <Link href="/">
        <a className="logo"><img src="/us-nps.png" alt="National Parks Guide" /></a>
      </Link>
      
      <Link href="#">
        <a className="title">{props.title}</a>
      </Link>
      
      <Link href="#">
        <a className="subtitle">{props.subtitle}</a>
      </Link>
      
      { props.stateCode !== undefined &&
      <Link href="/state/[stateCode]/" as={`/state/${props.stateCode}`}>
        <a className="subsubtitle">{props.subsubtitle}</a>
      </Link>
      }

    </Header>
  )
}
export default Component

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.theme.colors.trans_back};
  color: ${props => props.theme.colors.text};
  z-index: 120;

  ${SuperQuery().minWidth.sm.css`
    grid-template-columns: 4fr 4fr;
    height: 90px;
  `}

  .logo {
    position: absolute;
    top: 11px;
    left: 4px;
    width: 48px;
    cursor: pointer;

    ${SuperQuery().minWidth.sm.css`
      top: 15px;
      left: 6px;
      width: 58px;
    `}
    ${SuperQuery().minWidth.md.css`
      top: 11px;
      left: 8px;
      width: 68px;
    `}
    img {
      width: 100%;
    }
  }

  .title {
    float: left;
    clear: left;
    margin: 20px 0 0 57px;
    padding: 0;
    text-align:left;
    font-weight: 700;
    letter-spacing: -.5px;
    line-height: .9;
    font-size: 1em;
    max-width: 52%;
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
    ${SuperQuery().minWidth.sm.css`
      margin: 22px 0 0 73px;
      font-size: 1.25em;
      letter-spacing: -1.5px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: 24px 0 0 84px;
      font-size: 1.375em;
      line-height: .85;
    `}
  }
  .subtitle {
    float: left;
    clear: left;
    margin: 0 0 0 57px;
    padding: 0;
    text-align:left;
    font-weight: 500;
    letter-spacing: -.5px;
    line-height: 1;
    font-size: .875em;
    max-width: 52%;
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
    ${SuperQuery().minWidth.sm.css`
      margin: 3px 0 0 73px;
      line-height: .75;
      font-size: 1.125em;
      letter-spacing: -1.5px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: 5px 0 0 84px;
      font-size: 1.25em;
    `}
  }
  .subsubtitle {
    position: absolute;
    margin: 14px 10px 0 0;
    padding: 0;
    top: 0;
    right: 0;
    text-align: right;
    font-weight: 600;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1.375em;
    max-width: 46%;
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
    ${SuperQuery().minWidth.sm.css`
      margin: 16px 10px 0 0;
      line-height: .85;
      font-size: 1.75em;
      letter-spacing: -1.5px;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 2.25em;
    `}
  }
`