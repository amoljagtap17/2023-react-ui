import { Typography } from "@mui/material";
import { useUpBreakpoint } from "app/hooks";
import { ReactNode } from "react";

interface iFooterTextProps {
  mdUpTextAlign: "left" | "right";
  children: ReactNode;
}

export function FooterText({ mdUpTextAlign, children }: iFooterTextProps) {
  const isMdUp = useUpBreakpoint();

  return (
    <Typography
      fontWeight={600}
      textAlign={isMdUp ? mdUpTextAlign : "center"}
      gutterBottom={true}
    >
      {children}
    </Typography>
  );
}
