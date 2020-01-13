import { createGlobalStyle } from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    font-family: Helvetica, "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 112.5%;
    line-height: 1.45;
    letter-spacing: -0.025rem;
    transition: all .25s ease-in-out;
    opacity: 1.0;
    -webkit-transition: background .25s  ease-in-out;
    -moz-transition: background .25s  ease-in-out;
    -o-transition: background .25s  ease-in-out;
    -ms-transition: background .25s  ease-in-out;
    transition: background .25s  ease-in-out;
  }
  div, header, footer, main {
    -webkit-transition: background .25s  ease-in-out;
    -moz-transition: background .25s  ease-in-out;
    -o-transition: background .25s  ease-in-out;
    -ms-transition: background .25s  ease-in-out;
    transition: background .25s  ease-in-out;
  }
  @-webkit-keyframes myfirst {
    from {opacity: 0.2;}
    to {opacity: 1;}
  }
  @keyframes myfirst {
    from {opacity: 0.2;}
    to {opacity: 1;}
  }

  h1,h2,h3,h4,h5,h6 {
    word-break: normal;
  }
  h1 {
    font-size: 2.75rem;
    letter-spacing: -0.1rem;
    line-height: .875;
    margin: 1rem 0 0.5rem 0;
    span {
      display: inline-block;
      font-size: 2rem;
      font-weight: 400;
    }
  }
  h2 {
    font-size: 2.25rem;
    letter-spacing: -0.075rem;
    line-height: 1.225;
    margin: 1rem 0 .5rem 0;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }
  h3 {
    font-size: 1.75rem;
    letter-spacing: -0.05rem;
    line-height: 1.225;
    margin: 0;

  }

  h4 {
    font-size: 1.5rem;
    letter-spacing: -0.05rem;
    line-height: 1.225;
    margin: 1rem 0 .5rem 0;
  }
  h5 {
    font-size: 1.5rem;
    letter-spacing: -0.05rem;
    line-height: 1.225;
  }
  h6 {
  }
  p, .p {
    font-weight: 200;
    margin: .5rem 0;
    overflow-wrap: break-word;
  }
  p.introduction,
  .introduction p,
  .introduction {
    font-size: 1.375rem;
    font-weight: 400;
    margin: 1rem 0 0.75rem 0;

    ul {
      margin: 0;
      padding: 0 0 0 1rem;
    }
    li {
      padding: 0.5rem 0 0 .25rem;
    }
  }

  .description {
    overflow-wrap: break-word;
    padding: .5rem .5rem 1rem .5rem;
    margin: 0;
    ul {
      margin: 0;
      padding: 0 0 0 1rem;
    }
    li {
      padding: .5rem 0 0 .25rem;
    }
  
  }
  

  table.hours {
    width: 100%;
    min-width: 12rem;
    max-width: 14rem;

    th {
      padding: 0.25rem;
      text-align: left;
      border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
    }
    td {
      padding: 0.25rem;
      text-align: right;
      border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
    }
  }

  .section {
    margin: 1rem .25rem 1rem 0.25rem;
    padding: 0.5rem 0 0 0;
    border-top: 2px solid ${({ theme }) => theme.colors.offbackground};
    &:first-of-type {
      border:none;
      margin-bottom: 0;
    }
  }
   
  a {
    color: ${({ theme }) => theme.colors.color_one};
    cursor: pointer !important;
    p {
      color:  ${({ theme }) => theme.colors.text};
    }
    &:hover {
    text-decoration: none !important;
      color: ${({ theme }) => theme.colors.color_two};
    cursor: pointer !important;
    }
  }
  
  table {
    font-size: .9375rem;
    border-spacing: 0;
  }

  .btn__load-more {
    clear: both;
    display:block;
    height: 45px;
    margin: 1rem auto ;
    padding: 0 1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.color_one};
    border: 1px solid ${({ theme }) => theme.colors.color_two};
    background-color: ${({ theme }) => theme.colors.spinner};
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
    border: 1px solid ${({ theme }) => theme.colors.color_two};
    padding: .25rem 1.25rem;
    margin: .5rem 2rem 2rem 0;
    text-transform: uppercase; 
    color: ${({ theme }) => theme.colors.color_one};
    background-color: ${({ theme }) => theme.colors.spinner};
    cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.color_two};
    background-color: rgba(255,255,255,.015);
  }
  ${SuperQuery().minWidth.md.css`
    padding: .15rem 1.15rem;
    margin: 1px;
    border: 0;
    background-color: transparent;
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
  }
  .accordion__button {
    color: ${({ theme }) => theme.colors.color_one};
    text-indent: .5rem;
    padding:  1rem 0 1rem .5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
    outline: 0;
    cursor: pointer;
    text-indent: 0;
    h3 {
      margin-block-end:0px;
      margin-block-start:0px;
      margin-bottom:0px;
      margin-inline-end:0px;
      margin-inline-start:0px;
      margin-left:.5rem;
      margin-right:0px;
      margin-top:0px;
    }
  }
  .accordion__button:hover {
    color: ${({ theme }) => theme.colors.color_two};
  }
  .accordion__button:before {
    display: inline-block;
    float: left;
    content: '';
    height: .5rem;
    width: .5rem;
    margin: .75rem .5rem 0 -.5rem;

    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }
  .accordion__button[aria-expanded='true'],
  .accordion__button[aria-selected='true'] {
    color: ${({ theme }) => theme.colors.color_two};
  }
  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);

  }
  .accordion__panel {
  animation: fadein 0.35s ease-in;
  padding: 0 0 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
  }
  .accordion__panel[attr=hidden] {
  }
  @keyframes fadein {
    0% { opacity: 0; }
    100% { opacity: 1; }
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

/* Make clicks pass-through */
#nprogress {
    pointer-events: none;
  }
  
  #nprogress .bar {
    background: ${({ theme }) => theme.colors.color_three};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }
  
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    ${'' /* box-shadow: 0 0 10px ${({ theme }) => theme.colors.color_two}, 0 0 5px ${({ theme }) => theme.colors.color_two}; */}
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  
  /* Rremove these to get rid of the spinner */
  ${'' /* #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: .875rem;
    left: .625rem;
  }
  #nprogress .spinner-icon {
    width: 2.5rem;
    height: 2.5rem;
    box-sizing: border-box;
    border: solid 8px transparent;
    border-top-color:  ${({ theme }) => theme.colors.color_two};
    border-left-color:  ${({ theme }) => theme.colors.color_three};
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  } */}
  
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  
  ${'' /* @-webkit-keyframes nprogress-spinner {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  } */}
`
export default GlobalStyle
