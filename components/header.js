import React from 'react'
import styled from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import SuperQuery from '@themgoncalves/super-query'
import { Arrow } from '../svgs/l-arrow.svg'

const Component = ({ title, title__sub, manageHistory, manageFuture }) => {
  /* Hacky, but trying to set semi intelligent sizes and margins based on title length */
  const titleClass = (title.length >= 40 && title__sub !== '') ? 'xtralong_sub' :
  (title.length >= 40 && title__sub === '') ? 'xtralong_no_sub' :
  (title.length >= 29 && title__sub !== '') ? 'long_sub' :
  (title.length >= 29 && title__sub === '') ? 'long_no_sub' : 
  (title.length >= 27 && title__sub !== '') ? 'med_sub' :
  (title.length >= 27 && title__sub === '') ? 'med_no_sub' : 
  (title.length > 24 && title__sub !== '') ? 'short_sub' : 
  (title.length > 24 && title__sub === '') ? 'short_no_sub' : ''

 

  return (
    <Header>
      <Grid fluid={true}>
        <Row className='top'>
          <Col className='top__back' xs={9} md={10}  onClick={() => manageHistory()}>
              <Arrow />
              <span className={`${title__sub === '' ? 'title large' : 'title'} ${titleClass}` }>{title}</span>
              { title__sub !== '' &&
                <span className="title__sub">{title__sub}</span>
              }
          </Col>
          <Col className='top__logo' xs={3} md={2} onClick={() => manageFuture('/', '/')}>
            <img className="top__logo--image" src="/us-nps.png" width="90" alt="National Parks Service" />
            <a className="top__logo--text" href="#">National<br />Park<br />Service</a>
          </Col>
        
        </Row> 
      </Grid>
    </Header>
  )
}

