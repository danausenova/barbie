import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#FF0592", fontSize: "20px" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fab fa-facebook-f" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-twitter" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab className="fa-google" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.instagram.com/barbiestyle/"
            role="button"
          >
            <MDBIcon fab className="fa-instagram" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://github.com/danausenova/barbie"
            role="button"
          >
            <MDBIcon fab className="fa-github" />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div>
        <p>Accepted Payment Methods</p>
        <MDBBtn
          rippleColor="2B2730"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="cc-paypal" />
        </MDBBtn>
        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="cc-visa" />
        </MDBBtn>
        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="cc-mastercard" />
        </MDBBtn>
        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          href="#!"
          role="button"
        >
          <MDBIcon fab icon="cc-amazon-pay" />
        </MDBBtn>
      </div>
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 courses:
        <a
          className="text-dark"
          href="https://makers.courses/houses/KvEVKzaW7mTDQ4bkAiaR"
        >
          makers.com
        </a>
      </div>
    </MDBFooter>
  );
}
