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
      xs: 0,
      sm: 36, // em 576 @16px font
      md: 48, // em 768 @16px font
      lg: 62 // em 992 @16px font
    }
  },
  darkMode: {
    background: '#1e1d1e',
    box_background: '#111111',
    offbackground: '#303030',
    text: '#cfcfcf',
    color_one: '#3092B5',
    color_two: '#00BFE6',
    color_three: '#5cdfff',
    // color_four: '#4e4f58',
    color_five: '  #c0f0ff',
    trans_back: 'rgba(0,0,0,0.8)',
    home_text: '#cfcfcf',
    dim_text: '#999999',
    home_text_shadow: 'rgba(0,0,0,0.45)',
    image_overlay_light: 'linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.10) 100%)',
    image_overlay_opaque: 'rgba(0,0,0,0.55)',
    image_overlay_gradient: 'linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0) 100%)',
    image_overlay_darkgradient: 'linear-gradient(180deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 100%)',
    toggle_track: '#333333',
    spinner: 'rgba(0,0,0,0.9)',
    color_filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
  },
  lightMode: {
    background: '#ededed',
    box_background: '#ffffff',
    offbackground: '#d2d1c7',
    text: '#222222',
    color_one: '#722c12',
    color_two: '#ba471e',
    color_three: '#ec8217',
    // color_four: '#b1b0a7',
    color_five: '#D4CAB8',
    trans_back: 'rgba(255,255,255,0.8)',
    home_text: '#cfcfcf',
    dim_text: '#444444',
    home_text_shadow: '#111111',
    image_overlay_light: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
    image_overlay_opaque: 'rgba(0,0,0,0.40)',
    image_overlay_gradient: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 100%)',
    image_overlay_darkgradient: 'linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.20) 100%)',
    toggle_track: '#999999',
    spinner: 'rgba(255,255,255,.4)',
    color_filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
  }
}

export default themes
