import React from 'react'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Copyright from '../components/copyright'
import ThemeSwitcher from '../components/themeswitcher'

const Component = ({ themeName, setThemeName }) => {
  return (
    <Footer>
      <Copyright__Container>
        <Copyright />
      </Copyright__Container>

      <ThemeSwitcher__Container>
        <ThemeSwitcher id='themeSwitcher' themeName={themeName} setThemeName={setThemeName} />
      </ThemeSwitcher__Container>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1000;
  height: 55px;
`
const Copyright__Container = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
`
const ThemeSwitcher__Container = styled.div`
  position: absolute;
  bottom: 12px;
  right: 20px;
  width: 52px;
  height: 28px;
  z-index: 1000;
`