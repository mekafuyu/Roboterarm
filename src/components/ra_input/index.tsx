import { Box, Button, Chip, FormGroup, Stack, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import styles from "./styles.module.scss";

export default function RAInput({
  id,
  label = "Pos. X",
  placeholder,
  size = 12
}: {
  id?: string;
  label?: string;
  placeholder?: string;
  size?: number;
}) {
    

  return (
    <Grid container direction={"row"} size={size} >
        <Grid size={2}>
            {label}
        </Grid>
        {/* <Box width={10}></Box> */}
        <TextField
        size="small"
        placeholder={placeholder}
        />
    </Grid>
  );
}
