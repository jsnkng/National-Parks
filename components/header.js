import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import Back from '../components/back'
const Component = ({ title, title_href, title_as, title__sub, park, designation, manageHistory }) => {

  const titleStyle = (title.length > 24 && title__sub !== '') ? { fontSize: '1.125em', margin: '.575em .5em 0 1.625em' } : 
                     (title.length > 24 && title__sub === '') ? { fontSize: '1.125em', margin: '.75em .5em 0 1.625em' } : {}

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
  height: 4em;
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
    top: .625em;
    right: .125em;
    cursor: pointer;
    border: none;
    width: 42px;
    margin: .125em;
    padding: 0;
    ${SuperQuery().minWidth.sm.css`
      width: 50px;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 57px;
      margin: 0 .125em;
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
    font-size: 1.375em;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: .575em 0 0 1.25em;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5em !important;
      letter-spacing: -1.5px;
      margin: .5em 0 0 1.25em !important;
    `}

    &.large {
      margin: .925em 0 0 1.25em;
      ${SuperQuery().minWidth.md.css`
        margin: .625em 0 0 1.5em !important;
      `}
    }
  }
  .title__sub {
    display: block;
    float: left;
    clear: left;
    font-size: .875em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0 0 0 2em;
    ${SuperQuery().minWidth.sm.css`
      margin: 0 0 0 2em;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size:1em !important;
      letter-spacing: -1px;
      margin: 0 0 0 2em;
    `}
  }

  .park {
    display: block;
    text-align:right;
    font-size: .875em;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 1.125em 3.125em 0 -2em;
    ${SuperQuery().minWidth.xs.css`
      margin: 1em 3.125em 0 -2em;
    `}
    ${SuperQuery().minWidth.sm.css`
      margin: 1em 3.125em 0 -2em;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: .75em 3em 0 -1.5em;
      font-size: 1em;
      letter-spacing: -1.5px;
    `}
    ${SuperQuery().minWidth.lg.css`
      margin: .75em 3em 0 1.5em;
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
 
`

const Back__Container = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
  height: 4em;
`
