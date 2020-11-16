import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { teal, lightBlue } from '@material-ui/core/colors'

import colors from './assets'


const theme = createMuiTheme({
  palette: {
    background: {
      default: colors.background,
    },
    primary: lightBlue,
    secondary: teal,
    text: {
      primary: colors.white,
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Roboto', '"Open Sans"', 'StarJedi'].join(','),
    body1: {
      fontFamily: 'Roboto',
    },
    tiny: {
      fontFamily: 'Roboto',
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: "0.27em",
    }
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [],
      },
    },
    MuiLink: {
      root: {
        color: colors.link,
      },
    },
  },
})

const responsiveTheme = responsiveFontSizes(theme)

export default responsiveTheme
