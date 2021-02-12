import React from "react";
import "../Tracking/Tracking.scss";
import { Row, Col } from "react-bootstrap";
const TrackingHead = () => {
  return (
    <Row className="mt-4">
      <Col xs={12} sm={12} md={12}>
        <h5>
          <b className="text-center">How can you buy,sell and profit from DigiSwaraj</b>
        </h5>
      </Col>
    </Row>
  );
};

export default TrackingHead;
