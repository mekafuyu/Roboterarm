import styles from "./styles.module.scss"

import { ThemeProvider } from '@mui/material/styles';
import ligth from "../../components/themes/index.tsx";
import Navbar from "../../components/navbar/index.tsx";

import background from "../../assets/Login/background.svg"



export default function LoginRegisterPage() {
    return (
        <ThemeProvider theme={ligth}>
        <Navbar/>
    
        <img src={background} className={styles.background} alt="background"/>
        </ThemeProvider>
    );
}