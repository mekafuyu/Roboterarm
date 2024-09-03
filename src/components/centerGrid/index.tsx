import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

function CenteredGrid() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center" 
      style={{ height: '100vh' }}
    >
        <Box
          sx={{
            width: 300,
            height: 200,
            backgroundColor: 'lightblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Centered Content
        </Box>
    </Grid>
  );
}

export default CenteredGrid;
