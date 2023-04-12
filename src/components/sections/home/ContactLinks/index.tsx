import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { ContactLink, Divider } from "components/lib";

export function ContactLinks() {
  return (
    <Stack>
      <Divider />
      <Box display="flex" alignItems="center" justifyContent="center">
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
      <Divider />
    </Stack>
  );
}
