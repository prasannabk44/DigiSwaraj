import React from "react";
import { Row } from "react-bootstrap";
import "../Product/Product.scss";
export default function Product({
  product,
}: {
  product: {
    _id: string;
    image: string;
    title?: string;
    name: string;
    description: string;
    retailPrice: number;
    wholeSalePrice: number;
    discount: number;
  };
}) {
  return (
    <Row className="products">
      <a href={"#" + product._id}>
        <img
          className="border product-img"
          src={product.image}
          alt={product.title}
        />
        <p className="text-dark text-center mt-2 ">
          <b> {product.name} </b>
        </p>
      </a>

      <div className="product-details ">
        <span className="text-dark">{product.retailPrice}</span>
        <span>
          <strong>{product.wholeSalePrice}</strong>
        </span>
        <span>({product.discount} % OFF)</span>
      </div>
    </Row>
  );
}
