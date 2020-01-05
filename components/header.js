import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = props => {
  return (
    <Header>
      <Row>
        <Col xs={7}>
        {/* { props.manageHistory &&
        <button onClick={() => props.manageHistory()}>{`<`}</button>
      } */}
          { props.title && 
          <>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link> 
          <Link href="/" passHref>
              <a className="title" href="#">{props.title}</a>
          </Link> 
          <Link href="/" passHref>
              <a className="title__sub" href="#">{props.title__sub}</a>
          </Link> 
          </>
        }
        </Col>
        <Col xs={5}>
          <div>
            <a className="park" href="#">{props.park}</a>
            <a className="designation" href="#">{props.designation}</a>
          </div>
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
  padding: .75em .375em;
    ${SuperQuery().minWidth.md.css`
  padding: 1em .375em;
    `}



  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  img.logo {
    position: absolute;
    top: 5px;
    left: 5px;
    cursor: pointer;
    border: none;
    margin: -2px 0;
    padding: 0;
    width: 42px;
    ${SuperQuery().minWidth.sm.css`
      width: 48px;
      margin: 2px 0;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 60px;
      margin: 8px 4px;
    `}
  }
  .title {
    float: left;
    display: block;
    font-size: 1em;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: -2px 0 0 47px;
    ${SuperQuery().minWidth.sm.css`
      margin: 0 0 0 52px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: 3px 0 0 72px;
      font-size: 1.25em;
      letter-spacing: -1.5px;
    `}
  }
  .title__sub {
    float: left;
    clear: left;
    display: block;
    font-size: .75em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0 0 0 47px;
    ${SuperQuery().minWidth.sm.css`
      margin: 0 0 0 52px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: 0 0 0 72px;
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
    margin: 0 5px 0 0;
    ${SuperQuery().minWidth.md.css`
      margin: 6px 15px 0 0;
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
    margin: 0 5px 0 0;
    ${SuperQuery().minWidth.md.css`
      margin: 0 15px 0 0;
      font-size: .875em;
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
