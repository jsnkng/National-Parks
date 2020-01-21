import React, {useState} from 'react'
import styled from 'styled-components'

const Element = ({ isSpinnerVisible }) => {
  return (
    <Spinner className={isSpinnerVisible || 'hide'}>
      <div className='progress' aria-hidden='true'>
        <div className='spinner' role='spinner'>
          <div className='spinner-icon'></div>
        </div>
      </div>
    </Spinner>
  )
}
  
export default Element

const Spinner = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.image_overlay_opaque};
  color: ${props => props.theme.colors.text};
  z-index: 100;
  &.hide {
    display: none;
  }
  .progress {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .progress .spinner {
    display: block;
  }
  .progress .spinner-icon {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    border: solid 0.5rem transparent;
    border-top-color:  ${({ theme }) => theme.colors.color_two};
    border-left-color:  ${({ theme }) => theme.colors.color_three};
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }
  @-webkit-keyframes nprogress-spinner {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
