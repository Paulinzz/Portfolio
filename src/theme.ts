import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#0a1fdf',
    },
  },

    typography: {
        fontFamily: 'Didot, serif',
    }
});

theme = responsiveFontSizes(theme)

export default theme;