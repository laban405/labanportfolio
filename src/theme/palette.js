import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const newblack="#1E1B18"
export default {
  black,
  white,
  newblack,
  primary: {
    contrastText: white,
    dark: '#1a1b41',
    main: '#1a1b41',
    light: '#1a1b41'
  },
  secondary: {
    contrastText: white,
    dark: "#fb5012",
    main: "#fb5012",
    light: "#fb5012"
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: "#2e2e2e",
    secondary: "#2e2e2e",
    link: '#fb5012'
  },
  background: {
    default: '#ffffff',
    paper: white
  },
  icon: "#fb5012",
  divider: colors.grey[200]
};
