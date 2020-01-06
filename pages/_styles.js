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
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all .25s ease-in-out;
    opacity: 1.0;
    -webkit-transition: background 1.5s linear;
    -moz-transition: background 1.5s linear;
    -o-transition: background 1.5s linear;
    -ms-transition: background 1.5s linear;
    transition: background 1.5s linear;
    ${SuperQuery().maxWidth.of('320px').css`
      font-size: 14px;
    `}

    ${SuperQuery().minWidth.sm.css`
      font-size: 20px;
      letter-spacing: -.5px;
    `}
  }



 /* Chrome, Safari, Opera */
 @-webkit-keyframes myfirst {
    from {opacity: 0.2;}
    to {opacity: 1;}
  }

  /* Standard syntax */
  @keyframes myfirst {
    from {opacity: 0.2;}
    to {opacity: 1;}
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
      line-height: .875;
    }
  }
  h2 {
    font-size: 2em;
    line-height: 1;
    margin: 0;
    padding: .425em .575em .425em 0;
    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
    ${SuperQuery().minWidth.md.css`
      padding: .25em .25em .25em 0;
    `}
  }
  h3 {
    font-size: 1.375em;
    line-height: 1.1;
    letter-spacing: -1px;
    margin: .5em 0 0 0;
  }

  h4 {
    font-size: 1.5em;
    line-height: 1.1;
    letter-spacing: -1.5px;
    margin: 0;
    padding: .5em 0 0 0;
    ${SuperQuery().minWidth.md.css`
    font-size: 1.5em;
    `}
    ${SuperQuery().minWidth.lg.css`
    font-size: 1.5em;
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
    color: ${({ theme }) => theme.colors.color_one};
    cursor: pointer !important;
    &:hover {
    text-decoration: none !important;
      color: ${({ theme }) => theme.colors.color_two};
    cursor: pointer !important;
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
    font-size: 1em;
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
    background-color: ${({ theme }) => theme.colors.box_background};
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
    padding: .25em 1.25em;
    margin: .5em 2em 2em 0;
    font-size: .875em;
    font-weight: 500;
    text-transform: uppercase; 
    color: ${({ theme }) => theme.colors.color_one};
    background-color: ${({ theme }) => theme.colors.spinner};
    cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.color_two};
    background-color: rgba(255,255,255,.015);
  }
  ${SuperQuery().minWidth.md.css`
    font-size: .625em;
    padding: .15em 1.15em;
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
    line-height: 1.2;
    font-weight: 600;
    text-indent: .5em;
    padding:  1em 0 1em .5em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
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
    color: ${({ theme }) => theme.colors.color_two};
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
    color: ${({ theme }) => theme.colors.color_two};
  }
  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);

  }

  .accordion__panel {
  animation: fadein 0.35s ease-in;
  padding: 0 0 1em 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.offbackground};
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
    height: 3px;
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
  
  /* Remove these to get rid of the spinner */
  ${'' /* #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: .875em;
    left: .625em;
  }
  
  #nprogress .spinner-icon {
    width: 2.5em;
    height: 2.5em;
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
  
  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 26px;
  top: 26px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}



`
export default GlobalStyle
