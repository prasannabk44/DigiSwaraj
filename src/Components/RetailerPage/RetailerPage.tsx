import "./RetailerPage.scss";

import React, { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import ProductList from "../ProductList/ProductList";
import productsDataJson from "../../LandingPageProductsData";
import { StarFill } from "react-bootstrap-icons";
import ProductRetailerZoom from "./ProductRetailerZoom";
import ProductDetailsText from "./ProductDetailsText";
import ProductImgSidebar from "./ProductImgSidebar";

const RetailerPage = () => {
  const [productsData, setProductsData] = useState(productsDataJson);
  useEffect(() => {
    setProductsData(productsDataJson);
  }, [productsData]);
  return (
    <Fragment>
      <Navigation
        user={{
          name: "",
          shopname: "",
        }}
      />
      <Container fluid>
        <Row className="border">
          <Col xs={12} sm={12} md={6} className="border-right">
            <ProductImgSidebar />
          </Col>
          <Col md={6}>
            <ProductDetailsText />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <p className="text-center hover-img">
              Hover over the image to zoom
            </p>
          </Col>
          <Col md={6}>
            <ProductRetailerZoom />
            <br />
            <p>
              <strong>Average Rating</strong> 4.5{" "}
              <StarFill className="fa-sm mb-1" />
            </p>
            <p>
              <strong>Brand</strong> Levizo
            </p>
            <p>
              <strong>Country of origin</strong> India
            </p>
            <p>
              <strong>Shipping</strong> Shipping cost based on delivery location
            </p>
            <p>
              <strong>Delivery Info</strong> Usually delivered within 4-6 days
            </p>
          </Col>
        </Row>
        <Row className="border">
          <Col xs={12} sm={12} md={6} className="border-right">
            <h5 className="mt-2">
              <strong>Description</strong>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt voluptatum soluta quibusdam suscipit adipisci fugiat fuga
              quas molestias dolorem autem, totam asperiores blanditiis
              voluptate vel aspernatur quisquam vero sit. Sunt veniam repellat
              voluptate eaque quis magnam quaerat itaque in. Ullam quasi quae
              consequatur pariatur aut labore? Voluptate pariatur consectetur
              autem quibusdam sapiente aut, architecto suscipit reprehenderit ea
              ipsa nesciunt? Perspiciatis molestias voluptate molestiae minima
              iste ducimus neque aut velit reprehenderit culpa voluptatum maxime
              repudiandae accusamus aliquid, pariatur amet nulla dolor ullam
              eveniet corporis suscipit. Dicta a eligendi quae corrupti? Fugiat,
              mollitia quae. Consequuntur eaque ipsam explicabo ab nemo
              accusamus unde maiores voluptatem provident similique deleniti
              praesentium est officia error cum autem consectetur ad quam,
              voluptates voluptate aspernatur facere omnis.
            </p>
          </Col>

          <Col md={6}>
            <h5 className="mt-2">
              <strong>Specifications</strong> <span> Levizo</span>
            </h5>
            <Row>
              {[
                "Product Dimensions:25 x 17 x 3cm",
                "Weight:200 Grams",
                "Date First Available:11 July 2019",
                "Manufacturer:La Wellness",
                "EAN:B07V3KRSYY",
                "Item part number:AZSLDSHRT01GREENM",
                "Item Weight:200g",
                "Item Dimsions LxWxH:25 x 17 x 3 Centimeters",
                "Units:Pcs",
              ].map((prodfeature: string) => (
                <Col xs={12} sm={12} md={12}>
                  <p>{prodfeature}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="border">
          <Col xs={12} sm={12} md={12}>
            <p>
              <strong>Expert Reviews</strong> ( 10 ) Average rating <b>4.5</b>{" "}
              <StarFill className="fa-sm mb-1" />
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              deserunt voluptatum soluta quibusdam suscipit adipisci fugiat fuga
              quas molestias dolorem autem, totam asperiores blanditiis
              voluptate vel aspernatur quisquam vero sit. Sunt veniam repellat
              voluptate eaque quis magnam quaerat itaque in.
            </p>
          </Col>
        </Row>
        {[
          {
            sectionHeading: "Related Products",
            more: "",
            displayProducts: productsData.topSellersProducts,
          },
        ].map((productList) =>
          productList.displayProducts ? (
            <ProductList
              key={productList.displayProducts[0]._id}
              {...productList}
            />
          ) : null
        )}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default RetailerPage;
