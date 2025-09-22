import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#4169E1',
    },
  },

    typography: {
        fontFamily: 'Didot, serif',
    }
});

theme = responsiveFontSizes(theme)

export default theme;