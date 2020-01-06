
import React from 'react'
import Link from 'next/link'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import MapDiagram from '../components/mapdiagram'
import TerritoryList from '../components/territorylist'
import DesignationList from '../components/designationlist'
import Router from 'next/router'
import states from '../config/states'
const Component = ({ title, subtitle, ToggleTheme, manageHistory, highlighted, setHighlighted }) => {
  // console.log(`href="${manageHistory.href}" as="${manageHistory.as}"`)
  return (
    <Footer>
     
     <Tabs>
        <TabList>
          <Tab>Browse By State</Tab>
          <Tab>Browse By Type</Tab>
        </TabList>

        <TabPanel>
    <Row__Decorated>
          <Col xs={12} md={6} lg={6}>
            <MapDiagram__Wrapper>
              <MapDiagram
                className="mapdiagram" 
                territories={'none'} 
                highlighted={highlighted} 
                setHighlighted={setHighlighted} />
            </MapDiagram__Wrapper>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <TerritoryList 
              className="territorylist" 
              highlighted={highlighted} 
              setHighlighted={setHighlighted} />
          </Col>
    </Row__Decorated>
        </TabPanel>
        <TabPanel>
    <Row__Decorated>
          <Col xs={12}>
            <DesignationList />
          </Col> 
    </Row__Decorated>
        </TabPanel>
      </Tabs>
      <Row__Decorated>
        <Col xs={6}>
          {/* <button onClick={() => manageHistory()}>{`<`}</button> */}
          {/* <Link href="/" passHref>
            <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          </Link>
            <a className="title" href="#">{title}</a>
             */}
            {/* <a className="title__copyright" href="#">JSNKNG / 2020</a> */}
        </Col>
        <Col xs={6}>
          {/* <span>Toggle Theme</span><ToggleTheme /> */}
        </Col>
      </Row__Decorated>
      {/* <Row__Decorated>
        <Col xs={12} style={{columns: 3}}>
        { Object.entries(states).map(([key, value]) => {
        return ( 
          <Link href="/state/[stateCode]" as={`/state/${key}`} key={key}>
            <a>{value[0]}<br /></a>
          </Link>
        )
      })  
      }
        </Col>
      </Row__Decorated> */}
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  z-index: 120;
  padding: 1.5em .75em 1.75em .75em;
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
 

  h3 {
    text-align: center;
    width: 100%;
    font-size: 2em;
    line-height: .875;
    font-weight: 200;
    letter-spacing: -1px;
    margin: .75em auto;
    
  }
  img.logo {
    position: absolute;
    top: 5px;
    left: 10px;
    cursor: pointer;
    border: none;
    width: 42px;
    
  }
  .title {
    float:left;
    font-size: .875em;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0 0 0 44px;
    padding: 0;
  }
  .title__sub {
    float:left;
    font-size: .75em;
    line-height: 1;
    letter-spacing: -1px;
    font-weight: 500;
    padding: 0;
  }
  .title__copyright {
    float:left;
    clear: left;
    font-size: .75em;
    text-align: right;
    line-height: .75;
    letter-spacing: -1px;
    font-weight: 400;
    padding: .75em .25em 0 0;
    span {
      font-weight: 700;
    }
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


.react-tabs {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }

.react-tabs__tab-list {
  border-bottom: 1px solid #aaa;
  margin: 0 0 10px;
  padding: 0;
}

.react-tabs__tab {
  display: inline-block;
  border: 1px solid transparent;
  border-bottom: none;
  bottom: -1px;
  position: relative;
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
}

.react-tabs__tab--selected {
  background: #fff;
  border-color: #aaa;
  color: black;
  border-radius: 5px 5px 0 0;
}

.react-tabs__tab--disabled {
  color: GrayText;
  cursor: default;
}

.react-tabs__tab:focus {
  box-shadow: 0 0 5px hsl(208, 99%, 50%);
  border-color: hsl(208, 99%, 50%);
  outline: none;
}

.react-tabs__tab:focus:after {
  content: "";
  position: absolute;
  height: 5px;
  left: -4px;
  right: -4px;
  bottom: -5px;
  background: #fff;
}

.react-tabs__tab-panel {
  display: none;
}

.react-tabs__tab-panel--selected {
  display: block;
}



`

const Row__Decorated = styled(Row)`
  padding: 0;
  margin:0;
`

const MapDiagram__Wrapper = styled.div`
`
