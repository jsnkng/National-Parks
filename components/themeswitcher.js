import React from 'react'
import styled from 'styled-components'

const Component = ({ theme, setTheme }) => {
  return (
    <>
      <a onClick={() => setTheme('dayTheme')}>Light</a> | 
      <a onClick={() => setTheme('nightTheme')}>Dark</a>
      {/* | <a onClick={() => props.setTheme('rainbowTheme')}>Rainbow</a> */}
    </>
  )
}

export default Component
