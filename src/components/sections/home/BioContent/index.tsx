import { Stack, Typography } from "@mui/material";
import { Heading } from "components/lib";

export function BioContent() {
  return (
    <Stack spacing={2}>
      <Heading text="Biography" center={true} />
      <Typography variant="h4" component="h1" fontWeight={500}>
        Hello, I&apos;m Me 👋
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet
        consequuntur autem ea sint dolorem eos. Natus nobis cumque nemo?
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, cumque!
      </Typography>
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit
        aliquid a fugiat nesciunt excepturi quos tenetur, ipsa laboriosam
        assumenda, maiores quod. Consequuntur, mollitia facilis?
      </Typography>
      <Typography variant="body1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt
        ducimus animi quaerat maxime libero?
      </Typography>
      <Typography variant="h6" component="h2" fontWeight={600}>
        Cheers!
      </Typography>
    </Stack>
  );
}
