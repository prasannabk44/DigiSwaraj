import React from "react";
import "./ProductRetailerZoom.scss";
import { Col, Row, Button } from "react-bootstrap";
import { BookmarkFill } from "react-bootstrap-icons";

const ProductZoom = () => {
  return (
    <Row>
      {["Add to Cart", "Buy Now"].map((BuyingOption: string) => (
        <Col xs={12} sm={12} md={4}>
          <Button className="btn-white btn-brand">{BuyingOption}</Button>
        </Col>
      ))}
      <Col xs={12} sm={12} md={4}>
        <Button className="btn-white btn-block">
          <BookmarkFill className="fa-sm mb-1" /> Add to Wishlist
        </Button>
      </Col>
    </Row>
  );
};

export default ProductZoom;
