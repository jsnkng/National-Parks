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

    ${SuperQuery().minWidth.of('1360px').css`
      font-size: 22px;
    `}
    ${SuperQuery().minWidth.of('2400px').css`
      font-size: 28px;
    `}
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
    margin: 3rem 0 0.5rem 0;
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
    margin: 1.5rem 0 .5rem 0;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  }
  h3 {
    font-size: 1.5rem;
    letter-spacing: -0.05rem;
    line-height: 1.225;
    margin: 0.75rem 0 0 0;

  }

  h4 {
    font-size: 1.375rem;
    letter-spacing: -0.05rem;
    line-height: 1.225;
    margin: .5rem 0 .375rem 0;
  }
  h5 {
    font-size: 1rem;
    letter-spacing: -0.05rem;
    line-height: 1;
    margin: 0.25rem 0 0 0;

    ${SuperQuery().minWidth.sm.css`
    font-size: 1.125rem;
    line-height: 1.125;
    `}
  }
  h6 {
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

      .arrow__read-more {
        fill: ${({ theme }) => theme.colors.color_two};
        ${'' /* border-radius:12px; */}
      }
    }
    &:focus {
      text-decoration: underline !important;
    }
  }
  
  p, .p {
    font-weight: 200;
    margin: 0 0 0.5rem 0;
    overflow-wrap: break-word;
  }
  .large {
    font-size: 150%;
    font-weight:700;
    letter-spacing: -0.1rem;
    margin: 1.625rem 0 0 0;
    line-height: 1;
    overflow-wrap: break-word;
  }
  p.introduction,
  .introduction p,
  .introduction {
    overflow-wrap: break-word;
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
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
    width: 95%;
    min-width: 12rem;
    ${SuperQuery().minWidth.sm.css`
      min-width: 12rem;
    `}
    th, td {
      padding: 0.25rem 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
      font-size: 1rem;
      ${SuperQuery().minWidth.sm.css`
        font-size: 1rem;
      `}
    }
    th {
      text-align: left;
    }
    td {
      text-align: right;
    }
  }
  .section {
    margin-top: .5rem;
    padding-top: .5rem;
    border-top: 2px solid ${({ theme }) => theme.colors.offbackground};
    &:first-of-type {
      border:none;
      margin-bottom: 0;
    }
    li {
      font-weight: 200;
    }
  }
  table {
    font-size: .9375rem;
    border-spacing: 0;
  }

  .btn__load-more {
    clear: both;
    display:block;
    height: 1.875rem;
    margin: 0 auto 2rem  auto;
    width: 100vw;
    padding: 1rem;
    font-size: .75rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.color_one};
    border: none;
    outline: none;
    border-top: 1px solid ${({ theme }) => theme.colors.color_two};
    background-color: transparent;
    cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.color_two};
  }
  &:focus {
    text-decoration: underline !important;
  }
  &.hidden {
    display:none;
  }
  ${SuperQuery().minWidth.md.css`
    display:block;
    margin: 2rem auto;
  `}
  }

  .arrow__read-more {
    transform: rotate(180deg);
    background-color: ${({ theme }) => theme.colors.trans_back};
    width: 24px;
    float: right;
    fill: ${({ theme }) => theme.colors.text};
    margin-top: -10px;
    border: 4px solid ${({ theme }) => theme.colors.trans_back};
  }
  .btn__read-more {
    border: 1px solid ${({ theme }) => theme.colors.color_two};
    margin: 1rem auto 2rem auto;
    padding: .25rem 1.25rem;
    width: 52vw;
    text-transform: uppercase; 
    text-align: center;
    color: ${({ theme }) => theme.colors.color_one};
    background-color: ${({ theme }) => theme.colors.spinner};
    cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.color_two};
    background-color: rgba(255,255,255,.015);
  }
  &:focus {
    text-decoration: underline !important;
  }
  ${SuperQuery().minWidth.md.css`
    float: right;
    padding: .15rem 1.15rem;
    margin: 1px;
    width: 12rem;
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
      margin-left:-.5rem;
      margin-right:0px;
      margin-top:0px;
    }
  }
  .accordion__button:focus {
    text-decoration: underline;
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
    margin: .75rem .5rem 0 -1.5rem;

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
    z-index: 1500;
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
  
`
export default GlobalStyle
