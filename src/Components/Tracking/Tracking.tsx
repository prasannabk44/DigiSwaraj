import "../Tracking/Tracking.scss";

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  Forward,
  CheckCircleFill,
  CartFill,
  Truck,
  Wallet,
  Headset,
} from "react-bootstrap-icons";
const ProductProcess = () => {
  return (
    <>
      {[
        <CheckCircleFill size={30} />,
        <Forward size={30} />,
        <CartFill size={30} />,
        <Forward size={30} />,
        <Truck size={30} />,
        <Forward size={30} />,
        <Wallet size={30} />,
        <Forward size={30} />,
        <Headset size={30} />,
      ].map((flowIcons: any) => (
        <Row xs={12} sm={12} md={12}>
          <Col className="mt-4 flow-icon">{flowIcons}</Col>
        </Row>
      ))}

      {[
        "Select Product",
        "Get Orders",
        "Get Doorstep Delivery",
        "ReceivePayment",
        "Get Customer Support",
      ].map((flowCon: string) => (
        <Row className="flow-con" xs={12} sm={12} md={12}>
          <Col>
            <strong>{flowCon}</strong>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ProductProcess;
