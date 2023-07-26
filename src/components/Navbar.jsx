import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LiveSearch from "./LiveSearch";
import { useRegistrContext } from "../contexts/RegistrContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pages = [
  { title: "Home", path: "/" },
  { title: "Catalog", path: "/catalog" },
];

const adminPages = [{ title: "ADD", path: "/add" }];

export default function Navbar() {
  const { user, logout, isAdmin } = useRegistrContext();

  const navigate = useNavigate();

  function getPages() {
    if (isAdmin()) {
      return pages.concat(adminPages);
    } else {
      return pages;
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#FF0592" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {getPages().map((page) => (
              <Button

                onClick={() => navigate(page.path)}
                // component={Link}
                // to={item.path}
                key={page.title}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Typography variant="h3" component="div" sx={{ flexGrow: 3 }}>
            Barbie Shop
          </Typography>


          <LiveSearch />
          
          {!user ? (
            <Button component={Link} to="/auth" sx={{ color: "#F0F0F0" }}>
              Login
            </Button>
          ) : (
            <Button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
