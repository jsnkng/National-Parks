import React from 'react'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

import { Moon } from '../svgs/moon.svg'
import { Sun } from '../svgs/sun.svg'

const Component = ({ themeName, setThemeName }) => {
  return (
    <Footer>
      <Copyright__Container>
        <Copyright>
          <a href="#"><span>JSNKNG</span> / 2020</a>
        </Copyright>
      </Copyright__Container>

      <ThemeSwitcher__Container>
        <ThemeSwitcher>
        { themeName !== 'lightMode' &&
          <SunSVG aria-label='Set Day Mode' onClick={() => { 
            setThemeName('lightMode')
            document.cookie = `themeName=lightMode; path=/`
          } } />
        }
        { themeName === 'lightMode' &&
          <MoonSVG aria-label='Set Night Mode'  onClick={() => { 
            setThemeName('darkMode')
            document.cookie = `themeName=darkMode; path=/`
          } } />
        }
        </ThemeSwitcher>
      </ThemeSwitcher__Container>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  margin: -4rem 0 0 0;
  color: ${({ theme }) => theme.colors.text};
  z-index: 900;
  height: 4rem;
`
const Copyright__Container = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  z-index: 1000;

  ${SuperQuery().maxWidth.of('325px').css`
    bottom: .5rem;
    left: 1rem;
  `}
`
const Copyright = styled.div`
  font-size: .75rem;
  letter-spacing: -1px;
  font-weight: 400;
  span {
    font-weight: 700;
  } 
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
`
const ThemeSwitcher__Container = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 1.5rem;
  width: 52px;
  height: 28px;
  z-index: 1000;

  ${SuperQuery().maxWidth.of('325px').css`
    bottom: .25rem;
    right: 1rem;
  `}
`
const ThemeSwitcher = styled.div`
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    heigt: 40px;
    cursor: pointer;
    outline: none;
    padding: 8px;
    &:hover {
      padding: 10px;
    }
  }
`
const SunSVG = styled(Sun)`
  color: red;
`
const MoonSVG = styled(Moon)`
  color: blue;
`