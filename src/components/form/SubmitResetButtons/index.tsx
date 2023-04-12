import { Button, Stack, Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export function SubmitResetButtons() {
  const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <Stack direction={isMdUp ? "row-reverse" : "column"} spacing={2}>
      <Button variant="contained" type="submit">
        Submit
      </Button>
      <Button variant="outlined" type="reset">
        Reset
      </Button>
    </Stack>
  );
}
