import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

import { Moon } from '../svgs/moon.svg'
import { Sun } from '../svgs/sun.svg'

const Component = ({ themeName, setThemeName }) => {
  return (
    <Footer>
      <Grid fluid={true}>
        <Row className='bottom'>
          <Col className='bottom__credit' xs={6}>
            <a href="#">&copy; <strong>JSNKNG</strong> / 2020</a>
          </Col>
          <Col className='bottom__themeswitcher' xs={6}>
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
          </Col>
        </Row> 
      </Grid>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  z-index: 900;
  .bottom {
    display: flex;
    align-content: center;
    margin: -4rem 0;
    padding: 1rem 0;
    font-size: .75rem;
    letter-spacing: -1px;
    font-weight: 400;
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
      color: inherit;
    }
  }
  .bottom__credit {
    display: flex;
    justify-content: flex-start;
    z-index: 1000;
  }
  .bottom__themeswitcher {
    display: flex;
    justify-content: flex-end;
    width: 52px;
    height: 28px;
    z-index: 1000;

    svg {
      width: 40px;
      height: 40px;
      cursor: pointer;
      outline: none;
      padding: 8px;
      margin: -8px 0;
      &:hover {
        padding: 10px;
      }
    }
  }
`
