import "./VendorCorousel.scss";

import { Carousel, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

import VendorCorouselText from "./VendorCorouselText";

export default function VendorCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectIndex: number, e: any) => {
    setIndex(selectIndex);
  };

  return (
    <Carousel
      style={{ width: "100%", height: "350px", overflow: "hidden !important" }}
      //   variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
      interval={2000}
    >
      {[
        {
          src: "http://via.placeholder.com/300?text=First_Image_Corousel",
          alt: "First slide",
        },
        {
          src: "http://via.placeholder.com/300?text=Second_Image_Corousel",
          alt: "Second slide",
        },
        {
          src: "http://via.placeholder.com/300?text=Second_Image_Corousel",
          alt: "Third slide",
        },
      ].map(({ src, alt }) => (
        <Carousel.Item>
          <Row>
            <Col xs={6} sm={6} md={6} style={{ marginLeft: "0px" }}>
              <img className="d-block w-100 corousel-img" src={src} alt={alt} />
            </Col>
            <Col xs={6} sm={6} md={6} style={{ marginRight: "0px" }}>
              <VendorCorouselText />
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
