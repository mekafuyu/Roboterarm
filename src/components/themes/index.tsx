import { createTheme } from '@mui/material/styles';

const ligth = createTheme({
  palette: {
    primary: {
      light: '#151D60',
      main: '#151D60',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#EFEFEF',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default ligth;