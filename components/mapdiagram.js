import React, {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import states from '../config/datastates'

const Component = ({ territories, highlighted, onHighlight }) => {
 

  return (
    <Map
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="174 100 959 593" 
      enableBackground="new 174 100 959 593" 
    > 
    <path id="path67" fill="none" stroke="#A9A9A9" strokeWidth="2" d="M385,593v55l36,45 M174,525h144l67,68h86l53,54v46"/>
      { Object.entries(states).map(([key, value]) => {
        if(territories === "none") {
          return ( 
            <Link  
              key={key}
              href="/state/[stateCode]" 
              as={"/state/" + key}
              passHref>
                <path 
                  id={key} 
                  className={highlighted === value[0] ? 'highlight' : ''} 
                  onMouseOver={() => onHighlight(value[0])} 
                  onMouseOut={() => onHighlight(null)} 
                  d={value[1]}  />
            </Link>
          )
        } else {
          return ( 
            <path 
              key={key}
              id={key} 
              className={territories.split(',').includes(key.toUpperCase())  ? 'highlight' : 'nohighlight'} 
              d={value[1]} />
          )
        }
      })
      }
    </Map>
  )
}
  
export default Component


const Map = styled.svg.attrs(props => ({
  margin: "20px auto",
}))`

  * {
      pointer-events: fill;
  }
  path {
    stroke: ${props => props.theme.colors.background};
    stroke-width:1px;
    stroke-linejoin: round;
    fill: ${props => props.theme.colors.color_four};
    -webkit-transition: fill .4s ease;
    -moz-transition: fill .4s ease;
    -o-transition: fill .4s ease;
    transition: fill .4s ease;	 
  }
  path:hover, circle:hover {
    stroke: ${props => props.theme.colors.color_three};
    stroke-width:2px;
    stroke-linejoin: round;
    fill: ${props => props.theme.colors.color_three};
    cursor: pointer;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
  }
  path.highlight {
    cursor: default;
    stroke: ${props => props.theme.colors.color_three};
    stroke-linejoin: round;
    fill: ${props => props.theme.colors.color_three};
    stroke-width:0px;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
    cursor: pointer;
  }
  path.nohighlight{
    stroke: ${props => props.theme.colors.background};
    stroke-width:0px;
    stroke-linejoin: round;
    fill: ${props => props.theme.colors.color_four};
    cursor: default;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
  }
  #path67 {
    fill: none !important;
    stroke: ${props => props.theme.colors.color_four} !important;
    cursor: default;
  }
  path#path67:hover {
    stroke-width: 1px;
  }
`
