import { Typography } from "@mui/material";

interface iHeadingProps {
  text: string;
  center?: boolean;
}

export function Heading({ text, center }: iHeadingProps) {
  return (
    <Typography
      variant="h2"
      component="h1"
      textTransform="uppercase"
      fontWeight={500}
      position="relative"
      lineHeight={1.2}
      paddingBottom={3}
      textAlign={center ? "center" : "left"}
      sx={{
        ":after": {
          content: '""',
          position: "absolute",
          height: "6px",
          width: "150px",
          bottom: 0,
          left: center ? "50%" : "5px",
          marginLeft: center ? "-75px" : "0px",
          backgroundColor: "primary.main",
        },
      }}
    >
      {text}
    </Typography>
  );
}
