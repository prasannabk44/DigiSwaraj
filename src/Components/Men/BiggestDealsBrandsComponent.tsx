import "./BiggestDealsBrandsComponent.scss";

import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Branddealstitle1 = ["Levis", "GAP", "DNMX", "Buffalo"];

const BiggestDealsBrandsComponent = () => {
  return (
    <Fragment>
      <div className="mt-4 mb-4">
        <h4>BIGGEST DEALS ON TOP BRANDS</h4>
      </div>
      <Row>
        {Branddealstitle1.map((BrandDeals) => (
          <Col xs={12} sm={12} md={3}>
            <Card className="brand-card">
              <img
                src="https://via.placeholder.com/150x150"
                alt="cardimg1"
                className="brand-img"
              />
              <Card.Body>
                <Card.Title className="brand-title">{BrandDeals}</Card.Title>
              </Card.Body>
            </Card>
            <Card className="brand-card">
              <img
                src="https://via.placeholder.com/150x150"
                alt="cardimg1"
                className="brand-img"
              />
              <Card.Body>
                <Card.Title className="brand-title">{BrandDeals}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default BiggestDealsBrandsComponent;