export default Component

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.trans_back};
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1200;
  height: 4rem;
    ${SuperQuery().maxWidth.of('896px').and.landscape.css`
      position: relative;
    `}
    ${SuperQuery().minWidth.md.css`
      height: 5rem;
    `}

  a {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: inherit;
  }
  .top {
    padding: 0;
    margin:0;
    height: 4rem;
  }
  .top__logo--image {
    position: absolute;
    top: .625rem;
    right: .25rem;
    cursor: pointer;
    border: none;
    width: 2.5em;
    padding: 0;
    ${SuperQuery().minWidth.md.css`
      top: .75rem;
      right: .5rem;
      width: 3.5rem;
    `}
  }
  .top__logo--text {
    display: block;
    text-align:right;
    font-size: .925rem;
    line-height: .875;
    font-weight: 700;
    letter-spacing: -1px;
    margin: 0.8rem 1.75rem 0 -2rem;
    ${SuperQuery().minWidth.md.css`
      font-size: 1.125rem;
      letter-spacing: -1.5px;
      margin: 1rem 2.5rem 0 -3rem;
    `}
  }

  .top__back {
    max-width: 100%;
    height: 5rem;
    overflow: hidden;
    .title {
      display: block;
      float: left;
      font-size: 1.5rem;
      line-height: 1;
      font-weight: 700;
      letter-spacing: -1.5px;
      margin: 0.8rem 0 0 .25rem;

      ${SuperQuery().maxWidth.of('325px').css`
        font-size: 1.125rem;
        margin: 1rem 0 0 .25rem;
      `}
      ${SuperQuery().minWidth.md.css`
        font-size: 1.875rem;
        margin: 1.125rem 0 0 1rem;
      `}

      &.large {
        font-size: 1.375rem;
        margin: 1.25rem 0 0 .5rem;

        ${SuperQuery().maxWidth.of('325px').css`
          font-size: 1rem;
          margin: 1rem 1rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.md.css`
          font-size: 1.875rem;
          margin: 1.5rem 0 0 1rem;
        `}
      }

      &.xtralong_no_sub {
        font-size: 1.175rem;
        margin: 0.875rem 0 0 .25rem;
        ${SuperQuery().maxWidth.of('325px').css`
          font-size: 1rem;
          margin: 0.5rem 1rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.of('415px').css`
          font-size: 1.125rem;
          margin: 1rem 0.5rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.sm.css`
          font-size: 1.5rem;
          margin: .625rem 0 0 0.375rem;
        `}
        ${SuperQuery().minWidth.md.css`
          font-size: 1.75rem;
          margin: .75rem 8rem 0 1rem;
        `}
        ${SuperQuery().minWidth.lg.css`
          font-size: 1.875rem;
          margin: 1.625rem 0 0 1rem;
        `}
      }
      &.xtralong_sub {
        font-size: 1.175rem;
        margin: 0.875rem 0 0 .25rem;
        ${SuperQuery().maxWidth.of('325px').css`
          font-size: 1rem;
          margin: 0.5rem 1rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.of('415px').css`
          font-size: 1.125rem;
          margin: 1rem 0.5rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.sm.css`
          font-size: 1.375rem;
          margin: .75rem 1rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.md.css`
          font-size: 1.75rem;
          margin: 1.125rem 0rem 0 1rem;
        `}
        ${SuperQuery().minWidth.lg.css`
          font-size: 1.875rem;
          margin: 1.25rem 0 0 1rem;
        `}
      }

      &.long_no_sub {
        font-size: 1.175rem;
        margin: 0.875rem 0 0 .25rem;
        ${SuperQuery().maxWidth.of('325px').css`
          font-size: 1rem;
          margin: 1rem 1rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.of('415px').css`
          font-size: 1.125rem;
          margin: 1rem 0.5rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.sm.css`
          font-size: 1.5rem;
          margin: 1.1125rem 0 0 0.375rem;
        `}
        ${SuperQuery().minWidth.md.css`
          font-size: 1.75rem;
          margin: 1.625rem 1rem 0 1rem;
        `}
        ${SuperQuery().minWidth.lg.css`
          font-size: 1.875rem;
          margin: 1.625rem 0 0 1rem;
        `}
      }
      &.long_sub {
        font-size: 1.125rem;
        margin: 0.375rem 1.5rem 0 0.375rem;
        ${SuperQuery().maxWidth.of('325px').css`
          font-size: 1rem;
          margin: 0.5rem 0.5rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.of('415px').css`
          font-size: 1.125rem;
          margin: 1rem 0.5rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.sm.css`
          font-size: 1.5rem;
          margin: 0.75rem 0 0 0.375rem;
        `}
        ${SuperQuery().minWidth.md.css`
          font-size: 1.875rem;
          margin: 1.125rem 0 0 1rem;
        `}
      }
      &.med_no_sub {
        font-size: 1.375rem;
        margin: .625rem 0 0 .5rem;
        ${SuperQuery().minWidth.md.css`
          font-size: 1.875rem;
          margin: 1.5rem 0 0 1rem;
        `}
      }
      &.med_sub {
        font-size: 1.175rem;
        margin: 1rem 0 0 0.375rem;
        ${SuperQuery().maxWidth.of('325px').css`
          font-size: 1rem;
          margin: 0.5rem 0.5rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.md.css`
          font-size: 1.5rem;
          margin: 1.25rem 0 0 1rem;
        `}
      }
      &.short_no_sub {
        font-size: 1.375rem;
        margin: 1.25rem 0 0 .5rem;
        ${SuperQuery().minWidth.md.css`
          font-size: 1.875rem;
          margin: 1.5rem 0 0 1rem;
        `}
        ${SuperQuery().maxWidth.of('325px').css`
          font-size: 1.25rem;
          margin: 0.75rem 0.5rem 0 0.375rem;
        `}
        ${SuperQuery().minWidth.md.css`
        
        `}
      }
      &.short_sub {
        font-size: 1.175rem;
        margin: 0.625rem 0 0 1.75rem;
        ${SuperQuery().minWidth.md.css`
        
        `}
      }
    }
    .title__sub {
      display: block;
      float: left;
      clear: left;
      font-size: 1rem;
      line-height: 1;
      font-weight: 200;
      margin: 0 0 0 .375rem;
      ${SuperQuery().minWidth.md.css`
        margin: 0 0 0 1rem;
      `}
    }
    svg {
      position: absolute;
      top: .875rem;
      left: 0;
      width: 2.25rem;
      height: 2.25rem;
      fill: ${({ theme }) => theme.colors.text};
      cursor: pointer;
      outline: none;
      ${SuperQuery().minWidth.md.css`
        top: 1.25rem;
        left: 0.25rem;
        width: 2.5rem;
        height: 2.5rem;
      `}
    }
  }
`