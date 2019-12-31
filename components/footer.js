import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Toggle from 'react-toggle'
import React from 'react'
import Moon from '../svgs/moon.svg'
import Sun from '../svgs/sun.svg'

const Component = ({ setTheme }) => {
  return (
    <Footer>
      <Row>
        <Col xs={4}>
          <Toggle
              defaultChecked={true}
              icons={false}
              // icons={{
              //   checked: <Moon />,
              //   unchecked: <Sun />,
              // }}
              aria-label='Set Day|Night Mode'
              onChange={setTheme} />
        </Col>
        <Col xs={8}>
          <Link href="/" passHref>
            <div>
              <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
              <div className="title__site">National Parks Guide</div>
              <div className="title__tagline"></div>
            </div>
          </Link>
          <a href=""><div className="title__copyright"><span>jsnkng |</span> 2019</div></a>
        </Col>
      </Row>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: relative;
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
    float: right;
    cursor: pointer;
    border: none;
    margin: 0 -5px 0 0;
    padding: 0;
      width: 48px;
    ${SuperQuery().minWidth.md.css`
      width: 60px;
    `}
  }
 
  .title__site {
    font-size: .875em;
    text-align: right;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0 48px 0 0;
    padding: .25em .25em 0 0;
    ${SuperQuery().minWidth.md.css`
    margin: 0 56px 0 0;
    padding: .5em .25em 0 0;
    `}
  }
  .title__tagline {
    font-size: .75em;
    text-align: right;
    line-height: .75;
    letter-spacing: -1px;
    font-weight: 500;
    margin: 0 48px 0 0;
    padding: 0;
    ${SuperQuery().minWidth.md.css`
    margin: 0 56px 0 0;
    `}
  }
  .title__copyright {
    font-size: .75em;
    text-align: right;
    line-height: .75;
    letter-spacing: -1px;
    font-weight: 500;
    margin: 0 48px 0 0;
    padding: .25em .25em 0 0;
    span {
      font-weight: 700;
    }
    ${SuperQuery().minWidth.md.css`
    margin: 0 56px 0 0;
    `}
  }

  .react-toggle {
  touch-action: pan-x;
  display: inline-block;
  position: absolute;
  top: .75em;
  left: .75em;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}

.react-toggle-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.react-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.react-toggle-track {
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: ${props => props.theme.colors.offbackground};
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: ${props => props.theme.colors.text};
}

.react-toggle--checked .react-toggle-track {
  background-color: ${props => props.theme.colors.text};
}

.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: ${props => props.theme.colors.text};
}

.react-toggle-track-check {
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle--checked .react-toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle-track-x {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle--checked .react-toggle-track-x {
  opacity: 0;
}

.react-toggle-thumb {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.color_two};
 outline: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.react-toggle--checked .react-toggle-thumb {
  left: 27px;
  border-color: ${props => props.theme.colors.text};
}

.react-toggle--focus .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px ${props => props.theme.colors.color_two};
  -moz-box-shadow: 0px 0px 3px 2px ${props => props.theme.colors.color_two};
  box-shadow: 0px 0px 2px 3px ${props => props.theme.colors.color_two};
}

.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px ${props => props.theme.colors.color_two};
  -moz-box-shadow: 0px 0px 5px 5px${props => props.theme.colors.color_two};
  box-shadow: 0px 0px 5px 5px ${props => props.theme.colors.color_two};
}

`

// const Footer = styled.footer`
//   position: relative; 
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   min-height: 8em;
//   background-color: ${props => props.theme.colors.trans_back};
//   color: ${props => props.theme.colors.text};
//   z-index: 120;
  

//   a {
//     color: ${props => props.theme.colors.text};
//     text-decoration:none;
//     font-size: 1.5em;
//     font-weight: 700;
//     &:hover {
//       color: ${props => props.theme.colors.color_two};
//       text-decoration: underline;
//     }
//   }
  
//   img.logo {
//     float: left;
//     width: 24px;
//     cursor: pointer;
//     border: none;
//     margin: .5em .5em 0 0;
//     padding: 0;
//     ${SuperQuery().minWidth.sm.css`
//       width: 32px;
//     `}
//     ${SuperQuery().minWidth.md.css`
//       width: 48px;
//     `}
//   }
//   .title__site {
//     float: left;
//     font-size: .625em;
//     line-height: 1;
//     font-weight: 700;
//     letter-spacing: -1px;
//     margin: .5em 0 0 0;
//     ${SuperQuery().minWidth.md.css`
//       font-size: 1.25em;
//     `}
//   }
//   .title__tagline {
//     float: left;
//     font-size: .5em;
//     line-height: 1;
//     letter-spacing: -1px;
//     font-weight: 500;
//     margin: 0;
//     ${SuperQuery().minWidth.md.css`
//       font-size: 1.125em;
//     `}
//   }



// `

