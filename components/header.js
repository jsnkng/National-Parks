import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import Back from '../components/back'
import { useRouter } from 'next/router'
const Component = ({ title, title_href, title_as, title__sub, park, designation }) => {
  const router = useRouter()

  const goBack = () => router.back()
  return (
    <Header>
      <Row__Decorated>
        <Col xs={9}>
          <Back__Container>
          <Back />
          </Back__Container>
          <Link href={title_href} as={title_as}>
            <a className={title__sub === '' ? 'title--large' : 'title'} href="#">{title}</a>
          </Link> 
          <Link href={title_href} as={title_as}>
            <a className="title__sub" href="#">{title__sub}</a>
          </Link> 
          {/* <div>
            <div className="park">{park}</div>
            <a className="designation" href="#">{designation}</a>
          </div> */}
        </Col>
        <Col xs={3}>
          { title && 
          <>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link> 
          <Link href="/" passHref>
              <a className="park" href="#">{park}</a>
          </Link> 
          <Link href="/" passHref>
              <a className="designation" href="#">{designation}</a>
          </Link> 
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
  z-index: 100;
  height: 4em;
 

  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  img.logo {
    position: absolute;
    top: .625em;
    right: .125em;
    cursor: pointer;
    border: none;
    width: 36px;
    margin: .125em;
    padding: 0;
    ${SuperQuery().minWidth.sm.css`
      width: 47px;
      margin: .25em;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 52px;
    `}
    ${SuperQuery().minWidth.lg.css`
      width: 70px;
    `}
  }
  .title {
    display: block;
    float: left;
    font-size: 1.125em;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: .625em 0 0 1.5em;
    ${SuperQuery().minWidth.md.css`
    margin: 0 0 0 1.5em;
      font-size: 1.75em;
      letter-spacing: -1.5px;
    `}
  }
  .title--large {
    display: block;
    float: left;
    font-size: 1.125em;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: .925em 0 0 1.5em;
    ${SuperQuery().minWidth.md.css`
    margin: 0 0 0 1.5em;
      font-size: 1.75em;
      letter-spacing: -1.5px;
    `}
  }
  .title__sub {
    display: block;
    float: left;
    clear: left;
    font-size: .875em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0 0 0 1.925em;
    ${SuperQuery().minWidth.sm.css`
      line-height: 1.2;
      margin: 0 0 0 1.5em;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: .875em;
      letter-spacing: -1px;
    `}
  }

  .park {
    display: block;
    text-align:right;
    font-size: .75em;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 1.125em 3em 0 0;
    ${SuperQuery().minWidth.sm.css`
      font-size: .9em;
    
    `}
    ${SuperQuery().minWidth.md.css`
      margin: -.25em 2.5em 0 0;
      font-size: 1em;
      letter-spacing: -1.5px;
    `}
    ${SuperQuery().minWidth.lg.css`
      margin: -.25em 2.125em 0 0;
      font-size: 1.75em;
      letter-spacing: -1.5px;
    `}
  }
  .designation {
    display: none;
    text-align:right;
    font-size: .75em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: -.125em 3em 0 0;
    ${SuperQuery().minWidth.sm.css`
    `}
    ${SuperQuery().minWidth.md.css`
      display: none;
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

const Back__Container = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`
