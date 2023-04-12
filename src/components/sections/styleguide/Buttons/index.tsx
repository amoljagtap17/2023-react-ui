import { Button, Grid, Typography } from "@mui/material";

export function Buttons() {
  return (
    <>
      <Typography variant="h4" component="div" gutterBottom={true}>
        Buttons
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} padding={2}>
          <Button variant="contained">Primary</Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} padding={2}>
          <Button variant="outlined">Secondary</Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} padding={2}>
          <Button variant="text">Text</Button>
        </Grid>
      </Grid>
    </>
  );
}
