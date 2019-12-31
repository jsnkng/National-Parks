import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = props => {
  return (
    <Header>
      <Row>
        <Col xs={7} sm={6} lg={8}>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link>
          <div>
            <a className="title__park">{props.park}</a>
            <a className="title__designation">{props.designation}</a>
          </div>
        </Col>
        <Col xs={5} sm={6} lg={4}>
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
  background-color: ${props => props.theme.colors.trans_back};
  color: ${props => props.theme.colors.text};
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
    width: 36px;
    cursor: pointer;
    border: none;
    margin: 0 -.25em 0 0;
    padding: 0;
    ${SuperQuery().minWidth.sm.css`
      width: 48px;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 60px;
    `}
  }
  .title__state {
    display: block;
    text-align: right;
    font-size: 1.125em;
    line-height: 1.125;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0 0 0 36px;
    ${SuperQuery().minWidth.md.css`
      margin: 0 0 0 66px;
      font-size: 1.75em;
      letter-spacing: -1.5px;
    `}
  }
  .title__park {
    display: block;
    font-size: 1em;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 4px 0 0 40px;
    ${SuperQuery().minWidth.sm.css`
      margin: 6px 0 0 54px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: 8px 0 0 66px;
      font-size: 1.375em;
      line-height: 1.125;
      letter-spacing: -1.5px;
    `}
  }

  .title__designation {
    display: block;
    font-size: .875em;
    line-height: .875;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0 0 0 40px;
    ${SuperQuery().minWidth.sm.css`
      margin: 0 0 0 54px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: 0 0 0 66px;
      font-size: 1em;
      letter-spacing: -1px;
    `}
  }

  ${'' /* .title__site {
    font-size: .875em;
    text-align: right;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0;
    padding: .25em .25em 0 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.25em;
      line-height: 1.1;
      margin: 0;
    `}
  }
  .title__tagline {
    font-size: .75em;
    text-align: right;
    line-height: .875;
    letter-spacing: -1px;
    font-weight: 500;
    margin: 0;
    padding: 0 .25em 0 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.125em;
      margin: 0;
    `}
  } */}
`
