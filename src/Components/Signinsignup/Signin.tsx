import "./Signin.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
var logo = require("../../images/swaraj_logo.png");
const Signin = () => {
  return (
    <Form className="signin-form">
      <Link to="/" className="signin-logo">
        <img src={logo} alt="SwarajLogo" className="signin-logo" />
      </Link>
      <Form.Group controlId="formGroup" className="s-sign-title text-center">
        <b>Register as Seller Step 2</b>
      </Form.Group>
      <Form.Group controlId="formGroup" className="text-center s-otp-bg">
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

export default Signin;
