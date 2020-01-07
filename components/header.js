import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'

const Component = ({ router, title, title__sub, park, designation }) => {
  return (
    <Header>
      <Row__Decorated>
        <Col xs={10}>
          <Link href="/" passHref>
            <a className="title" href="#">{title}</a>
          </Link> 
          <Link href="/" passHref>
            <a className="title__sub" href="#">{title__sub}</a>
          </Link> 
          {/* <div>
            <div className="park">{park}</div>
            <a className="designation" href="#">{designation}</a>
          </div> */}
        </Col>
        <Col xs={2}>
          { title && 
          <>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link> 
          {/* <Link href="/" passHref>
              <a className="title" href="#">{title}</a>
          </Link> 
          <Link href="/" passHref>
              <a className="title__sub" href="#">{title__sub}</a>
          </Link>  */}
          </> }
        </Col>
       
      </Row__Decorated> 
    </Header>
  )
}

export default Component

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  padding: 1em .375em;
  z-index: 100;
  min-height: 3.5em;
 

  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  img.logo {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    border: none;
    margin: .125em;
    padding: 0;
    width: 45px;
    ${SuperQuery().minWidth.sm.css`
      width: 47px;
      margin: .25em;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 52px;
    `}
  }
  .title {
    display: block;
    float: left;
    font-size: 1.375em;
    line-height: .925;
    font-weight: 700;
    letter-spacing: -1px;
      margin: -.25em 0 0 0;
    ${SuperQuery().minWidth.sm.css`
      margin: -.125em 0 0 0;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: -.125em 0 0 0;
      font-size: 1.25em;
      letter-spacing: -1.5px;
    `}
  }
  .title__sub {
    display: block;
    float: left;
    clear: left;
    font-size: 1em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: .125em 0 0 0;
    ${SuperQuery().minWidth.sm.css`
      line-height: 1.2;
      margin: -.125em 0 0 0;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: -.125em 0 0 0;
      font-size: .875em;
      letter-spacing: -1px;
    `}
  }

  .park {
    display: block;
    text-align:right;
    font-size: 1em;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: -.25em 0 0 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.25em;
      letter-spacing: -1.5px;
    `}
  }
  .designation {
    display: block;
    text-align:right;
    font-size: .75em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: -.125em 0 0 0;
    ${SuperQuery().minWidth.md.css`
      font-size: .875em;
      letter-spacing: -1px;
    `}
  }
  .territories {
    display: block;
    float: left;
    clear: left;
    text-align:left;
    font-size: .75em;
    line-height: 1;
    font-weight: 200;
  
    margin: -.125em 0 0 47px;
    ${SuperQuery().minWidth.sm.css`
      margin: -.125em 0 0 60px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: -.125em 0 0 70px;
    `}
  }

 
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
