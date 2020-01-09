const themes = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 36, // rem
      md: 48, // rem
      lg: 62 // rem
    },
    breakpoints: {
      xs: 0, // em 576 @16px font
      sm: 36, // em 768 @16px font
      md: 48, // em 992 @16px font
      lg: 62 // em 1200 @16px font
    }
  },
  nightTheme: {
    background: '#1e1d1e',
    box_background: '#111111',
    offbackground: '#222222',
    text: '#ffffff',
    color_one: '#a3dde8',
    color_two: '#45b8e1',
    color_three: '#137de8',
    color_four: '#4e4f58',
    color_five: '#cdedf2',
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
    color_five: '#fcf8f1',
    trans_back: 'rgba(245,245,245,0.8)',
    spinner: 'rgba(255,255,255,.2)',
    gradient_one: 'radial-gradient(ellipse at center, rgba(252, 251, 231, 1.0), rgba(224, 219, 213, 1.0))'
  }
}

export default themes
