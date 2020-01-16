const themes = {
  flexboxgrid: {
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 1.375, // rem
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
  darkMode: {
    background: '#1e1d1e',
    box_background: '#111111',
    offbackground: '#303030',
    text: '#ffffff',
    color_one: '#00acd0',
    color_two: '#256f8a',
    color_three: '#5cdfff',
    color_four: '#4e4f58',
    color_five: '#c0f0ff',
    trans_back: 'rgba(0,0,0,0.7)',
    spinner: 'rgba(0,0,0,0.2)',
    color_filter: 'invert(54%) sepia(28%) saturate(812%) hue-rotate(145deg) brightness(97%) contrast(92%)',
    gradient_one: 'radial-gradient(ellipse at center, rgba(59, 59, 59, 1.0), rgba(16, 16, 16, 1.0))'
  },
  lightMode: {
    background: '#ededed',
    box_background: '#ffffff',
    offbackground: '#d2d1c7',
    text: '#111111',
    color_one: '#722c12',
    color_two: '#ba471e',
    color_three: '#ec8217',
    color_four: '#b1b0a7',
    color_five: '#33160b',
    trans_back: 'rgba(255,255,255,0.6)',
    spinner: 'rgba(255,255,255,.2)',
    color_filter: 'invert(18%) sepia(89%) saturate(1065%) hue-rotate(348deg) brightness(91%) contrast(94%)',
    gradient_one: 'radial-gradient(ellipse at center, rgba(252, 251, 231, 1.0), rgba(224, 219, 213, 1.0))'
  }
}

export default themes
