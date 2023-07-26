import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Button, Menu, MenuItem } from "@mui/material";
import { useToyContext } from "../contexts/ToyContext";
import { useNavigate, useParams } from "react-router-dom";

export default function ToyItem({ item }) {
  const { deleteToy } = useToyContext();
  const [hovered, setHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const ClickNavigate = () => {
    navigate(`/details/${item.id}`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  const handleCartClick = () => {
    setIsInCart(!isInCart);
  };
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 345,
        "&:hover": {
          boxShadow: "10px 10px 30px #f48fb1, -10px -10px 60px #f06292",
          transform: "scale(1.01)",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        component="img"
        height="350"
        image={hovered ? item.image2 : item.image1}
        alt={item.title}
        onClick={ClickNavigate}
      />
      <CardContent>
        <IconButton
          aria-label="settings"
          onClick={handleClick}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: "#e91e63",
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            component={Button}
            sx={{ textTransform: "capitalize", color: "red" }}
            onClick={() => deleteToy(item.id)}
          >
            Delete
          </MenuItem>
          <MenuItem
            onClick={() => navigate(`/edit/${item.id}`)}
            component={Button}
            sx={{ textTransform: "capitalize", width: "100%" }}
          >
            Edit
          </MenuItem>
        </Menu>
        <Typography
          variant="h6"
          component="div"
          color="black"
          sx={{ textAlign: "center" }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
          sx={{
            position: "absolute",
            bottom: "20px",
            left: "10px",
            color: isFavorite ? "#ff4081" : "inherit",
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <ShoppingBagOutlinedIcon
          aria-label="add to cart"
          onClick={handleCartClick}
          style={{
            position: "absolute",
            bottom: "28px",
            left: "50px",
            color: isInCart ? "#aa00ff" : "inherit",
          }}
        >
          <ShareIcon />
        </ShoppingBagOutlinedIcon>
      </CardActions>
    </Card>
  );
}
