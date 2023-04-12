import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export function BackLink() {
  return (
    <Link component={RouterLink} to=".." relative="path">
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        sx={{ display: "flex" }}
      >
        Back
      </Button>
    </Link>
  );
}
