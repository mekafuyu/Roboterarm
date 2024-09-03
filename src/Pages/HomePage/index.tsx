import styles from "./styles.module.scss"

import Grid from "@mui/material/Grid2";
import ButtonLarge from "../../components/buttonLarge/index.tsx";
import Navbar from "../../components/navbar/index.tsx";
import Stack from "@mui/material/Stack";
import SaveList from "../../components/saveList/index.tsx";
import Container from "@mui/material/Container";
import { ThemeProvider } from '@mui/material/styles';
import ligth from "../../components/themes/index.tsx";

import background from "../../assets/Home/background.svg"

export default function HomePage() {
    return (
            <ThemeProvider theme={ligth}>
            <Navbar />
            <Container maxWidth="xl">
                <Grid container>
                    <Grid size={6}>
                        <Stack
                            spacing={{ sm: 8 }}
                            direction="row"
                            useFlexGap
                            sx={{
                                flexWrap: 'wrap',
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10%",
                            }}
                        >
                            <ButtonLarge />
                            <ButtonLarge />
                            <ButtonLarge />
                            <ButtonLarge />
                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ marginTop: "10%"}}
                        >
                            <SaveList />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <img src={background} className={styles.background} alt="background"/>
            </ThemeProvider>
    );
}