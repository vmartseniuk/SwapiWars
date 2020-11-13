import blueGrey from '@material-ui/core/colors/blueGrey';
import { hexToRgb } from './util';

const white = '#FFFFFF'
const black = '#303133'

const textColor = '#FFFFFF'
const background = '#020202'

const colors = {

  /* Default Color */
  white,
  whiteRGB: hexToRgb(white),
  black,
  blackRGB: hexToRgb(black),
  textColor,
  link: '#126DE8',
  background,
  gray: '#8D8D8F',
  lightGray: '#DADADA',
  ultraLightGray: '#F7F7F7',
  success: '#00AD07',
  error: '#FD504F',
  warning: '#F0D800',

  /* component colors */
  spinnerColor: blueGrey[700],
  cardLabelBg: '#202020'
}

const appBarHeight = 50;
const spinnerMobileSize = 200;
const spinnerDesktopSize = 350;

const drawerWidth = 232

const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
}

const container = {
  marginRight: 'auto',
  marginLeft: 'auto',
}

const withoutHover = {
  '&:hover': {
    backgroundColor: 'inherit',
    background: 'inherit',
  },
}


export default colors

export {
  hexToRgb,
  appBarHeight,
  spinnerMobileSize,
  spinnerDesktopSize,
  drawerWidth, transition, container, withoutHover
}
