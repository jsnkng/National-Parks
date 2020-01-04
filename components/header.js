import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = props => {
  return (
    <Header>
      <Row>
        <Col xs={8} sm={6} lg={8}>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link>
          <div>
            <a className="title__park">{props.park}</a>
            <a className="title__designation">{props.designation}</a>
          </div>
        </Col>
        <Col xs={4} sm={6} lg={4}>
          { props.stateCode !== undefined &&
          <Link href="/state/[stateCode]/" as={`/state/${props.stateCode}`}>
            <a className="title__state">{props.state}</a>
          </Link>
          }
          { props.stateCode === undefined &&
            <a className="title__state">{props.state}</a>
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
  background-color: ${({ theme }) => theme.trans_back};
  color: ${({ theme }) => theme.text};
  z-index: 120;
  padding: .5em .75em .75em .75em;
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  img.logo {
    float: left;
    cursor: pointer;
    border: none;
    margin: 0 0 0 -5px;
    padding: 0;
      width: 48px;
    ${SuperQuery().minWidth.md.css`
      width: 60px;
    `}
  }
  .title__park {
    display: block;
    font-size: 1.125em;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 5px 0 0 48px;
    ${SuperQuery().minWidth.md.css`
      margin: 5px 0 0 66px;
      font-size: 1.375em;
      line-height: 1;
      letter-spacing: -1.5px;
    `}
  }
  .title__designation {
    display: block;
    font-size: .875em;
    line-height: 1.2;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0 0 0 48px;
    ${SuperQuery().minWidth.md.css`
      margin: 0 0 0 66px;
      line-height: 1.1;
      font-size: 1em;
      letter-spacing: -1px;
    `}
  }
  .title__state {
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
  }
`
