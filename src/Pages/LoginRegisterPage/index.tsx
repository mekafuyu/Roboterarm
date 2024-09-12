import styles from "./styles.module.scss"

import { ThemeProvider } from '@mui/material/styles';
import ligth from "../../components/themes/index.tsx";
import Navbar from "../../components/navbar/index.tsx";

import background from "../../assets/Login/background.svg"
import CardLogin from "../../components/cardLogin/index.tsx";
import Grid from "@mui/material/Grid2";

export default function LoginRegisterPage() {
    return (
        <ThemeProvider theme={ligth}>
        <Navbar/>
        <Grid container sx={{margin: "12%"}}>
            <Grid offset={4} size={4} sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <CardLogin/>
            </Grid>
        </Grid>
        <img src={background} className={styles.background} alt="background"/>
        </ThemeProvider>
    );
}