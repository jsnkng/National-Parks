const themes = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 36, // rem
      md: 46, // rem
      lg: 64, // rem
      xl: 76
    },
    breakpoints: {
      xs: 0, // em
      sm: 36, // em
      md: 48, // em
      lg: 64, // em
      xl: 76
    }
  },
  colors: {
    nightTheme: {
      background: '#1e1d1e',
      box_background: '#111111',
      offbackground: '#474547',
      text: '#ffffff',
      color_one: '#3db7e3',
      color_two: '#a1dde9',
      color_three: '#90d223',
      color_four: '#e2e1d5',
      trans_back: 'rgba(0,0,0,0.8)',
      spinner: 'rgba(0,0,0,0.2)',
    },
    dayTheme: {
      background: '#ededed',
      box_background: '#ffffff',
      offbackground: '#d1d1d1',
      text: '#32120d',
      color_one: '#5c2217',
      color_two: '#ba471e',
      color_three: '#ec8217',
      color_four: '#b1b0a7',
      trans_back: 'rgba(245,245,245,0.8)',
      spinner: 'rgba(255,255,255,.2)',
    },
    rainbowTheme: {
      background: '#0049ab',
      box_background: '#3db7e3',
      offbackground: '#004eb6',
      text: '#ffffff',
      color_one: '#ffca13',
      color_two: '#a1dde9',
      color_three: '#4c93d9',
      color_four: '#90d223',
      trans_back: 'rgba(213,6,116,0.8)',
      spinner: 'rgba(255,255,255,0.2)',
    }
  }
}

export default themes
