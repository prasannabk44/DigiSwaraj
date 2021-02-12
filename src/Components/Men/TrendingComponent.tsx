import "./TrendingComponent.scss";

import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const TrendingComponent = () => {
  return (
    <Fragment>
      <div className="mt-4 mb-4">
        <h4>TRENDING WESTERN WEAR</h4>
      </div>
      <Row>
        <Col xs={12} sm={12} md={3}>
          <Card>
            <img
              src="https://via.placeholder.com/150x150"
              alt="trendingimg1"
              className="trendingimg1"
            />
            <Card.Body>
              <Card.Title>Superhero Tees</Card.Title>
              <Card.Text>card's content</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <Card>
            <img
              src="https://via.placeholder.com/150x150"
              alt="trendingimg1"
              className="trendingimg1"
            />
            <Card.Body>
              <Card.Title>Superhero Tees</Card.Title>
              <Card.Text>card's content</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <Card>
            <img
              src="https://via.placeholder.com/150x150"
              alt="trendingimg1"
              className="trendingimg1"
            />
            <Card.Body>
              <Card.Title>Superhero Tees</Card.Title>
              <Card.Text>card's content</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={3}>
          <Card>
            <img
              src="https://via.placeholder.com/150x150"
              alt="trendingimg1"
              className="trendingimg1"
            />
            <Card.Body>
              <Card.Title>Superhero Tees</Card.Title>
              <Card.Text>card's content</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TrendingComponent;
