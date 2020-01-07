import React from 'react'
import styled from 'styled-components'

const Component = () => {
  return (
    <Copyright>
      <a href="#"><span>JSNKNG</span> / 2020</a>
    </Copyright>
  )
}

export default Component


const Copyright = styled.div`
  font-size: .625em;
  letter-spacing: -1px;
  font-weight: 400;
  span {
    font-weight: 700;
  } 
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  
`