import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({setTheme }) => {
  return (
    <Footer>
      <div className="themeswitcher">
        <button onClick={() => setTheme('dayTheme')}>Light</button>  
        <button onClick={() => setTheme('nightTheme')}>Dark</button>
        <button onClick={() => setTheme('rainbowTheme')}>Rainbow</button>
      </div>
      <Link href="/" passHref>
        <div>
          <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          <div className="title">National Park Service</div>
          <div className="subtitle">A State-by-State Guide</div>
        </div>
      </Link>
      <div className="copyright"><a href="https://jsnkng.com">jsnkng</a> | 2019</div>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: relative;
  width: 100%;
  min-height: 8em;
  background-color: ${props => props.theme.colors.trans_back};
  color: ${props => props.theme.colors.text};
  z-index: 120;
  
  ${SuperQuery().minWidth.sm.css`
    grid-template-columns: 4fr 4fr;
    height: 90px;
  `}

  a {
    color: ${props => props.theme.colors.text};
    text-decoration:none;
    font-size: 1.25em;
    font-weight: 700;
    &:hover {
      color: ${props => props.theme.colors.color_two};
      text-decoration: underline;
    }
  }
  button {
    color: ${props => props.theme.colors.color_two};
    background-color: ${props => props.theme.colors.background};
    text-decoration:none;
    font-size: .75em;
    font-weight: 700;
    padding: .25em .375em;
    margin: .25em .5em 0 0;
    border: 1px solid ${props => props.theme.colors.offbackground};
    outline: none;
    &:hover {
      color:  ${props => props.theme.colors.color_three};
      background-color: ${props => props.theme.colors.background};
      border: 1px solid ${props => props.theme.colors.color_three};
    }
  }

.themeswitcher {
  position: absolute;
  top: 1em;
  left: 1em;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  font-size: 1em;
  text-align: left;
}
  img.logo {
    top: 1em;
    right: 1em;
    width: 2.1875em;
    cursor: pointer;
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    letter-spacing: -1px;
    line-height: 1;
  }
  .copyright {
    top: 8.75em;
    right: 1.75em;
    font-size: .625em;
    text-align: left;
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    letter-spacing: -1px;
    line-height: 1;
  }
  .title {
    top: 1em;
    right: 3.5em;
    font-size: 1em;
    font-weight: 700;
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    letter-spacing: -1px;
    line-height: 1;
  }
  .subtitle {
    top: 2.125em;
    right: 4em;
    font-size: .875em;
    font-weight: 500;
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    letter-spacing: -1px;
    line-height: 1;
  }
`
