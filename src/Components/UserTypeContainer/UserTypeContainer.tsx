import "./UserTypeContainer.scss";

import { Col, Row } from "react-bootstrap";

import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";

export default function UserTypeContainer({}) {
  return (
    <Row className="user-type-row">
      {[
        {
          path: "/RetailerPage",
          name: "Retailers",
          description: "Wholesale Prices",
        },
        {
          path: "/SellerPage",
          name: "Sellers",
          description: "Start your OWN Online store",
        },
        {
          path: "/Vendor",
          name: "Vendors",
          description: "Manufacturers & Distributers",
        },
      ].map(({ path, name, description }, index) => (
        <Col className={`user-type-btn ${index ? "ml-1" : ""}`}>
          <Link to={path}>
            <h3 className="text-center text-dark">{name}</h3>
            <p className="text-center text-dark">{description}</p>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
