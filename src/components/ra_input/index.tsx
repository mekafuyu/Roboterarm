import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function RAInput({
  id,
  disabled = false,
  label = "Pos. X",
  placeholder,
  size = 12,
}: {
  id?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  size?: number | object;
}) {
  return (
    <Grid container direction={"row"} size={size} justifyContent={"space-between"} padding={1}>
      <Grid size={{xs: 12, sm: 5}}>
        <Box
          sx={{
            width: "auto",
            height: "1.4375em",
            borderRadius: 1,
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            padding: "8.5px 14px",
            fontFamily: "Roboto",
          }}
          marginRight={{xs: 0, sm: '10px'}}
        >
          {label}
        </Box>
      </Grid>
      <Grid size={{xs: 12, sm: 7}}>
        <TextField
          disabled={disabled}
          id={id}
          size="small"
          placeholder={placeholder}
          sx={{
            width: "100%",
            input: {
              backgroundColor:"white",
              borderRadius: 1
            }
          }}
        />
      </Grid>
    </Grid>
  );
}
