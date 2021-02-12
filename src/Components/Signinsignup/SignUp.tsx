import "./SignUp.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Row } from "react-bootstrap";
var logo = require("../../images/swaraj_logo.png");
const SignUp = () => {
  return (
    <Form className="signup-form">
      <Link to="/" className="signup-logo">
        <img src={logo} alt="SwarajLogo" className="signup-logo" />
      </Link>
      <Form.Group controlId="formGroup" className="signup-title text-center">
        <b>Register as </b>
      </Form.Group>
      <Form.Group controlId="formGroup" className="radio-btn">
        <Form.Check
          type="radio"
          aria-label="radio 1"
          label="Retailer"
          id="Retailer"
        />
        <Form.Check type="radio" aria-label="radio 2" label="Seller" />
      </Form.Group>
      <Form.Group controlId="formGroupbtn">
        {/* <Link to="https://accounts.google.com/signin" className=""> */}
        <Button
          className="btn btn-white btn-block mb-4"
          variant="white"
          type="submit"
        >
          Sign in With Google
        </Button>
        {/* </Link> */}

        <Form.Control
          type="number"
          placeholder="Continue with Email or Phone"
        />
      </Form.Group>
      <Button className="btn btn-dark btn-block" variant="dark" type="submit">
        Proceed
      </Button>
      <Link to="/Signin" className="link">
        Sign-in if already Registered
      </Link>
      <br />
      <br />
      <label>
        Want to be a Vendor?{" "}
        <Link to="/Vendor" className="link">
          Click Here
        </Link>
      </label>
    </Form>
  );
};

export default SignUp;
