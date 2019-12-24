import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Masthead = props => {

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }
  
  return (
    <HeaderMenu >
      <Link href="/" passHref>
        <Logo className="logo" src="/us-nps.png" width="90" onClick={props.pageStateCode ? handleBannerClick : ""} />
      </Link>
      <Link href="#" passHref>
        <Title>{props.pageTitle}</Title>
      </Link>
      <Link href="#" passHref>
        <Title__Sub>{props.pageSubTitle}</Title__Sub>
      </Link>
      { props.pageLinkState !== false &&
      <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
        <Title__Secondary onClick={handleBannerClick}>{props.pageSubSubTitle}</Title__Secondary>
      </Link>
      }
      <Spinner className={isSpinnerVisible ? 'show' : 'hide'}>
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
          Loading
        </div>
      </Spinner>
    </HeaderMenu>
  )
}
export default Masthead

const HeaderMenu = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  z-index: 120;
  ${SuperQuery().minWidth.sm.css`
    grid-template-columns: 4fr 4fr;
    height: 80px;
  `}
`

const Logo = styled.img.attrs()`
  position: absolute;
  top: 12px;
  left: 8px;
  width: 30px;
  cursor: pointer;

  ${SuperQuery().minWidth.sm.css`
    top: 13px;
    left: 12px;
    width: 52px;
  `}
`
const Title = styled.span.attrs()`
  float: left;
  clear: left;
  margin: 13px 0 0 45px;
  padding: 0;
  text-align:left;
  font-weight: 700;
  letter-spacing: -.5px;
  line-height: 1;
  font-size: .875em;
  max-width: 60%;
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${SuperQuery().minWidth.sm.css`
    margin: 13px 0 0 75px;
    font-size: 1.5em;
    letter-spacing: -1.5px;
  `}
`
const Title__Sub = styled.div.attrs()`
  float: left;
  clear: left;
  margin: 0 0 0 45px;
  padding: 0;
  text-align:left;
  font-weight: 500;
  letter-spacing: -.5px;
  line-height: 1;
  font-size: .75em;
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
  margin: 17px 10px 0 0;
  padding: 0;
  top: 0;
  right: 0;
  text-align: right;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 1;
  font-size: 1.5em;
  max-width: 50%;
  cursor: pointer;
  text-decoration: none;
  border: none;
  ${SuperQuery().minWidth.sm.css`
    margin: 23px 10px 0 0;
    font-size: 2.25em;
  `}
`
const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 400;
  background-color: ${props => props.theme.colors.spinner};
  color: ${props => props.theme.colors.text};
  font-size: .7em;
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`
