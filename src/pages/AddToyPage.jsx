import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useToyContext } from "../contexts/ToyContext";
import { pink } from "@mui/material/colors";

export default function AddToyPage() {
  const { addToy } = useToyContext();
  const [formValue, setFormValue] = useState({
    title: "",
    price: "",
    description: "",
    image1: "",
    image2: "",
    image3: "",
    category: "",
  });
  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.image1.trim() ||
      !formValue.image2.trim() ||
      !formValue.image3.trim() ||
      !formValue.category.trim()
    ) {
      return;
    }
    addToy({ ...formValue, price: +formValue.price });
    setFormValue({
      title: "",
      price: "",
      description: "",
      image1: "",
      image2: "",
      image3: "",
      category: "",
    });
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: pink[500],
      },
      secondary: {
        main: "#ec407a",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
        }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className="addBackground" />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: "#ec407a" }}>
              Add new toy
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Title"
                name="title"
                autoFocus
                value={formValue.title}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Price"
                value={formValue.price}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                value={formValue.description}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="image1"
                label="First Image"
                value={formValue.image1}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="image2"
                label="Second Image"
                value={formValue.image2}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="image3"
                label="Third Image"
                value={formValue.image3}
                onChange={handleChange}
              />
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={formValue.category}
                  onChange={handleChange}
                  label="Category"
                  name="category"
                >
                  <MenuItem value={"doll"}>Doll</MenuItem>
                  <MenuItem value={"dollhouse"}>Dollhouse</MenuItem>
                  <MenuItem value={"cars"}>Cars</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
