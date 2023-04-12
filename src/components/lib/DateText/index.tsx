import { Typography } from "@mui/material";

interface iDateTextProps {
  date: string;
}

export function DateText({ date }: iDateTextProps) {
  return (
    <Typography
      variant="body2"
      fontSize="1rem"
      lineHeight="1.75"
      component="div"
      fontWeight={700}
    >
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </Typography>
  );
}
