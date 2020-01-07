import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import {Arch} from 'styled-icons/boxicons-regular/Arch'
import {Compass} from 'styled-icons/fa-regular/Compass'
import {Home} from 'styled-icons/boxicons-regular/Home'
import {Lab} from 'styled-icons/icomoon/Lab'
const Component = ({ themeName, setThemeName }) => {
  return (
    <Footer>
      <Row__Decorated>
      <Col__Decorated xs={3}>
        <Link href='/' passHref>
          <a>
            <Button__Container>
              <MyHome /><br />
              Home
            </Button__Container>
          </a>
        </Link>
      </Col__Decorated>
      <Col__Decorated xs={3}>

        <Link href='/states' passhref>
          <a>
            <Button__Container>
              <MyCompass /><br />
              States
            </Button__Container>
          </a>
        </Link>
      </Col__Decorated>
      <Col__Decorated xs={3}>
        <Link href='/designations' passhref>
          <a>
            <Button__Container>
              <MyArch /><br />
              Designations
            </Button__Container>
          </a>
        </Link>
      </Col__Decorated>
      <Col__Decorated xs={3}>
        <Link href='/about' passhref>
          <a>
            <Button__Container>
              <MyLab /><br />
              About
            </Button__Container>
          </a>
        </Link>
      </Col__Decorated>
    
      </Row__Decorated>
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
  height: 70px;
  ${'' /* background-color: ${({ theme }) => theme.colors.trans_back}; */}
  color: ${({ theme }) => theme.colors.text};
  z-index: 1000;
  ${SuperQuery().minWidth.sm.css`
  height: 80px;
  `}
  ${SuperQuery().minWidth.lg.css`
  height: 90px;
  `}
`
const Row__Decorated = styled(Row)`
  padding: 0;
  margin: 0;
`
const Col__Decorated = styled(Col)`
  padding: 0;
  margin: 0;
`
const Button__Container = styled.div`
  display:block;
  text-align:center;
  float: left;
  height:4.5em;
  width: 100%;
  font-size: .75em;
  padding:  .5em 0;
  border: 1px solid;
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