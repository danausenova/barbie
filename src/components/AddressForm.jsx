import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AddressForm() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" sx={{ position: "relative" }}>
      <React.Fragment>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "center", mt: 10 }}
        >
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
      </React.Fragment>
      <Box sx={{ position: "absolute", bottom: "-40px", right: "5px" }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate("/cart")}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/order")}
        >
          Place order
        </Button>
      </Box>
    </Container>
  );
}
