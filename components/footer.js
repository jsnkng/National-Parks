import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

import { Moon } from '../svgs/moon.svg'
import { Sun } from '../svgs/sun.svg'

const Component = ({ themeName, setThemeName }) => {
  return (
    <Footer>
      <Grid fluid>
        <Row className='bottom'>
        
          <Col className='bottom__themeswitcher' xs={12}>
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
          </Col>
        </Row> 
      </Grid>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
color: ${({ theme }) => theme.colors.text};
  z-index: 900;
  height: 3rem;
  .bottom {
    display: flex;
    align-content: flex-start;
    ${SuperQuery().minWidth.md.css`
      padding:  0;
    `}
    a {
      cursor: pointer;
      text-decoration: none;
      border: none;
      color: inherit;
    }
  }
  .bottom__credit {
    font-size: 0.75rem;
    padding: 0.75rem 0 0 0;
    z-index: 1000;
  }
  .bottom__themeswitcher {
    display: flex;
    justify-content: flex-end;
    width: 52px;
    height: 28px;
    z-index: 1000;

    svg {
      width: 38px;
      height: 38px;
      cursor: pointer;
      outline: none;
      padding: 10px;
      margin: 0;
      &:hover {
        padding: 12px;
      }
      margin-right: -1rem;

      ${'' /* background-color: rgba(0,0,0,0.1); */}
      transition: filter 0.25s;

    }
  }
`
