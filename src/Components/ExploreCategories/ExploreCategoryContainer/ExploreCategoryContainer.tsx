import "./ExploreCategoryContainer.scss";

import { Col, Row } from "react-bootstrap";
import React, { Fragment } from "react";

export default function ExploreCategoryContainer() {
  /**
   * Generated Dummy Data.
   */
  const dummyCategoryData = [];
  for (let i = 1; i <= 8; ++i) {
    dummyCategoryData.push({
      categoryName: `Category ${i}`,
      categoryDescription: `Category description ${i}`,
      categoryImageSrc: `http://via.placeholder.com/60?text=Category${i}`,
    });
  }
  return (
    <Fragment>
      <Row className="categories">
        <Col xs={12} sm={12} md={12} className="text-left">
          <h5>Explore Categories</h5>
        </Col>
        <Row style={{ border: "1px solid rgb(204, 204, 204)" }}>
          {dummyCategoryData.map(
            ({ categoryName, categoryDescription, categoryImageSrc }) => (
              <Col
                xs={12}
                sm={12}
                md={3}
                id="category-container"
                key={categoryName}
              >
                <Row>
                  <Col>
                    <img
                      className="img img-responsive"
                      src={categoryImageSrc}
                      alt={categoryName}
                    />
                  </Col>
                  <Col>
                    <h5>{categoryName}</h5>
                    <p className="category-description">
                      {categoryDescription}
                    </p>
                  </Col>
                </Row>
              </Col>
            )
          )}
        </Row>
      </Row>
    </Fragment>
  );
}
