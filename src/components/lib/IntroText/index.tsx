import { Typography } from "@mui/material";
import { useUpBreakpoint } from "app/hooks";

interface iIntroTextProps {
  text: string;
}

export function IntroText({ text }: iIntroTextProps) {
  const isMdUp = useUpBreakpoint();

  return (
    <Typography
      variant="h2"
      gutterBottom={true}
      textTransform="uppercase"
      fontWeight={900}
      letterSpacing="0.05em"
      color="#39564F"
      lineHeight={1.2}
      sx={{
        fontSize: isMdUp ? "7rem !important" : "5rem !important",
        textShadow:
          "2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 8px 8px 0px rgba(0, 0, 0, 0.2)",
      }}
    >
      {text}
    </Typography>
  );
}
