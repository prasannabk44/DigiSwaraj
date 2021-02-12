import "../Signinsignup/RetailerSignin.scss";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
var logo = require("../../images/swaraj_logo.png");
const RetailerSignin = () => {
  return (
    <Form className="retailer-form">
      <Link to="/" className="r-sign-logo">
        <img src={logo} alt="SwarajLogo" className="r-sign-logo" />
      </Link>
      <Form.Group controlId="formGroup" className="r-sign-title text-center">
        <b>Register as Retailer Step 2</b>
      </Form.Group>
      <Form.Group controlId="formGroup" className="text-center r-otp-bg">
        <b> OTP Verification</b>
      </Form.Group>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>OTP from your Email</Form.Label>
        <br />
        <Form.Label>xxabc@gmail.com</Form.Label>
        <Form.Control type="number" placeholder="OTP Verification Code" />
      </Form.Group>
      <Button className="btn btn-dark btn-block" variant="dark" type="submit">
        Proceed
      </Button>
    </Form>
  );
};

export default RetailerSignin;
