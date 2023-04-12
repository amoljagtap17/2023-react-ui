import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  useUserContextState,
  useUserContextUpdater,
} from "components/sections/auth/AuthProvider/useAuth";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";
import { useSignOutMutation } from "./useSignOutMutation";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "Blogs", path: "/blogs" },
];

const protectedNavItems = [{ label: "Admin", path: "/admin" }];

export const utilityPages = [
  { label: "Style guide", path: "/styleguide" },
  { label: "404 Not found", path: "/404" },
  { label: "Password Protected", path: "/login" },
];

export function Navbar() {
  const navigate = useNavigate();
  const { user } = useUserContextState();
  const { signout } = useUserContextUpdater();
  const signOutMutation = useSignOutMutation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onLogoutButtonClick = async () => {
    await signOutMutation.mutateAsync();

    enqueueSnackbar({
      message: "You are successfully logged out.",
      variant: "success",
    });

    signout(() => navigate("/", { replace: true }));
  };

  let _navItems;

  if (user) {
    _navItems = navItems.concat(protectedNavItems);
  } else {
    _navItems = navItems;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              XYZ
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {_navItems.map((item) => {
                return (
                  <Link
                    key={item.label}
                    component={RouterNavLink}
                    to={item.path}
                  >
                    <Button sx={{ color: "#fff" }} variant="text">
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
              {user ? (
                <Button
                  sx={{
                    color: "#fff",
                    border: "2px solid #FFD19B",
                    "&.Mui-disabled": { color: "rgba(255, 255, 255, 0.6)" },
                  }}
                  size="large"
                  onClick={onLogoutButtonClick}
                  disabled={signOutMutation.isLoading}
                >
                  Logout
                </Button>
              ) : null}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileNavbar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        navItems={_navItems}
        disabled={signOutMutation.isLoading}
        onLogout={onLogoutButtonClick}
      />

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
