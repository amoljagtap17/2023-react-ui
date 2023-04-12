import { Box, Typography } from "@mui/material";
import { themeConstants } from "app/mui";

interface iBadgeProps {
  label: string;
}

export function Badge({ label }: iBadgeProps) {
  return (
    <Box
      bgcolor="#e09cf7"
      padding="16px 20px"
      minWidth="180px"
      maxWidth="180px"
      borderRadius="40px"
      border={themeConstants.borders.large}
    >
      <Typography
        variant="h6"
        component="div"
        fontWeight={700}
        textTransform="capitalize"
      >
        {label}
      </Typography>
    </Box>
  );
}
