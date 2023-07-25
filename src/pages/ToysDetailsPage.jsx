import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";

export default function WovenImageList() {
  const itemData = [
    "https://cdn.shopify.com/s/files/1/0568/1132/3597/products/wjj3rqve8xdedvcnx5qc.jpg?v=1685128292",
    "https://cdn.shopify.com/s/files/1/0568/1132/3597/products/be8h0phjcfc8gelubdgv.jpg?v=1685128292",
    "https://cdn.shopify.com/s/files/1/0568/1132/3597/files/HP5A4D_1.jpg?v=1685550728",
  ];

  return (
    <Container
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="standard"
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=161&fit=crop&auto=format`}
              srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {itemData.map((item) => {
        <Box
          sx={{ width: 500, height: 450, backgroundColor: "yellow" }}
          variant="standard"
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{`${item.price}$`}</p>
        </Box>;
      })}
    </Container>
  );
}
