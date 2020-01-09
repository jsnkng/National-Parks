import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import { push as Menu } from 'react-burger-menu'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'


const Layout = ({ children, ToggleTheme, manageHistory, highlighted, setHighlighted }) => (
  <Content>
  <div id="outer-container">
    <Header 
      park=''
      designation=''
      state=''
      stateCode=''
      title='National Park Service'
      title__sub='A State-by-State Guide'
    />
    <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <span>Toggle Theme</span><ToggleTheme />
      <a className="title__copyright" href="#">JSNKNG / 2020</a>
    </Menu>
    <div id="page-wrap">
      {children}
    </div>
    <Footer 
      ToggleTheme={ToggleTheme} 
      manageHistory={manageHistory} 
      highlighted={highlighted} 
      setHighlighted={setHighlighted} 
    />
    </div>
  </Content>
)

export default Layout

const Content = styled.div`
 
 .title__copyright {
    float:left;
    clear: left;
    font-size: .75rem;
    text-align: right;
    line-height: .75;
    letter-spacing: -1px;
    font-weight: 400;
    padding: .75rem .25rem 0 0;
    span {
      font-weight: 700;
    }
  }
 span {
    font-size: .5rem;
    float: right;
    margin: 1rem 6.5rem;

  }
 .react-toggle {
  touch-action: pan-x;
  display: inline-block;
  position: absolute;
  bottom: 2rem;
  right: 13px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
  ${SuperQuery().minWidth.md.css`
  right: 23px;
  `}
}

.react-toggle-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.react-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.react-toggle-track {
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #4D4D4D;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: #000000;
}

.react-toggle--checked .react-toggle-track {
  background-color: #b1b0a7;
}

.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: #b1b0a7;
}

.react-toggle-track-check {
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle--checked .react-toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle-track-x {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle--checked .react-toggle-track-x {
  opacity: 0;
}

.react-toggle-thumb {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4D4D4D;
  border-radius: 50%;
  background-color: #FAFAFA;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.react-toggle--checked .react-toggle-thumb {
  left: 27px;
  border-color: #b1b0a7;
}

.react-toggle--focus .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
  -moz-box-shadow: 0px 0px 3px 2px #0099E0;
  box-shadow: 0px 0px 2px 3px #0099E0;
}

.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
  -moz-box-shadow: 0px 0px 5px 5px #0099E0;
  box-shadow: 0px 0px 5px 5px #0099E0;
}




`