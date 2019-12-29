import React from 'react'
import styled from 'styled-components'

const Loader = () => (
  <Loader__Container />
)

export default Loader

const Loader__Container = styled.div`
  border: 18px solid ${props => props.theme.colors.color_two};
  border-top: 18px solid ${props => props.theme.colors.color_one};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`