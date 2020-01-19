import React, {useState} from 'react'
import styled from 'styled-components'

const Component = ({ isSpinnerVisible }) => {
  return (
    <Spinner className={isSpinnerVisible ? 'show' : 'hide'}>
      <div className='progress' aria-hidden='true'>
        <div className='spinner' role='spinner'>
          <div className='spinner-icon'></div>
        </div>
      </div>
    </Spinner>
  )
}
  
export default Component

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 190px;
  z-index: 100;
  background-color: ${props => props.theme.colors.image_overlay_opaque};
  color: ${props => props.theme.colors.text};
  font-size: .7em;
    z-index: 12031;
  &.show {
    display: block;
  }
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
    flex: 0 1 auto;
  }
  .progress .spinner-icon {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    box-sizing: border-box;
    border: solid 8px transparent;
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
