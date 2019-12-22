import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Masthead = props => {

  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)

  const handleBannerClick = () => {
    setIsSpinnerVisible(true)
  }
  console.log(props)
  console.log(props.pageStateCode)
  
  return (
    <HeaderMenu >
      <Link href="/" passHref>
        <img className="logo" src="/us-nps.png" width="90"  onClick={props.pageStateCode ? handleBannerClick : ""} />
      </Link>
      <Link href="#" passHref>
        <h1>{props.pageTitle}</h1>
      </Link>
      <Link href="#" passHref>
        <h2>{props.pageSubTitle}</h2>
      </Link>
    { props.pageLinkState !== false &&
      <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
        <h3 onClick={handleBannerClick}>{props.pageSubSubTitle}</h3>
      </Link>
    }
    { props.pageLinkState === false &&
      <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
        <h3>{props.pageSubSubTitle}</h3>
      </Link>
    }
    
      {/* <Link href="/state/[stateCode]/" as={`/state/${props.pageStateCode}`} passHref>
        <h4  onClick={handleBannerClick} >{props.pageSubSubSubTitle}</h4>
      </Link> */}
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
  height: 60px;
  background-color: rgba(0,0,0,.8);
  color: #ffffff;
  z-index: 120;
  ${SuperQuery().minWidth.sm.css`
    grid-template-columns: 4fr 4fr;
    height: 80px;
  `}
 .logo {
    position: absolute;
    top: 12px;
    left: 7px;
    width: 40px;
    cursor: pointer;
    ${SuperQuery().minWidth.sm.css`
      top: 10px;
      left: 12px;
      width: 65px;
    `}
  }
  h1 {
    position: absolute;
    text-align:right;
    top: 2px;
    right: 10px;
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1.125em;
    cursor: pointer;
    max-width: 60%;
    ${SuperQuery().minWidth.sm.css`
      top: 3px;
      right: 15px;
      font-size: 1.5em;
    `}
  }
  h2 {
    position: absolute;
    top: 22px;
    right: 10px;
    font-weight: 500;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: .95em;
    cursor: pointer;
    max-width: 60%;
    ${SuperQuery().minWidth.sm.css`
      top: 35px;
      right: 15px;
      font-size: 1.125em;
    `}
  }
  h3{
    position: absolute;
    top: 7px;
    left: 52px;
    text-align: right;
    font-weight: 600;
    letter-spacing: -1.5px;
    line-height: 1;
    font-size: 1.825em;
    cursor: pointer;
    max-width: 40%;
    ${SuperQuery().minWidth.sm.css`
      top: 0px;    
      left: 85px;
      font-size: 2.25em;
    `}
  }
  ${'' /* h4 { 
    display: block;
    position: absolute;
    top: 20px;
    right: 55px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 1;
    font-size: .875em;
    ${SuperQuery().minWidth.sm.css`
      top: 35px;
      right: 95px;
      font-size: 1em;
    `}
  } */}
`


const Spinner = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 400;
  background-color: rgba(0,0,0,0.8);
  color: #ffffff;
  font-size: .7em;
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`
