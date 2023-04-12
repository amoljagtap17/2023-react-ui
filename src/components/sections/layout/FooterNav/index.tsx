import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useUpBreakpoint } from "app/hooks";
import { ContactLink, Container } from "components/lib";
import { navItems, utilityPages } from "components/sections";
import { FooterNavList } from "../FooterNavList";

export function FooterNav() {
  const isMdUp = useUpBreakpoint();

  return (
    <Box borderTop="4px solid black">
      <Container sx={{ padding: "0 !important" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            padding={4}
            borderRight={isMdUp ? "4px solid black" : ""}
          >
            <Typography
              variant="h5"
              component="div"
              textAlign={isMdUp ? "left" : "center"}
              gutterBottom={true}
            >
              Get in touch with me today
            </Typography>
            <Box
              display="flex"
              alignItems={isMdUp ? "left" : "center"}
              justifyContent="space-between"
              flexDirection="column"
              minHeight="130px"
            >
              <ContactLink
                href="https://www.linkedin.com"
                label="Linkedin"
                startIcon={<LinkedInIcon />}
              />
              <ContactLink
                href="https://www.github.com"
                label="Github"
                startIcon={<GitHubIcon />}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            padding={4}
            borderTop={isMdUp ? "" : "4px solid black"}
          >
            <Grid container>
              <Grid item xs={12} md={6} marginBottom={4}>
                <FooterNavList
                  listTitle="Site pages"
                  listNavItems={navItems.filter(
                    (navItem) => navItem.path !== "/admin"
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6} marginBottom={4}>
                <FooterNavList
                  listTitle="Utility pages"
                  listNavItems={utilityPages}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
