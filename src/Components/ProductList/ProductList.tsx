import "./ProductList.scss";

import { Col, Row } from "react-bootstrap";

import Product from "../Product/Product";
import React, { Fragment } from "react";

// import formatCurrency from "../../common/util";

export default function ProductList({
  sectionHeading,
  more,
  displayProducts,
}: {
  more: string;
  sectionHeading: string;
  displayProducts: {
    _id: string;
    image: string;
    name: string;
    description: string;
    retailPrice: number;
    wholeSalePrice: number;
    discount: number;
  }[];
}) {
  return (
    <Fragment>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <span>
            <h5>
              {sectionHeading}{" "}
              <a href="#" className="text-dark">
                {more}
              </a>
            </h5>
          </span>
        </Col>
      </Row>
      <Row>
        {displayProducts?.map((product) => (
          <Col xs={12} sm={12} md={2}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}
