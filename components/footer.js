import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

import { Moon } from '../svgs/moon.svg'
import { Sun } from '../svgs/sun.svg'

const Component = ({ themeName, setThemeName, manageHistory, manageFuture, }) => {
  return (
    <Footer>
      <Grid fluid>
        <Row>
          <Col xs={6}>
            <div className='bottom__themeswitcher'>
            <a className='bottom__credit' href="#"><strong>JSNKNG</strong> / 2020</a>
            { themeName !== 'lightMode' &&
              <Sun aria-label='Set Day Mode' onClick={() => { 
                setThemeName('lightMode')
                document.cookie = `themeName=lightMode; path=/`
              } } />
            }
            { themeName === 'lightMode' &&
              <Moon aria-label='Set Night Mode'  onClick={() => { 
                setThemeName('darkMode')
                document.cookie = `themeName=darkMode; path=/`
              } } />
            }
            </div>
          </Col>
          <Col className='bottom__logo' xs={6}>
            <Logo onClick={() => manageFuture('/', '/')}>
              <div className="top__logo">
                <a className="top__logo--text" href="#">National<br />Park<br />Service</a>
                <img className="top__logo--image" src="/us-nps.png" width="90" alt="National Parks Service" />
              </div>
            </Logo>
          </Col>
        </Row> 
      </Grid>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: relative;
  height: 4.5rem;
  .bottom__themeswitcher {
  position: absolute;
  bottom: 1.5rem;
  left: 0.25rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
    width: 252px;
    
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
      color: inherit;
    }
    .bottom__credit {
      font-size: 0.75rem;
      margin-left: 0.5rem;
    }
    svg {
      width: 38px;
      height: 38px;
      cursor: pointer;
      outline: none;
      padding: 10px;
      margin: 0 -0.5rem 0 0;
      transition: filter 0.25s;
      &:hover {
        padding: 12px;
      }
    }
  }
  
`

const Logo = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 0.75rem;
  z-index: 10000;
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: ${({ theme }) => theme.colors.text};
 
  }

  .top__logo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    min-width: 110px;
  }
  .top__logo--image {
    cursor: pointer;
    border: none;
    width: 2.25em;
  }
  .top__logo--text {
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
`