import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Copyright from '../components/copyright'
import ThemeSwitcher from '../components/themeswitcher'
import SuperQuery from '@themgoncalves/super-query'
import {Arch} from 'styled-icons/boxicons-regular/Arch'
import {Compass} from 'styled-icons/fa-regular/Compass'
import {Home} from 'styled-icons/boxicons-regular/Home'
import {Lab} from 'styled-icons/icomoon/Lab'
const Component = ({ themeName, setThemeName }) => {
  return (
    <Footer>
      {/* <Copyright__Container>
        <Copyright />
      </Copyright__Container> */}
      <Buttons>

      <Link href='/' passHref>
        <a>
          <Button__Container>
            <MyHome /><br />
            Home
          </Button__Container>
        </a>
      </Link>
      <Link href='/states' passhref>
        <a>
          <Button__Container>
            <MyCompass /><br />
            States
          </Button__Container>
        </a>
      </Link>
      <Link href='/designations' passhref>
        <a>
          <Button__Container>
            <MyArch /><br />
            Designations
          </Button__Container>
        </a>
      </Link>
      <Link href='/about' passhref>
        <a>
          <Button__Container>
            <MyLab /><br />
            About
          </Button__Container>
        </a>
      </Link>
</Buttons>
      {/* <ThemeSwitcher__Container>
        <ThemeSwitcher id='themeSwitcher' themeName={themeName} setThemeName={setThemeName} />
      </ThemeSwitcher__Container> */}
    </Footer>
  )
}

export default Component
const MyHome = styled(Home)`
  color: black;
  width: 25px;
  height: 25px;
  text-align:center;
`
const MyArch = styled(Arch)`
  color: black;
  width: 25px;
  height: 25px;
  text-align:center;
`
const MyCompass = styled(Compass)`
  color: black;
  width: 20px;
  height: 25px;
  text-align:center;
`
const MyLab = styled(Lab)`
  color: black;
  width: 23px;
  height: 25px;
  text-align:center;
`
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1000;
  ${SuperQuery().minWidth.sm.css`
  height: 80px;
  `}
  ${SuperQuery().minWidth.lg.css`
  height: 90px;
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
  text-align:center;
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