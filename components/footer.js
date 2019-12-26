import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import Link from 'next/link'
import SuperQuery from '@themgoncalves/super-query'

const Footer = props => {
  return (
    <FooterMenu>
    <Grid>
      <Row>
        <Col xs={6} md={6}>
          <ThemeSwitcher>
            <a onClick={() => props.setTheme('dayTheme')}>Light</a> | <a onClick={() => props.setTheme('nightTheme')}>Dark</a>
             {/* | <a onClick={() => props.setTheme('rainbowTheme')}>Rainbow</a> */}
          </ThemeSwitcher>
        </Col>
        <Col xs={6} md={6}>
          <Link href="/" passHref>
            <div>
              <Logo className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
              <Title>National Park Service</Title>
              <Title__Sub>A State-by-State Guide</Title__Sub>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={12}>
          <Copyright><a href="https://jsnkng.com">jsnkng</a> | 2019</Copyright>
        </Col>
      </Row>
    </Grid>
    </FooterMenu>
  )
}

export default Footer


const FooterMenu = styled.footer`
  position: relative;
  background-color: ${props => props.theme.colors.trans_back};
  color: ${props => props.theme.colors.text};
  a {
    color: ${props => props.theme.colors.text};
    text-decoration:none;
    font-weight: 700;
    &:hover {
      color: ${props => props.theme.colors.color_two};
      text-decoration: underline;
    }
  }
`


const Copyright = styled.div`
  margin: 1.875em 0 ;
  font-size: .75em;
  text-align: center;
`
const ThemeSwitcher = styled.div`
  margin: 1.875em 0;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  font-size: 1em;
  text-align: left;
`
const Logo = styled.img.attrs()`
  position: absolute;
  top: 1em;
  right: 1em;
  width: 2.1875em;
  cursor: pointer;
`
const Title = styled.span.attrs()`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 1em;
  right: 3.5em;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  font-size: 1em;
  cursor: pointer;
  text-decoration: none;
  border: none;
`
const Title__Sub = styled.div.attrs()`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 2.125em;
  right: 4em;
  font-weight: 500;
  letter-spacing: -1px;
  line-height: 1;
  font-size: .875em;
  cursor: pointer;
  text-decoration: none;
  border: none;
`
