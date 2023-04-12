import { Box } from "@mui/material";
import { Footer, Navbar } from "components/sections";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
