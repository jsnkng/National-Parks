import React, {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import states from './datastates'

const MapDiagram = props => {

  const handleHover = (territory) => {
    props.onHighlight(territory)
  }
  return (
    <MapWrapper>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="174 100 959 593" 
        enableBackground="new 174 100 959 593" 
      >
        { Object.entries(states).map(([key, value]) => {
          if(props.states === "none") {
            return ( 
              <Link  
                key={key}
                href="/state/[stateCode]" 
                as={"/state/" + key}>
                <a>
                  <path 
                    id={key} 
                    className={props.highlighted === value[0] ? 'highlight' : ''} 
                    onMouseOver={() => handleHover(value[0])} 
                    onMouseOut={() => handleHover(null)} 
                    onClick={() => {}} 
                    d={value[1]} />
                </a>
              </Link>
            )
          } else {
            return ( 
              <path 
                key={key}
                id={key} 
                className={props.states.split(',').includes(key.toUpperCase())  ? 'highlight' : 'nohighlight'} 
                d={value[1]} />
            )
          }
        })
        }
        <path id="path67" fill="none" stroke="#A9A9A9" strokeWidth="2" d="M385,593v55l36,45 M174,525h144l67,68h86l53,54v46"/>
      </svg>
    </MapWrapper>
  )
}

  
export default MapDiagram

const MapWrapper = styled.div`
  margin: 20px auto;

  *{
      pointer-events: fill;
  }
  path {
      stroke: #ffffff;
      stroke-width:1px;
      stroke-linejoin: round;
      fill: #d7d6cb;
      -webkit-transition: fill .4s ease;
      -moz-transition: fill .4s ease;
      -o-transition: fill .4s ease;
      transition: fill .4s ease;	 

  }
  path:hover, circle:hover {
    stroke: #00ac47;
    stroke-width:2px;
    stroke-linejoin: round;
    fill: #69bb37;
    cursor: pointer;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
  }
  path.highlight {
    cursor: default;
    stroke: #00ac47;
    stroke-linejoin: round;
    fill: #69bb37;
    stroke-width:0px;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
  }
  path.nohighlight{
    stroke: #D3D3D3;
    stroke-width:0px;
    stroke-linejoin: round;
    fill: #d7d6cb;
    cursor: default;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
  }
  #path67 {
    fill: none !important;
    stroke: #d7d6cb !important;
    cursor: default;
  }
  path#path67:hover {
    stroke-width: 1px;
  }
`
