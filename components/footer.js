import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Footer = props => {
  console.log(props)
  return (
    <FooterMenu>
      <Link href="/" passHref>
        <Logo className="logo" src="/us-nps.png" width="90"  />
      </Link>
      <Link href="/" passHref>
        <Title>National Park Service</Title>
      </Link>
      <Link href="/" passHref>
        <Title__Sub>A State-by-State Guide</Title__Sub>
      </Link>
      <p><a href="https://jsnkng.com">jsnkng</a> | 2019</p>
      <p><a onClick={() => props.setTheme('dayTheme')}>Light</a> | <a onClick={() => props.setTheme('nightTheme')}>Dark</a></p>
    </FooterMenu>
  )
}

export default Footer

const FooterMenu = styled.footer`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.trans_back};
  color: ${props => props.theme.colors.text};
  z-index: 120;
  
  p {
    font-size: .625em;
    padding: 2em;
    a {
      color: ${props => props.theme.colors.text};
      text-decoration:none;
      font-weight: 700;
      &:hover {
        color: ${props => props.theme.colors.color_two};
        text-decoration: underline;
      }
    }
  }
`
const Logo = styled.img.attrs()`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  cursor: pointer;
`
const Title = styled.span.attrs()`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 18px;
  right: 57px;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  font-size: .75em;
  cursor: pointer;
  text-decoration: none;
  border: none;
`
const Title__Sub = styled.div.attrs()`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 32px;
  right: 57px;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1;
  font-size: .625em;
  cursor: pointer;
  text-decoration: none;
  border: none;
`
