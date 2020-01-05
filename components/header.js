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

        {/* { props.states !== undefined &&
        <div>
          <a className="territories" href="#">{props.states.split(',').join(' / ')}</a>
          </div>
        } */}
          </>
        }
        </Col>
        {/* { props.states !== undefined &&
          <Col xs={2}>
          <a className="designation" href="#">{props.states.split(',').join(' ')}</a>
          </Col>
        } */}
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
  padding: 1em .375em;
  z-index: 120;
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
    left: 5px;
    cursor: pointer;
    border: none;
    margin: .125em;
    padding: 0;
    width: 40px;
    ${SuperQuery().minWidth.sm.css`
      width: 50px;
      margin: .25em;
    `}
    ${SuperQuery().minWidth.md.css`
      width: 60px;
    `}
  }
  .title {
    display: block;
    float: left;
    font-size: 1em;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1px;
      margin: -.125em 0 0 47px;
    ${SuperQuery().minWidth.sm.css`
      margin: -.125em 0 0 60px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: -.125em 0 0 70px;
      font-size: 1.25em;
      letter-spacing: -1.5px;
    `}
  }
  .title__sub {
    display: block;
    float: left;
    clear: left;
    font-size: .75em;
    line-height: 1;
    font-weight: 200;
    letter-spacing: -.5px;
    margin: -.125em 0 0 47px;
    ${SuperQuery().minWidth.sm.css`
      line-height: 1.2;
      margin: -.125em 0 0 60px;
    `}
    ${SuperQuery().minWidth.md.css`
      margin: -.125em 0 0 70px;
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
    margin: -.125em 5px 0 0;
    ${SuperQuery().minWidth.md.css`
      margin: -.125em 10px 0 0;
      font-size: 1em;
      letter-spacing: -1px;
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
