import { Box } from "@mui/material";
import { Divider } from "components/lib";
import { Buttons } from "./Buttons";
import { Colors } from "./Colors";
import { Header } from "./Header";
import { Inputs } from "./Inputs";

export function StyleGuide() {
  return (
    <Box>
      <Header />
      <Divider />
      <Colors />
      <Divider />
      <Buttons />
      <Divider />
      <Inputs />
    </Box>
  );
}
