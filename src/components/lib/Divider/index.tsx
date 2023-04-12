import { Divider as MUIDivider } from "@mui/material";
import { themeConstants } from "app/mui";

export function Divider() {
  return (
    <MUIDivider sx={{ marginY: 5, border: themeConstants.borders.small }} />
  );
}
