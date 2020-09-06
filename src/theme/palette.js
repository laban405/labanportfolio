import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#4E9FC2',
    main: '#4E9FC2',
    light: '#4E9FC2'
  },
  secondary: {
    contrastText: white,
    dark: "#ED1D24",
    main: "#ED1D24",
    light: "#ED1D24"
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
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: '#1034a6'
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: "#ED1D24",
  divider: colors.grey[200]
};
