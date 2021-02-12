import "../Men/Men.scss";

import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import NavigationMenu from "../CategoryContainer/CategoryContainer";
import BiggestDealsBrandsComponent from "./BiggestDealsBrandsComponent";
import TrendingContent from "./TrendingComponent";
import { Link } from "react-router-dom";

const Categorycontent = [
  "Shirts",
  "T-Shirts",
  "Jeans",
  "Shorts",
  "Trousers",
  "Casual Shoes",
];

const Exploretopbrands = ["Levis", "US Polo", "GAP", "DNMX"];
const Men = () => {
  return (
    <Fragment>
      <NavigationMenu />
      <BiggestDealsBrandsComponent />
      <div className="mt-4 mb-4">
        <h4>CATEGORIES TO BAG</h4>
      </div>
      <Row>
        {Categorycontent.map((Categorytobag) => (
          <Col xs={12} sm={12} md={2}>
            <Card className="category-card">
              <img
                src="https://via.placeholder.com/150x150"
                alt="cardimg1"
                className="category-img"
              />
              <Card.Body>
                <Card.Title className="category-title">
                  {Categorytobag}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="mt-4 mb-4">
        <h4>EXPLORE TOP BRANDS</h4>
      </div>
      <Row>
        {Exploretopbrands.map((ExploreTopBrands) => (
          <Col xs={12} sm={12} md={3}>
            <Card className="brand-card">
              <img
                src="https://via.placeholder.com/150x150"
                alt="cardimg1"
                className="brand-img"
              />
              <Card.Body>
                <Card.Title className="brand-title">
                  {ExploreTopBrands}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <TrendingContent />
      <TrendingContent />
      <TrendingContent />
      <Row className="mt-4">
        <Col xs={12} sm={12} md={3}>
          <h6>ONLINE SHOPPING</h6>
          <Link to="/Men">Men</Link>
          <br />
          <Link to="/Men">Women</Link>
          <br />
          <Link to="/Men">Kids</Link>
          <br />
          <Link to="/Men">Home & Living</Link>
          <br />
          <Link to="/Men">Offers</Link>
          <br />
        </Col>
        <Col xs={12} sm={12} md={3}>
          {" "}
          <h6>USEFUL LINKS</h6>
          <Link to="/Men">Contact Us</Link>
          <br />
          <Link to="/Men">FAQ</Link>
          <br />
          <Link to="/Men">T&C</Link>
          <br />
          <Link to="/Men">Terms Of Use</Link>
          <br />
          <Link to="/Men">Track Orders</Link>
          <br />
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h6>Title</h6>
          <Link to="/Men">Link1</Link>
          <br />
          <Link to="/Men">Link2</Link>
          <br />
          <Link to="/Men">Link3</Link>
          <br />
          <Link to="/Men">Link4</Link>
          <br />
          <Link to="/Men">Link5</Link>
          <br />
        </Col>
        <Col xs={12} sm={12} md={3}>
          <h6>Title</h6>
          <Link to="/Men">Link1</Link>
          <br />
          <Link to="/Men">Link2</Link>
          <br />
          <Link to="/Men">Link3</Link>
          <br />
          <Link to="/Men">Link4</Link>
          <br />
          <Link to="/Men">Link5</Link>
          <br />
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col xs={12} sm={12} md={12}>
          <h6>POPULAR SEARCHES</h6>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
            vel esse assumenda suscipit enim consectetur impedit quaerat
            reiciendis nobis provident, recusandae, possimus eveniet ea amet
            architecto libero aliquid quo!Hic corrupti praesentium optio a fuga
            perspiciatis est amet mollitia sit quasi doloribus odit ipsam quos
            repellendus molestias nisi veritatis, enim nesciunt asperiores,
            quaerat beatae. Accusantium quas doloribus reprehenderit cum.
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h6>POPULAR SEARCHES</h6>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
            vel esse assumenda suscipit enim consectetur impedit quaerat
            reiciendis nobis provident, recusandae, possimus eveniet ea amet
            architecto libero aliquid quo!Hic corrupti praesentium optio a fuga
            perspiciatis est amet mollitia sit quasi doloribus odit ipsam quos
            repellendus molestias nisi veritatis, enim nesciunt asperiores,
            quaerat beatae. Accusantium quas doloribus reprehenderit cum.
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h6>POPULAR SEARCHES</h6>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
            vel esse assumenda suscipit enim consectetur impedit quaerat
            reiciendis nobis provident, recusandae, possimus eveniet ea amet
            architecto libero aliquid quo!Hic corrupti praesentium optio a fuga
            perspiciatis est amet mollitia sit quasi doloribus odit ipsam quos
            repellendus molestias nisi veritatis, enim nesciunt asperiores,
            quaerat beatae. Accusantium quas doloribus reprehenderit cum.
            <Row>
              <Col xs={12} sm={12} md={12}>
                <span>
                  1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  veniam vel esse assumenda suscipit enim consectetur impedit
                  quaerat reiciendis nobis provident, recusandae, possimus
                  eveniet ea amet architecto libero aliquid quo!Hic corrupti
                  praesentium optio a fuga perspiciatis est amet mollitia sit
                  quasi doloribus odit ipsam quos repellendus molestias nisi
                  veritatis, enim nesciunt asperiores, quaerat beatae.
                  Accusantium quas doloribus reprehenderit cum.
                </span>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <span>
                  2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  veniam vel esse assumenda suscipit enim consectetur impedit
                  quaerat reiciendis nobis provident, recusandae, possimus
                  eveniet ea amet architecto libero aliquid quo!Hic corrupti
                  praesentium optio a fuga perspiciatis est amet mollitia sit
                  quasi doloribus odit ipsam quos repellendus molestias nisi
                  veritatis, enim nesciunt asperiores, quaerat beatae.
                  Accusantium quas doloribus reprehenderit cum.
                </span>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <span>
                  3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  veniam vel esse assumenda suscipit enim consectetur impedit
                  quaerat reiciendis nobis provident, recusandae, possimus
                  eveniet ea amet architecto libero aliquid quo!Hic corrupti
                  praesentium optio a fuga perspiciatis est amet mollitia sit
                  quasi doloribus odit ipsam quos repellendus molestias nisi
                  veritatis, enim nesciunt asperiores, quaerat beatae.
                  Accusantium quas doloribus reprehenderit cum.
                </span>
              </Col>
            </Row>
          </span>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Men;
