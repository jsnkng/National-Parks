

const themes = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: .5, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 36, // rem
      md: 46, // rem
      lg: 64 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 36, // em
      md: 48, // em
      lg: 64 // em
    }
  },
  nightTheme: {
    background: '#1e1d1e',
    box_background: '#111111',
    offbackground: '#222222',
    text: '#ffffff',
    color_one: '#0DA7CC',
    color_two: '#5CDFFF',
    color_three: '#256F8A',
    color_four: 'rgba(8,104,127,0.25)',
    color_five: '#308EB0',
    trans_back: 'rgba(0,0,0,0.8)',
    spinner: 'rgba(0,0,0,0.2)',
    gradient_one: 'radial-gradient(ellipse at center, rgba(59, 59, 59, 1.0), rgba(16, 16, 16, 1.0))'
 
  },
  dayTheme: {
    background: '#ededed',
    box_background: '#ffffff',
    offbackground: '#d2d1c7',
    text: '#32120d',
    color_one: '#5c2217',
    color_two: '#ba471e',
    color_three: '#ec8217',
    color_four: '#b1b0a7',
    color_five: '#FCF8F1',
    trans_back: 'rgba(245,245,245,0.8)',
    spinner: 'rgba(255,255,255,.2)',
    gradient_one: 'radial-gradient(ellipse at center, rgba(252, 251, 231, 1.0), rgba(224, 219, 213, 1.0))'
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

export default themes
