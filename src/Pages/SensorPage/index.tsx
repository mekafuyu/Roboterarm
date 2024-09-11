import styles from "./styles.module.scss";
import bg2 from "/bg2.svg";
// import arm from "/Robotic arm.png";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RAInput from "../../components/ra_input";
import { useContext } from "react";
import FirebaseContext from "../../context/firebaseContext";
import { getDatabase, ref, set } from "firebase/database";

export default function SensorPage() {
  const fb = useContext(FirebaseContext); 
  const db = getDatabase(fb);

  function writeUserData(value: number) {
    set(ref(db, 'values/'), {
      value: value
    });
  }

  return (
    <Container>
      <Grid container justifyContent={"center"}>
        <Grid container size={8}>
          
        </Grid>
        <Grid container size={8}>
          <Grid
            container
            justifyContent={"space-between"}
            size={{ xs: 6, md: 12 }}
          >
            <RAInput disabled label={"Pos. X"} size={{ xs: 12, md: 4 }} />
            <RAInput disabled label={"Pos. Y"} size={{ xs: 12, md: 4 }} />
            <RAInput disabled label={"Pos. Z"} size={{ xs: 12, md: 4 }} />
          </Grid>
          <Grid
            container
            justifyContent={"space-between"}
            size={{ xs: 6, md: 12 }}
          >
            <RAInput disabled label={"Rot. X"} size={{ xs: 12, md: 4 }} />
            <RAInput disabled label={"Rot. Y"} size={{ xs: 12, md: 4 }} />
            <RAInput disabled label={"Rot. Z"} size={{ xs: 12, md: 4 }} />
          </Grid>
          <Grid
            container
            justifyContent={"space-between"}
            size={{ xs: 6, md: 12 }}
          >
            <RAInput disabled label={"Muscle"} size={{ xs: 12, md: 4 }} />
          </Grid>
          <Grid size={12} padding={1}>
            <Paper
              elevation={4}
              sx={{
                height: "400px",
                width: "100%",
              }}
            ></Paper>
          </Grid>
          <button onClick={() => writeUserData(1)}>UPPPP</button>
        </Grid>
      </Grid>
      <img src={bg2} className={styles.bgbars} alt="bg2" />
    </Container>
  );
}
