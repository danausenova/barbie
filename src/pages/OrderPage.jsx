import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  let num = Math.floor(Math.random() * 1000 + 1);

  useEffect(() => {
    function rnd(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function createHearts() {
      const hearts = document.querySelectorAll(".particletext.hearts");
      hearts.forEach((heart) => {
        const heartcount = (heart.offsetWidth / 50) * 5;
        for (let i = 0; i <= heartcount; i++) {
          const size = rnd(60, 120) / 10;
          const particle = document.createElement("span");
          particle.className = "particle";
          particle.style.top = `${rnd(20, 80)}%`;
          particle.style.left = `${rnd(0, 95)}%`;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.animationDelay = `${rnd(0, 30) / 10}s`;
          heart.appendChild(particle);
        }
      });
    }

    createHearts();
  }, []);
  return (
    <Container
      maxWidth="sm"
      sx={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <React.Fragment>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", mt: 10, color: "black" }}
        >
          Thank you for your order!
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "center", mt: 10, color: "black", mb: 5 }}
          className="particletext  hearts"
        >
          Your order number is #{num}. We have emailed your order confirmation,
          and will send you an update when your order has shipped.
        </Typography>

        <Button
          variant="outlined"
          onClick={() => navigate("/catalog")}
          sx={{
            margin: "0 auto",
            color: "rgba(204, 42, 93, 1)",
            borderColor: "rgba(204, 42, 93, 1)",
          }}
        >
          Back to shopping ♡
        </Button>
      </React.Fragment>
    </Container>
  );
};

export default OrderPage;
