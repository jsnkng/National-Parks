import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import Back from '../components/back'
const Component = ({ title, title_href, title_as, title__sub, park, designation, manageHistory }) => {

  const titleStyle = (title.length > 24 && title__sub !== '') ? { fontSize: '1.125rem', margin: '.575rem .5rem 0 1.625rem' } : 
                     (title.length > 24 && title__sub === '') ? { fontSize: '1.125rem', margin: '.75rem .5rem 0 1.625rem' } : {}

  return (
    <Header>
      <Row__Decorated>
        <Col xs={9} md={10}>
          <Back__Container>
            <Back manageHistory={manageHistory} />
            
          </Back__Container>
          {/* <Link href={title_href} as={title_as}> */}
            <a className={title__sub === '' ? 'title large' : 'title'} style={titleStyle} onClick={ () => manageHistory()} >{title}</a>
          {/* </Link>  */}
          { title__sub !== '' &&
            <a className="title__sub"  onClick={() => manageHistory()} >{title__sub}</a>
          }
          {/* <div>
            <div className="park">{park}</div>
            <a className="designation" href="#">{designation}</a>
          </div> */}
        </Col>
        <Col xs={3} md={2}>
          { title && 
          <>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link> 
          <Link href="/" passHref>
              <a className="park" href="#">National<br />Park<br />Service</a>
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
  height: 4rem;
    -webkit-transition: background .5s linear;
    -moz-transition: background .5s linear;
    -o-transition: background .5s linear;
    -ms-transition: background .5s linear;
    transition: background .5s linear;
  ${SuperQuery().maxWidth.md.and.landscape.css`
    position: relative;
  `}
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  img.logo {
    position: absolute;
    top: .625rem;
    right: .125rem;
    cursor: pointer;
    border: none;
    width: 42px;
    margin: .125rem;
    padding: 0;
    ${SuperQuery().minWidth.sm.css`
      width: 50px;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 57px;
      margin: 0 .125rem;
    `}
  }



  button {
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	background-color:#ededed;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#777777;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}
button:hover {
	background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	background-color:#dfdfdf;
}
button:active {
	position:relative;
	top:1px;
}



  
  .title {
    display: block;
    float: left;
    font-size: 1.375rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: .575rem 0 0 1.25rem;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5rem !important;
      letter-spacing: -1.5px;
      margin: .5rem 0 0 1.25rem !important;
    `}

    &.large {
      margin: .925rem 0 0 1.25rem;
      ${SuperQuery().minWidth.md.css`
        margin: .625rem 0 0 1.5rem !important;
      `}
    }
  }
  .title__sub {
    display: block;
    float: left;
    clear: left;
    font-size: .875rem;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0 0 0 2rem;
    ${SuperQuery().minWidth.sm.css`
      margin: 0 0 0 2rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size:1rem !important;
      letter-spacing: -1px;
      margin: 0 0 0 2rem;
    `}
  }

  .park {
    display: block;
    text-align:right;
    font-size: .875rem;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 1.125rem 3.125rem 0 -2rem;
    ${SuperQuery().minWidth.xs.css`
      margin: 1rem 3.125rem 0 -2rem;
    `}
    ${SuperQuery().minWidth.sm.css`
      margin: 1rem 3.125rem 0 -2rem;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: .75rem 3rem 0 -1.5rem;
      font-size: 1rem;
      letter-spacing: -1.5px;
    `}
    ${SuperQuery().minWidth.lg.css`
      margin: .75rem 3rem 0 1.5rem;
    `}

  }
  .designation {
    display: none;
    text-align:right;
    font-size: .75rem;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: -.125rem 3rem 0 0;
    ${SuperQuery().minWidth.sm.css`
    `}
    ${SuperQuery().minWidth.md.css`
      display: none;
      font-size: .875rem;
      letter-spacing: -1px;
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
  height: 4rem;
`
