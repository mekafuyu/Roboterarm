import styles from "./styles.module.scss"

import Grid from "@mui/material/Grid2";
import ButtonLarge from "../../components/buttonLarge/index.tsx";
import Navbar from "../../components/navbar/index.tsx";
import Stack from "@mui/material/Stack";
import SaveList from "../../components/saveList/index.tsx";
import { ThemeProvider } from '@mui/material/styles';
import ligth from "../../components/themes/index.tsx";

import background from "../../assets/Home/background.svg"
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function HomePage() {
    return (
            <ThemeProvider theme={ligth}>
            <Navbar />
                <Grid container>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 6, xl:6 }}>
                        <Typography variant="h1">Roboterarm</Typography>
                        <Stack
                            spacing={{ sm: 8 }}
                            direction="row"
                            useFlexGap
                            sx={{
                                flexWrap: 'wrap',
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "4%",
                            }}
                        >
                            <ButtonLarge text="Criar Movimento"/>
                            <ButtonLarge text="Sensor"/>
                            <ButtonLarge text="Teste"/>
                            <ButtonLarge text="Teste"/>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12, sm: 12, md: 12, lg: 6, xl:6 }}>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ marginTop: "6%"}}
                        >
                            <Paper sx={{width: "500px"}}>
                                <Typography variant="h2">Movimentos Salvos</Typography>
                                <SaveList/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            {/* <img src={background} className={styles.background} alt="bg2" /> */}
            </ThemeProvider>
    );
}