import { Divider } from "@mui/material";
import { themeConstants } from "app/mui";
import { Container } from "components/lib";
import { CategoryList } from "components/sections";
import { Outlet } from "react-router-dom";

export default function BlogsPage() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <Divider sx={{ marginY: 15, border: themeConstants.borders.small }} />
      <Container>
        <CategoryList />
      </Container>
    </>
  );
}
