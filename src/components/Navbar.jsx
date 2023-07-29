import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Avatar,
  Drawer,
  ImageList,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LiveSearch from "./LiveSearch";
import { useRegistrContext } from "../contexts/RegistrContext";
import Logo from "../components/picture/logo2.svg";
import Filter from "./Filter";

const pages = [
  { title: "Home", path: "/" },
  { title: "Catalog", path: "/catalog" },
];

const adminPages = [{ title: "ADD", path: "/add" }];

export default function Navbar({ window }) {
  const { user, logout, isAdmin } = useRegistrContext();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function getPages() {
    if (isAdmin()) {
      return pages.concat(adminPages);
    } else {
      return pages;
    }
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#FF0592" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="nav">
            <ImageList component={Button} onClick={handleDrawerToggle}>
              <img width="50px" src={Logo} style={{ marginTop: "5px" }} />
            </ImageList>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "25%",
                  backgroundColor: "#FFBEE3",
                },
              }}
            >
              <List sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }}>
                {getPages().map((page) => (
                  <ListItem key={page.title}>
                    <ListItemButton
                      sx={{ textAlign: "center" }}
                      onClick={() => navigate(page.path)}
                    >
                      <ListItemText primary={page.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <List>
                <Filter />
              </List>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {getPages().map((page) => (
              <Button
                onClick={() => navigate(page.path)}
                key={page.title}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <LiveSearch />

          {!user ? (
            <Button component={Link} to="/auth" sx={{ color: "#F0F0F0" }}>
              Login
            </Button>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="12" src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    element={Button}
                    onClick={() => navigate("/favorite")}
                  >
                    Favorites
                  </Typography>
                </MenuItem>{" "}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    element={Button}
                    onClick={() => navigate("/cart")}
                  >
                    Cart
                  </Typography>
                </MenuItem>{" "}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    element={Button}
                    textAlign="center"
                    onClick={() => {
                      logout();
                    }}
                  >
                    LogOut
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
