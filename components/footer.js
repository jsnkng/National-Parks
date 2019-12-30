import Link from 'next/link'
import styled from 'styled-components'
import SuperQuery from '@themgoncalves/super-query'
import Toggle from 'react-toggle'

const Component = ({ setTheme }) => {
  return (
    <Footer>
      <div className="themeswitcher">
      <Toggle
        defaultChecked={true}
        icons={false}
        aria-label='Set Day|Night Mode'
        onChange={setTheme} />
{/* 
        <button onClick={() => setTheme())}>Light</button>  
        <button onClick={() => setTheme('nightTheme')}>Dark</button> */}
        {/* <button onClick={() => setTheme('rainbowTheme')}>Rainbow</button> */}
      </div>
      <Link href="/" passHref>
        <div>
          <img className="logo" src="/us-nps.png" width="90" alt="National Parks Guide" />
          <div className="title">National Park Service</div>
          <div className="subtitle">A State-by-State Guide</div>
        </div>
      </Link>
      <div className="copyright"><a href="https://jsnkng.com">jsnkng</a> | 2019</div>
    </Footer>
  )
}

export default Component

const Footer = styled.footer`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.colors.trans_back};
  color: ${props => props.theme.colors.text};
  z-index: 120;
  
  ${SuperQuery().minWidth.sm.css`
    grid-template-columns: 4fr 4fr;
  `}

  a {
    color: ${props => props.theme.colors.text};
    text-decoration:none;
    font-size: 1.5em;
    font-weight: 700;
    &:hover {
      color: ${props => props.theme.colors.color_two};
      text-decoration: underline;
    }
  }
  button {
    color: ${props => props.theme.colors.color_two};
    background-color: ${props => props.theme.colors.background};
    text-decoration:none;
    font-size: 1em;
    font-weight: 700;
    padding: .25em .375em;
    margin: .25em .5em 0 0;
    border: 1px solid ${props => props.theme.colors.offbackground};
    outline: none;
    &:hover {
      color:  ${props => props.theme.colors.color_three};
      background-color: ${props => props.theme.colors.background};
      border: 1px solid ${props => props.theme.colors.color_three};
    }
  }




  .react-toggle {
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}

.react-toggle-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.react-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.react-toggle-track {
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #4D4D4D;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: #000000;
}

.react-toggle--checked .react-toggle-track {
  background-color: #b1b0a7;
}

.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: #b1b0a7;
}

.react-toggle-track-check {
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle--checked .react-toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle-track-x {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle--checked .react-toggle-track-x {
  opacity: 0;
}

.react-toggle-thumb {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border: 1px solid #4D4D4D;
  border-radius: 50%;
  background-color: #FAFAFA;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.react-toggle--checked .react-toggle-thumb {
  left: 27px;
  border-color: #b1b0a7;
}

.react-toggle--focus .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
  -moz-box-shadow: 0px 0px 3px 2px #0099E0;
  box-shadow: 0px 0px 2px 3px #0099E0;
}

.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
  -moz-box-shadow: 0px 0px 5px 5px #0099E0;
  box-shadow: 0px 0px 5px 5px #0099E0;
}






.themeswitcher {
  position: absolute;
  top: 1.125em;
  left: 1em;
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1;
  font-size: 1em;
  text-align: left;
}
  img.logo {
    top: 1em;
    right: 1em;
    width: 2.1875em;
    cursor: pointer;
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    letter-spacing: -1px;
    line-height: 1;
  }
  .copyright {
    top: 8.75em;
    font-size: .625em;
    text-align: center;
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: .875em;
    letter-spacing: -1px;
    line-height: 1;
    width: 100%;
    color: ${props => props.theme.colors.color_two};
    background: ${props => props.theme.colors.offbackground};
  }
  .title {
    top: 1em;
    right: 3.5em;
    font-size: 1em;
    font-weight: 700;
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    letter-spacing: -1px;
    line-height: 1;
  }
  .subtitle {
    top: 2.125em;
    right: 4em;
    font-size: .875em;
    font-weight: 500;
    position: absolute;
    cursor: pointer;
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    letter-spacing: -1px;
    line-height: 1;
  }
`
