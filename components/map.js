import React, {useState} from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import Link from 'next/link'
import states from './statesLookup'
import SuperQuery from '@themgoncalves/super-query'


const MapDiagram = props => {
  const handleHover = (territory) => {
    props.onHighlight(territory)
  }
  return (
    <MapWrapper>
    <SVG highlighted={props.highlighted} handleHover={handleHover} />
    </MapWrapper>
  )
}

const SVG = props => {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="174 100 959 593" 
      enableBackground="new 174 100 959 593" 
    >
      { Object.entries(states).map(([key, value]) => {
        const as = "/state/" + key
        return ( 
          <Link 
            href="/state/[stateCode]" 
            as={as} >
            <a><path key={key} id={key} className={props.highlighted === value[0] ? 'highlight' : ''} onMouseOver={() => props.handleHover(value[0])} onMouseOut={() => props.handleHover(null)} onClick={() => {}} fill="#D3D3D3" d={value[1]} /></a>
          </Link>
        )
      })
      }
      <path id="path67" fill="none" stroke="#A9A9A9" strokeWidth="2" d="M385,593v55l36,45 M174,525h144l67,68h86l53,54v46"/>
    </svg>
  )
}
  
export default MapDiagram

const MapWrapper = styled.div`
  margin: 20px auto;

  path.highlight,
  path:hover, circle:hover {
    stroke: #00ac47 !important;
    stroke-width:2px;
    stroke-linejoin: round;
    fill: #00ac47 !important;
    cursor: pointer;
  }
  #path67 {
    fill: none !important;
    stroke: #A9A9A9 !important;
    cursor: default;
  }
  #info-box {
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    background-color: #ffffff;
    border: 2px solid #BF0A30;
    border-radius: 5px;
    padding: 5px;
    font-family: arial;
  }
  area:hover {
    cursor: pointer;
  }
  text-align: center;
`
