import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const Component = props => {
  return (
    <Header>
      <Row>
        <Col xs={10}>
          <div>
            <a className="title" href="#">{props.park}</a>
            <a className="title__sub" href="#">{props.designation}</a>
          </div>
        </Col>
        <Col xs={2}>
          <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link>
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
  padding: .75em;
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  img.logo {
    float: right;
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
    display: block;
    font-size: 1.125em;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.5em;
      letter-spacing: -1.5px;
    `}
  }
  .title__sub {
    display: block;
    font-size: .875em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: 0;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.125em;
      letter-spacing: -1px;
    `}
  }

  ${'' /* .title__park {
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
  .title__designation {
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
  } */}
`
