import { createGlobalStyle } from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    font-family: Helvetica, "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    font-size: 16px;
    background-color: ${props => props.theme.colors.background};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all .25s ease-in-out;
    ${SuperQuery().minWidth.sm.css`
      font-size: 20px;
      letter-spacing: -.5px;
    `}
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4,h5,h6 {
    word-break: normal;
  }
  h1 {
    font-size: 2.5em;
    padding: 0;
    line-height: .9;
    letter-spacing: -1.5px;
    margin: .25em 0 .125em 0;
    span {
      display: inline-block;
      font-weight: 400;
      font-size: .725em;
      letter-spacing: -1px;
      line-height: .5;
    }
  }
  h2 {
    font-size: 2em;
    line-height: 1;
    margin: 0;
    padding: .425em .575em .425em 0;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.text};
    ${SuperQuery().minWidth.md.css`
      padding: .25em .25em .25em 0;
    `}
  }
  h3 {
    font-size: 1.5em;
    line-height: 1.1;
    letter-spacing: -1px;
    margin: .5em 0 0 0;
  }

  h4 {
    font-size: 1.75em;
    line-height: 1.1;
    letter-spacing: -1.5px;
    margin: 0;
    padding: .5em 0 0 0;
    ${SuperQuery().minWidth.md.css`
    font-size: 1.5em;
    `}
    ${SuperQuery().minWidth.lg.css`
    font-size: 1.75em;
    `}
  }
  h5 {
    font-size: 1.25em;
    line-height: 1.2;
    letter-spacing: -1.5px;
    margin: 0;
    padding: .5em 0 0 0;
  }
  h6 {
    font-size: 2em;
  }
  a {
    color: ${props => props.theme.colors.color_one};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.color_two};
      text-decoration: underline;
    }
  }
  p {
    padding: .5em 0 0 0;
    margin: 0 0 .5em 0;
    font-size: 1em;
    font-weight: 300;
    overflow-wrap: break-word;
  }
  .articles__date {
    display: block;
    font-size: 1em;
    padding: 1em 0 0 0;
    margin: 0;
    font-weight: 700;
  }

  .description {
    font-size: 1.125em;
    overflow-wrap: break-word;
    padding: 0 .25em 1em .25em;
    margin: .5em 0 0 0;
    ul {
      margin: 0;
      padding: 0 0 0 1em;
    }
    li {
      padding: .5em 0 0 .25em;
    }
  }

  .details {
    font-size: .875em;
    background-color: ${props => props.theme.colors.box_background};
    padding: 1em 1em;
    margin: 1em .25em;
    p {
      margin: 0;
      padding:0;
    }
    ${SuperQuery().minWidth.md.css`
      margin: 1em 0;
    `}
  }


  summary {
    outline: none;
  }

  .btn__load-more {
    clear: both;
    display:none;
    height: 45px;
    margin: 2em auto 0;
    padding: 0 1em;
    font-size: .875em;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.theme.colors.color_one};
    border: 1px solid ${props => props.theme.colors.color_two};
    background-color: ${props => props.theme.colors.spinner};
    cursor: pointer;
  &:hover {
    background-color: rgba(255,255,255,.015);
  }
  &.hidden {
    display:none;
  }
  ${SuperQuery().minWidth.md.css`
    display:block;
  `}
  }
  .btn__read-more {
    float: right;
    border: 1px solid ${props => props.theme.colors.color_two};
    padding: .25em 1.25em;
    margin: .5em 2em 2em 0;
    font-size: .875em;
    font-weight: 500;
    text-transform: uppercase; 
    color: ${props => props.theme.colors.color_one};
    background-color: ${props => props.theme.colors.spinner};
    cursor: pointer;
  &:hover {
    border: 1px solid ${props => props.theme.colors.color_two};
    background-color: rgba(255,255,255,.015);
  }
  ${SuperQuery().minWidth.md.css`
    font-size: .625em;
    padding: .15em 1.15em;
    margin: 1px;
    border: 0;
    background-color: transparent;
    text-decoration: underline !important;
    &:hover {
      background-color: rgba(255,255,255,0);
      text-decoration: none !important; 
      margin:0;
    }
  `}
  }

  .accordion {
    border: none;
    padding: 0;
  }

  .accordion__item + .accordion__item {
  border-bottom: 1px solid ${props => props.theme.colors.offbackground};
  }

  .accordion__button {
    color: ${props => props.theme.colors.color_one};
    line-height: 1.2;
    font-weight: 600;
    text-indent: .5em;
    padding:  1.25em 0 1.25em .5em;
    border-bottom: 1px solid ${props => props.theme.colors.offbackground};
    outline: 0;
    cursor: pointer;
    text-indent: 0;

    h3 {
      letter-spacing:-1px;
      margin-block-end:0px;
      margin-block-start:0px;
      margin-bottom:0px;
      margin-inline-end:0px;
      margin-inline-start:0px;
      margin-left:.5em;
      margin-right:0px;
      margin-top:0px;
    }
  }
  .accordion__button:hover {
    color: ${props => props.theme.colors.color_two};
  }

  .accordion__button:before {
    display: inline-block;
    float: left;
    content: '';
    height: .5em;
    width: .5em;
    margin: .5em .5em 0 -.5em;

    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }
  .accordion__button[aria-expanded='true'],
  .accordion__button[aria-selected='true'] {
    color: ${props => props.theme.colors.color_two};
  }
  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);

  }

  .accordion__panel {
  animation: fadein 0.35s ease-in;
  padding: 0 0 1em 0;
  border-bottom: 1px solid ${props => props.theme.colors.offbackground};
  }
  .accordion__panel[attr=hidden] {
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }



  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 250ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }


`
export default GlobalStyle
