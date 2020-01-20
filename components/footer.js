import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Toggle from 'react-toggle'

import { Moon } from '../svgs/moon.svg'
import { Sun } from '../svgs/sun.svg'



const Component = ({ themeName, setThemeName, manageHistory, manageFuture, }) => {

const setTheme = () => {
  const newTheme = themeName === 'lightMode' ? 'darkMode' : 'lightMode'
  setThemeName(newTheme)

}
  return (
    <Footer>
      <div className='bottom__credit'>
        <a href="#"><strong><span>JSN</span><br />KNG</strong><br />2020</a>
      </div>

      <div className='bottom__toggle'>
        <Toggle
          defaultChecked={themeName === 'lightMode' ? false : true }
          icons={{
            checked: <Sun />,
            unchecked: <Moon />,
          }}
          aria-label='Set Light|Dark Mode'
          onChange={setTheme} />
        </div>
      
        <div className='bottom__logo' onClick={() => manageFuture('/', '/')}>
          <a className="bottom__logo--text" href="#">National<br />Park<br />Service</a>
          <img className="bottom__logo--image" src="/us-nps.png" width="90" alt="National Parks Service" />
        </div>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 1rem;
  .bottom__credit {
    font-size: 0.8rem;
    line-height: .75;
    align-items:center;
    span {
    font-size: 0.9rem;

    }
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
      color: inherit;
    }
  }
  .bottom__toggle{
    width: 52px;
    margin: 0 1.5rem;
  }

  .bottom__logo {
    display: flex;
    position: absolute;
    right: 1rem;
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: ${({ theme }) => theme.colors.text};
  }
  .bottom__logo--image {
    cursor: pointer;
    border: none;
    width: 2.25em;
  }
  .bottom__logo--text {
    text-align:right;
    font-size: .875rem;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin-right: .5rem;
    ${SuperQuery().minWidth.md.css`
      font-size: .875rem;
      letter-spacing: -1.5px;
    `}
  }
}

  .react-toggle {
  touch-action: pan-x;

  display: inline-block;
  position: relative;
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
  background-color: ${({ theme }) => theme.colors.toggle_track };
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: ${({ theme }) => theme.colors.toggle_track };
}

.react-toggle--checked .react-toggle-track {
  background-color: ${({ theme }) => theme.colors.offbackground };
}

.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: ${({ theme }) => theme.colors.offbackground };
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
  border: 1px solid ${({ theme }) => theme.colors.home_text };
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background };

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.react-toggle--checked .react-toggle-thumb {
  left: 27px;
  border-color: ${({ theme }) => theme.colors.offbackground };
}

.react-toggle--focus .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px ${({ theme }) => theme.colors.offbackground };
  -moz-box-shadow: 0px 0px 3px 2px ${({ theme }) => theme.colors.offbackground };
  box-shadow: 0px 0px 2px 3px ${({ theme }) => theme.colors.offbackground };
}

.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.colors.offbackground };
  -moz-box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.colors.offbackground };
  box-shadow: 0px 0px 5px 5px ${({ theme }) => theme.colors.offbackground };
}
`
