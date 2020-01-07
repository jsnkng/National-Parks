import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Copyright from '../components/copyright'
import ThemeSwitcher from '../components/themeswitcher'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({ themeName, setThemeName }) => {
  return (
    <Footer>
      {/* <Copyright__Container>
        <Copyright />
      </Copyright__Container> */}
      <Buttons>
      <Button__Container>
        <Link href='/'>Home</Link>
      </Button__Container>

      <Button__Container>
        <Link href='/states'>States</Link>
      </Button__Container>

      <Button__Container>
        <Link href='/designations'>Designations</Link>
      </Button__Container>

      <Button__Container>
        <Link href='/about'>About</Link>
      </Button__Container>
</Buttons>
      {/* <ThemeSwitcher__Container>
        <ThemeSwitcher id='themeSwitcher' themeName={themeName} setThemeName={setThemeName} />
      </ThemeSwitcher__Container> */}
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1000;
  ${SuperQuery().minWidth.sm.css`
  height: 70px;
  `}
  ${SuperQuery().minWidth.lg.css`
  height: 80px;
  `}
`

const Buttons = styled.div`
  text-align:center;
  width: 86%;
  margin: 0 auto;
  ${SuperQuery().minWidth.sm.css`
  `}
  ${SuperQuery().minWidth.lg.css`
  `}

`
const Button__Container = styled.div`
  display:block;
  float: left;
  height:2em;
  font-size: .875em;
  padding:  .5em 0 3em 0;
  margin: 1em;
  ${SuperQuery().minWidth.sm.css`
    padding: .5em .5em 2em .5em;
  `}
  ${SuperQuery().minWidth.lg.css`
    font-size: 1em;
  `}

  a {
    text-decoration: none;
  }

`