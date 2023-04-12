import { ArrowCircleRightRounded as ArrowCircleRightRoundedIcon } from "@mui/icons-material";
import { Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface iReadMoreLinkProps {
  href: string;
}

export function ReadMoreLink({ href }: iReadMoreLinkProps) {
  return (
    <Link component={RouterLink} to={href}>
      <Button
        variant="text"
        endIcon={<ArrowCircleRightRoundedIcon />}
        sx={{ display: "flex" }}
      >
        Read more
      </Button>
    </Link>
  );
}
