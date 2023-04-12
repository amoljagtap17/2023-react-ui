import { AppBar, Box, Container, Grid, Toolbar } from "@mui/material";
import { FooterNav } from "../FooterNav";
import { FooterText } from "../FooterText";

export function Footer() {
  return (
    <Box marginTop={20}>
      <FooterNav />
      <AppBar
        component="footer"
        position="static"
        sx={{ bottom: 0, paddingY: "40px" }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={12} md={6}>
                <FooterText mdUpTextAlign="left">
                  Copyright &copy; Your Name | {new Date().getFullYear()}
                </FooterText>
              </Grid>
              <Grid item xs={12} md={6}>
                <FooterText mdUpTextAlign="right">
                  Developed with React.js
                </FooterText>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
