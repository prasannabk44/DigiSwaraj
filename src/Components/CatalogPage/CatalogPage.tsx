import React, { Fragment, useEffect, useState } from "react";
import "./CatalogPage.scss";
import Navigation from "../Navigation/Navigation";
import {
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  Pagination,
  Row,
} from "react-bootstrap";
// import { useLocation } from "react-router-dom";{document.write(useLocation().pathname)}
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import CategoryFilterOptions from "../CategoryPageCards/CategoryFilterOptions";
import ProductList from "../ProductList/ProductList";
import productsDataJson from "../../LandingPageProductsData";
import Footer from "../Footer/Footer";
import { CheckSquare } from "react-bootstrap-icons";
const CatalogPage = () => {
  const [productsData, setProductsData] = useState(productsDataJson);
  useEffect(() => {
    setProductsData(productsDataJson);
  }, [productsData]);
  return (
    <Fragment>
      <Navigation
        user={{
          name: "Sonu",
          shopname: "Own Shop ST ",
        }}
      />
      <CategoryContainer />
      <Row>
        <Col xs={12} sm={12} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/Men">Men</Breadcrumb.Item>
            <Breadcrumb.Item href="/Apparel">Apparel</Breadcrumb.Item>
            <Breadcrumb.Item active>Shirts</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col md={6}>
          <Row>
            {["Add Selections to cart", "Add Selections to my store"].map(
              (selectionbutton) => (
                <Col md={6}>
                  <Button
                    className="btn-dark btn-block mt-2"
                    variant="contained"
                  >
                    {selectionbutton}
                  </Button>
                </Col>
              )
            )}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={2}>
          <CategoryFilterOptions />
        </Col>
        <Col md={10} className="border">
          <Row>
            <Col md={9}>
              <span>Materials</span> <span>Style</span> <span>Length</span>
              <Row>
                <Col xs={3} md={12}>
                  <CheckSquare /> <span> Comfort Fit </span>
                  <CheckSquare /> <span> Regular Fit </span>
                  <CheckSquare /> <span> Slim Fit </span>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <Dropdown>
                <span> Sort by:</span>
                <Dropdown.Toggle
                  variant="whitesmoke"
                  id="dropdown-basic"
                  className="dropdown"
                >
                  Price Range
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <b className="fa-xs"> Low To High</b>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <b className="fa-xs">High To Low</b>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <b className="fa-xs">Something else</b>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          {[
            {
              sectionHeading: "",
              more: "",
              displayProducts: productsData.topSellersProducts,
            },
          ].map((productList) =>
            productList.displayProducts ? (
              <>
                <ProductList
                  key={productList.displayProducts[0]._id}
                  {...productList}
                />
                <ProductList
                  key={productList.displayProducts[0]._id}
                  {...productList}
                />
                <ProductList
                  key={productList.displayProducts[0]._id}
                  {...productList}
                />
                <ProductList
                  key={productList.displayProducts[0]._id}
                  {...productList}
                />
                <ProductList
                  key={productList.displayProducts[0]._id}
                  {...productList}
                />
              </>
            ) : null
          )}
          <Row>
            <Col xs={1} sm={1} md={4}></Col>
            <Col xs={8} sm={8} md={6}>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
            <Col xs={1} sm={1} md={2}></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          {[
            {
              sectionHeading: "Top Sellers",
              more: "more ...",
              displayProducts: productsData.topSellersProducts,
            },
          ].map((products) => (
            <ProductList key={products.displayProducts[0]._id} {...products} />
          ))}
        </Col>
      </Row>
      <Footer />
    </Fragment>
  );
};

export default CatalogPage;
