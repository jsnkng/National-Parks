import React from 'react'
import styled from 'styled-components'

import { Moon } from '../svgs/moon.svg'
import { Sun } from '../svgs/sun.svg'

const Component = ({ themeName, setThemeName }) => {
  return (
    <ThemeSwitcher>
    { themeName !== 'dayTheme' &&
      <SunSVG aria-label='Set Day Mode' onClick={() => setThemeName('dayTheme')} />
    }
    { themeName === 'dayTheme' &&
      <MoonSVG aria-label='Set Night Mode' onClick={() => setThemeName('nightTheme')} />
    }
    </ThemeSwitcher>
  )
}

export default Component

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