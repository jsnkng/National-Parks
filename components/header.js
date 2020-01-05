import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = props => {
  return (
    <Header>
      <Row>
        <Col xs={7}>
        { props.manageHistory &&
        <button onClick={() => props.manageHistory()}>{`<`}</button>
      }
          
        </Col>
        <Col xs={5}>
          {/* <div>
            <a className="park" href="#">{props.park}</a>
            <a className="designation" href="#">{props.designation}</a>
          </div> */}
          
          { props.park && 
          <>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link> 
          <Link href="/" passHref>
              <a className="title" href="#">{props.park}</a>
          </Link> 
          <Link href="/" passHref>
              <a className="title__sub" href="#">{props.designation}</a>
          </Link> 
          </>
        }
          
        </Col>
      </Row>
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
  z-index: 120;
  padding: .375em;

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


  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  img.logo {
    position: absolute;
    top: 5px;
    right: 13px;
    cursor: pointer;
    border: none;
    margin: -2px;
    padding: 0;
    width: 42px;
    ${SuperQuery().minWidth.md.css`
      width: 60px;
    `}
  }
  .title {
    float: right;
    display: block;
    font-size: 1.125em;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0 70px 0 0 ;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.375em;
      letter-spacing: -1.5px;
    `}
  }
  .title__sub {
    float: right;
    clear: right;
    display: block;
    font-size: .875em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0 70px 0 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 1em;
      letter-spacing: -1px;
    `}
  }

  .park {
    display: block;
    text-align:right;
    font-size: 1.125em;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 5px 5px 0 0;
    ${SuperQuery().minWidth.md.css`
      margin: 5px 15px 0 0;
      font-size: 1.375em;
      line-height: 1;
      letter-spacing: -1.5px;
    `}
  }
  .designation {
    display: block;
    text-align:right;
    font-size: .875em;
    line-height: 1.2;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0 5px 0 0;
    ${SuperQuery().minWidth.md.css`
      margin: 0 15px 0 0;
      line-height: 1.1;
      font-size: 1em;
      letter-spacing: -1px;
    `}
  }
  ${'' /*.title__state {
    display: block;
    text-align: right;
    font-size: 1.25em;
    line-height: .8;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 5px 0 0 0 ;
    ${SuperQuery().minWidth.md.css`
      margin: 2px 0 0 66px;
      font-size: 1.75em;
      letter-spacing: -1.5px;
    `}
  } */}
`
