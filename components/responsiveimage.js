import React from 'react'
import styled from 'styled-components'

const ResponsiveImage = props => {
    console.log(props)
  return (
    <Image url={props.url} 
        height={props.height} 
        margin={props.margin} 
    />
  )
}
  
export default ResponsiveImage

const Image = styled.div.attrs(props => ({
    backgroundColor: "red",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    height: "600px",
    margin: props.margin,
    width: "100%"
}))`
`
