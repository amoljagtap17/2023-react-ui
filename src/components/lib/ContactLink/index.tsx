import { Button, Link, Typography } from "@mui/material";
import { useUpBreakpoint } from "app/hooks";
import { themeConstants } from "app/mui";
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

interface iContactLinkProps {
  href: string;
  startIcon: ReactNode;
  label: string;
}

export function ContactLink({ href, startIcon, label }: iContactLinkProps) {
  const isMdUp = useUpBreakpoint();

  return (
    <Link component={RouterLink} to={href} target="_blank">
      <Button
        variant="text"
        startIcon={startIcon}
        sx={{
          display: "flex",
          marginRight: "1rem",
          "& .MuiButton-startIcon": {
            padding: "0.5rem",
            border: themeConstants.borders.large,
            borderRadius: "100%",
            "& svg.MuiSvgIcon-root": { fontSize: "1.5rem" },
          },
          "& .MuiTypography-root": {
            fontSize: isMdUp ? "1.5rem" : "1rem",
          },
        }}
      >
        <Typography minWidth="90px">{label}</Typography>
      </Button>
    </Link>
  );
}
