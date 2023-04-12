import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useUserContextState } from "components/sections/auth/AuthProvider/useAuth";
import { NavLink as RouterNavLink, useNavigate } from "react-router-dom";

const drawerWidth = 240;

interface iMobileNavbarProps {
  handleDrawerToggle: () => void;
  navItems: {
    label: string;
    path: string;
  }[];
  mobileOpen: boolean;
  disabled: boolean;
  onLogout: VoidFunction;
}

export function MobileNavbar({
  handleDrawerToggle,
  navItems,
  mobileOpen,
  disabled,
  onLogout,
}: iMobileNavbarProps) {
  const navigate = useNavigate();
  const { user } = useUserContextState();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        XYZ
      </Typography>

      <Divider />

      <List sx={{ background: "#fff", border: 0 }}>
        {navItems.map((item) => {
          return (
            <Link key={item.label} component={RouterNavLink} to={item.path}>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
        {user ? (
          <ListItem disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", border: "2px solid #FFD19B" }}
              disabled={disabled}
              onClick={onLogout}
            >
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        ) : null}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
