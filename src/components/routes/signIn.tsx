import { Grid } from "@mui/material";
import { Container } from "components/lib";
import { SignInForm } from "components/sections";

export default function SignInPage() {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        minHeight="65vh"
      >
        <Grid item xs={12} md={8} lg={6}>
          <SignInForm />
        </Grid>
      </Grid>
    </Container>
  );
}
