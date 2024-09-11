import styles from "./styles.module.scss";
import bg2 from "/bg2.svg";

import { useContext, useState } from "react";
import { get, getDatabase, ref, set } from "firebase/database";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

import RAInput from "../../components/ra_input";
import FirebaseContext from "../../context/firebaseContext";

export default function SensorPage() {
  const fb = useContext(FirebaseContext); 
  const db = getDatabase(fb);

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [posZ, setPosZ] = useState(0);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [rotZ, setRotZ] = useState(0);
  const [muscle, setMuscle] = useState(0);

  function writeUserData() {
    // console.log("Set value to " + value)
    // setPosX(value)
    set(ref(db, 'values/'), {
      posX: 1,
      posY: 2,
      posZ: 3,
      rotX: 4,
      rotY: 5,
      rotZ: 6,
      muscle: 7
    });
  }

  async function readUserData() {
    const res = (await get(ref(db, 'values/'))).val();
    setPosX(res.posX);
    setPosY(res.posY);
    setPosZ(res.posZ);
    setRotX(res.rotX);
    setRotY(res.rotY);
    setRotZ(res.rotZ);
    setMuscle(res.muscle);
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
            <RAInput value={posX} disabled label={"Pos. X"} size={{ xs: 12, md: 4 }} />
            <RAInput value={posY} disabled label={"Pos. Y"} size={{ xs: 12, md: 4 }} />
            <RAInput value={posZ} disabled label={"Pos. Z"} size={{ xs: 12, md: 4 }} />
          </Grid>
          <Grid
            container
            justifyContent={"space-between"}
            size={{ xs: 6, md: 12 }}
          >
            <RAInput value={rotX} disabled label={"Rot. X"} size={{ xs: 12, md: 4 }} />
            <RAInput value={rotY} disabled label={"Rot. Y"} size={{ xs: 12, md: 4 }} />
            <RAInput value={rotZ} disabled label={"Rot. Z"} size={{ xs: 12, md: 4 }} />
          </Grid>
          <Grid
            container
            justifyContent={"space-between"}
            size={{ xs: 6, md: 12 }}
          >
            <RAInput value={muscle} disabled label={"Muscle"} size={{ xs: 12, md: 4 }} />
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
          <button onClick={() => writeUserData()}>UPPP</button>
          <button onClick={() => readUserData()}>DOWN</button>
        </Grid>
      </Grid>
      <img src={bg2} className={styles.bgbars} alt="bg2" />
    </Container>
  );
}
