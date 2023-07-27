import React from "react";
import { MDBFooter, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center d-flex align-items-flex-end justify-content-center"
      style={{
        backgroundColor: "#FF0592",
        fontSize: "20px",
      }}
    >
      <section className="mb-1">
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
    </MDBFooter>
  );
}
