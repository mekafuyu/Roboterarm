import styles from "./styles.module.scss"

import Grid from "@mui/material/Grid2";
import ButtonLarge from "../../components/buttonLarge/index.tsx";
import Navbar from "../../components/navbar/index.tsx";
import Stack from "@mui/material/Stack";

export default function HomePage() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Grid container>
                <Grid size={6} >
                    
                    <Stack
                    spacing={{sm: 8 }}
                    direction="row"
                    useFlexGap
                    sx={{ flexWrap: 'wrap',                
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10%" }}
                    >
                        <ButtonLarge/>
                        <ButtonLarge/>
                        <ButtonLarge/>
                        <ButtonLarge/>
                    </Stack>
                </Grid>
                <Grid size={6}>

                </Grid>
            </Grid>
        </div>
    );
}