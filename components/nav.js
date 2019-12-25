import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Nav = props => {

  return (
    <Header>
      <Link href="/" passHref>
        <Logo className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
      </Link>
      <Link href="#" passHref>
        <Title>{props.pageTitle}</Title>
      </Link>
      <Link href="#" passHref>
        <Title__Sub>{props.pageSubTitle}</Title__Sub>
      </Link>
      { props.pageLinkState !== false &&
      <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
        <Title__Secondary>{props.pageSubSubTitle}</Title__Secondary>
      </Link>
      }
      { props.pageLinkState === false &&
        <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
          <Title__Secondary>{props.pageSubSubTitle}</Title__Secondary>
        </Link>
      }
    </Header>
  )
}
export default Nav

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
`
const Logo = styled.img.attrs()`
  position: absolute;
  top: 12px;
  left: 8px;
  width: 45px;
  cursor: pointer;

  ${SuperQuery().minWidth.sm.css`
    top: 17px;
    left: 12px;
    width: 52px;
  `}
`
const Title = styled.span.attrs()`
  float: left;
  clear: left;
  margin: 12px 0 0 60px;
  padding: 0;
  text-align:left;
  font-weight: 700;
  letter-spacing: -.5px;
  line-height: 1;
  font-size: 1em;
  max-width: 52%;
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${SuperQuery().minWidth.sm.css`
    margin: 17px 0 0 75px;
    font-size: 1.5em;
    letter-spacing: -1.5px;
  `}
`
const Title__Sub = styled.div.attrs()`
  float: left;
  clear: left;
  margin: 0 0 0 60px;
  padding: 0;
  text-align:left;
  font-weight: 500;
  letter-spacing: -.5px;
  line-height: 1;
  font-size: .875em;
  max-width: 45%;
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${SuperQuery().minWidth.sm.css`
    margin: 0px 0 0 77px;
    font-size: 1.125em;
    letter-spacing: -1.5px;
  `}
`
const Title__Secondary = styled.div.attrs()`
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
  max-width: 50%;
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${SuperQuery().minWidth.sm.css`
    margin: 27px 10px 0 0;
    font-size: 2em;
  `}
`