import React from 'react'
import styled from 'styled-components'
import states from '../../config/states'

const Element = ({ territories, highlighted, setHighlighted, manageFuture }) => {

  // const handleClick = () => {
  //   manageFuture( link.href, link.as, link.title )
  // }
  return (
    <Map
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="170 100 930 700" 
      enableBackground="new 170 100 930 700" 
    > 
    <path id="path67" fill="none" stroke="#A9A9A9" strokeWidth="2" d="M385,593v55l36,45 M174,525h144l67,68h86l53,54v46"/>
      
      { Object.entries(states).map(([key, value]) => {
        if(territories !== undefined) {
          return ( 
            <path 
              key={key}
              id={key} 
              className={territories.split(',').includes(key.toUpperCase())  ? 'highlight' : 'nohighlight'} 
              d={value[1]} />
          )
        } else {
          return ( 
            <path 
              key={key}
              id={key} 
              className={highlighted === key ? 'highlight' : ''} 
              onMouseOver={() => setHighlighted(key)} 
              onMouseOut={() => setHighlighted('')} 
              d={value[1]}
              onClick={()=>manageFuture('/state/[stateCode]', `/state/${key}/`)}  />
          )
        }
      })
      }
    </Map>
  )
}
  
export default Element


const Map = styled.svg`
  margin: "0 auto"; 
  * {
      pointer-events: fill;
  }
  path {
    stroke: ${({ theme }) => theme.colors.color_five};
    stroke-width:1px;
    stroke-linejoin: round;
    -webkit-transition: fill .4s ease;
    -moz-transition: fill .4s ease;
    -o-transition: fill .4s ease;
    transition: fill .4s ease;	 
    fill: ${({ theme }) => theme.colors.image_overlay_opaque};
  }
  path:hover, circle:hover {
    stroke: ${({ theme }) => theme.colors.color_five};
    stroke-width:1px;
    stroke-linejoin: round;
    fill: ${({ theme }) => theme.colors.color_two};
    cursor: pointer;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
  }
  path.highlight {
    cursor: default;
    stroke: ${({ theme }) => theme.colors.color_five};
    stroke-linejoin: round;
    fill: ${({ theme }) => theme.colors.color_two};
    stroke-width:1px;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
    cursor: pointer;
  }
  path.nohighlight{
    stroke: ${({ theme }) => theme.colors.color_five};
    stroke-width:1px;
    stroke-linejoin: round;
    cursor: default;
	 	-webkit-transition: fill .4s ease;
	 	-moz-transition: fill .4s ease;
	 	-o-transition: fill .4s ease;
	 	transition: fill .4s ease;	 
    fill: ${({ theme }) => theme.colors.image_overlay_opaque};
  }
  #path67 {
    fill: none !important;
    stroke: ${({ theme }) => theme.colors.color_five} !important;
    cursor: default;
  }
  path#path67:hover {
    stroke-width: 1px;
  }
`
