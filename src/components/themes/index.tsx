import { createTheme } from '@mui/material/styles';
import styles from "./styles.module.scss";


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
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
            fontSize: "60px",
            fontFamily: 'Inter, sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: 600,
            fontStyle: 'normal',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4%",
        },
        h2: {
            fontSize: "32px",
            fontFamily: 'Inter, sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: 600,
            fontStyle: 'normal',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4%",
        },
    },
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});

export default ligth;