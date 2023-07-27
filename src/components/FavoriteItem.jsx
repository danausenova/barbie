import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useCartContext } from "../contexts/CartContext";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useFavoriteContext } from "../contexts/FavoriteContext";

export default function FavoriteItem({ item }) {
  const { addToyToCart, deleteToyFromCart, isAlreadyInCart } = useCartContext();
  const { deleteToyFromFav } = useFavoriteContext();
  const [hovered, setHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);

  const navigate = useNavigate();

  const ClickNavigate = () => {
    navigate(`/details/${item.id}`);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(false);
    deleteToyFromFav(item.id);
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
          boxShadow: "10px 10px 30px #ED50F1, -10px -10px 60px #FDB9FC",
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
        {isAlreadyInCart(item.id) ? (
          <IconButton
            onClick={() => deleteToyFromCart(item.id)}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "45px",
            }}
          >
            <ClearIcon color="secondary" />
          </IconButton>
        ) : (
          <ShoppingBagOutlinedIcon
            aria-label="add to cart"
            onClick={() => addToyToCart(item)}
            style={{
              position: "absolute",
              bottom: "28px",
              left: "50px",
            }}
          >
            <ShareIcon color="secondary" />
          </ShoppingBagOutlinedIcon>
        )}
      </CardActions>
    </Card>
  );
}
