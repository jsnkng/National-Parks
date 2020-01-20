import React, { useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ title, title__sub, manageHistory, manageFuture, lastPage }) => {
  const windowDimension = useWindowDimensions()
  /* Hacky, but trying to set semi intelligent sizes and margins based on title length */
  const titleClass = (title.length >= 40 && title__sub !== '') ? 'xtralong_sub' :
  (title.length >= 40 && title__sub === '') ? 'xtralong_no_sub' :
  (title.length >= 27 && title__sub !== '') ? 'long_sub' :
  (title.length >= 27 && title__sub === '') ? 'long_no_sub' : 

  (title.length > 24 && title__sub !== '') ? 'short_sub' : 
  (title.length > 24 && title__sub === '') ? 'short_no_sub' : ''

  

  return (
    <>
    <Header className={windowDimension.scrollY > .5 * windowDimension.height ? "" : "hidden" } >
      <div className={windowDimension.scrollY > .5 * windowDimension.height ? "" : "hidden top__back" } 
        onClick={() => manageHistory()}>
        
        <div className='top__back--container'>
          <Arrow />
          <div className='top__back--title'>
            {lastPage}
          </div>
        </div>

        <div className='top__title--container'>
          <div className={`${title__sub === '' ? 'top__title' : 'top__title'} ${titleClass}`}
              dangerouslySetInnerHTML={{__html: title }}></div>

          { title__sub !== '' &&
            <div className={`top__title--sub ${titleClass}`}>{title__sub}</div>
          }
        </div>

      </div>

      
    </Header>
    <Logo onClick={() => manageFuture('/', '/')}>
      <div className="top__logo">
        <a className="top__logo--text" href="#">National<br />Park<br />Service</a>
        <img className="top__logo--image" src="/us-nps.png" width="90" alt="National Parks Service" />
      </div>
    </Logo>
    </>
  )
}


export default Component

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1200;
  &.hidden {
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.home_text_shadow};
  color: ${({ theme }) => theme.colors.home_text};
    background-color: transparent;
  }
  ${'' /* ${SuperQuery().minWidth.of('568px').and.maxWidth.of('896px').and.landscape.css`
    position: relative;
  `} */}
  ${SuperQuery().minWidth.md.css`
    height: 4rem;
  `}
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
    &:focus {
      text-decoration: underline !important;
    }
  }
  .top__back {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 3;
    width: 100%;
    &:focus {
      text-decoration: underline !important;
    }
    &.hidden {
      display:none;
    }
  }
  .top__back--title {
    font-weight: 700;
  }
  svg {
    width: 1.875rem;
    height: 2rem;
    margin-right: 0.125rem
    fill: ${({ theme }) => theme.colors.dim_text};
    cursor: pointer;
    outline: none;
  }
  .top__title--container {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    height: 4rem;
    margin-right: 1rem;

  }
  .top__back--container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 4rem;
  }
  .top__title {
    display: block;
    font-size: 1.375rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -1.5px;
    margin: 0;
    padding: 0;
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.75rem;
    `}
  } 
  .top__title--large {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    ${SuperQuery().maxWidth.of('325px').css`
      font-size: 1.375rem;
    `}
    &.xtralong_sub,
    &.xtralong_no_sub {
      font-size: 1.125rem;
      line-height: 1.05;
      ${SuperQuery().minWidth.sm.css`
        font-size: 1.375rem;
      `}
    }
  }
  .long_no_sub {
    font-size: 1.175rem;
    ${SuperQuery().maxWidth.of('325px').css`
      font-size: 1rem;
    `}
    ${SuperQuery().minWidth.of('415px').css`
      font-size: 1.125rem;
    `}
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.5rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 1.75rem;
    `}
    ${SuperQuery().minWidth.lg.css`
      font-size: 1.875rem;
    `}
  }
  .short_no_sub {
    font-size: 1.375rem;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.875rem;
    `}
    ${SuperQuery().maxWidth.of('325px').css`
      font-size: 1.25rem;
    `}
  }
  .long_sub {
    font-size: 1rem;
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.5rem;
    `}
  }
  .short_sub {
    font-size: 1.175rem;
  }

  .top__title--sub {
    font-size: 1rem;
    line-height: 1;
    font-weight: 200;
    border: 0;
    margin: 0;
    padding: 0;
    ${SuperQuery().minWidth.sm.css`
      font-size: 1.125rem;
    `}
    ${SuperQuery().minWidth.md.css`
      font-size: 1.1875rem;
    `}
    &.long_sub {
      font-size: .875rem;
      ${SuperQuery().minWidth.sm.css`
        font-size: 1.125rem;
      `}
    }
  }   
`

const Logo = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.25rem;
  z-index: 10000;
  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: ${({ theme }) => theme.colors.home_text};
    &:focus {
      text-decoration: underline !important;
    }
  }

  .top__logo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    min-width: 110px;
  }
  .top__logo--image {
    cursor: pointer;
    border: none;
    width: 2.5em;
    margin-right: .5rem;
    ${SuperQuery().minWidth.md.css`
      width: 3.25rem;
    `}
  }
  .top__logo--text {
    text-align:right;
    font-size: .925rem;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin-right: .375rem;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
    ${SuperQuery().minWidth.md.css`
      font-size: 1.0625rem;
      letter-spacing: -1.5px;
  `}
}
`