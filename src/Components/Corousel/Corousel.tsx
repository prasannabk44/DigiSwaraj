import "./Corousel.scss";

import { Carousel, Col, Row } from "react-bootstrap";
import React, { useState } from "react";

import CorouselTextComponent from "./CorouselTextComponent/CorouselTextComponent";

export default function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      // variant="dark"
      activeIndex={index}
      onSelect={handleSelect}  
      interval={2000}
      className="Carousel"
    >
      {[
        {
          src:
            "http://via.placeholder.com/125x150.png?text=Second_Image_Corousel",
          alt: "First slide",
          label: "First slide label",
        },
        {
          src: "http://via.placeholder.com/125x150?text=Second_Image_Corousel",
          alt: "Second slide",
          label: "Second slide label",
        },
        {
          src: "http://via.placeholder.com/125x150?text=Third_Image_Corousel",
          alt: "Third slide",
          label: "Third slide label",
          // description:
          //   "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
      ].map(({ src, alt, label }) => (
        <Carousel.Item key={label}>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <CorouselTextComponent />
            </Col>
            <Col md={6}>
              <Row>
                <Col xs={12} sm={12} md={3}>
                  <img className="d-block  corousel-img" src={src} alt={alt} />
                </Col>
                <Col md={3}>
                  <img className="d-block corousel-img1" src={src} alt={alt} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
