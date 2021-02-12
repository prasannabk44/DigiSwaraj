import "../VendorPage/Vendor.scss";

import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { People, Diagram3, CreditCard } from "react-bootstrap-icons";

import Image from "../FullWidthImage/FullWidthImage";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import VendorCorousel from "../VendorPage/VendorCorousel";

const Vendor = () => {
  return (
    <Fragment>
      <Navigation
        user={{
          name: "Register Now ",
          shopname: "",
        }}
      />
      <Row>
        <VendorCorousel />
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h1 className="text-center">
            Ease of handling one customer-DigiSwaraj
          </h1>
          <h5 className="text-warning text-center">
            Digiswaraj Will bring you sales,manage your distribution and deliver
            headache free timely payment
          </h5>
        </Col>
      </Row>
      <Row>
        <Col xs={4} sm={4} md={4}>
          <People className="fa-4x v-icons" />
          <p className="text-center v-icons-con">
            Sales-sell to millions of customers
          </p>
        </Col>
        <Col xs={4} sm={4} md={4}>
          <Diagram3 className="fa-4x text-center v-icons" />
          <br />
          <p className="text-center v-icons-con">Headache free delivery</p>
        </Col>
        <Col xs={4} sm={4} md={4}>
          <CreditCard className="fa-4x v-icons" />
          <br />
          <p className="text-center v-icons-con">Receive on time payment</p>
        </Col>
      </Row>
      <Row>
        <video className="video-tag mt-4" controls={true} preload="metadata">
          <source
            src="https://pixabay.com/videos/search/?cat=fashion"
            type="video/mp4"
          />
          <source src="public\images\videocover.png" type="png/jpg" />
        </video>
      </Row>
      <Row className="mt-4">
        <Col xs={12} sm={12} md={12}>
          <Image
            src="https://via.placeholder.com/190x140"
            alt="returnPolicyImage"
            className="img-responsive"
          />
          <h1 className="text-center">Return policies</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fuga,
            quia ipsum perferendis aperiam laborum eos praesentium ut beatae
            veritatis vero consequatur ex qui voluptatem, corporis alias nam
            accusantium cupiditate!. quia ipsum perferendis aperiam laborum eos
            praesentium ut beatae veritatis vero consequatur ex qui voluptatem,
            corporis alias nam accusantium cupiditate!
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h1 className="text-center">Categories</h1>
          <p className="text-center">
            Register now if u supply items of following categories.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>
        {[
          {
            categoryimgcon: "men",
            url: "https://via.placeholder.com/200x300?text=Categoryimages",
            alt: "men",
          },
          {
            categoryimgcon: "women",
            url: "https://via.placeholder.com/200x300?text=Categoryimages",
            alt: "women",
          },
          {
            categoryimgcon: "babies & kid",
            url: "https://via.placeholder.com/200x300?text=Categoryimages",
            alt: "babies&kids",
          },
          {
            categoryimgcon: "home & kitchen",
            url: "https://via.placeholder.com/200x300?text=Categoryimages",
            alt: "home&kitchen",
          },
        ].map(({ categoryimgcon, url, alt }) => (
          <Col xs={12} sm={12} md={2}>
            <p className="categories-con text-center">{categoryimgcon}</p>
            <img className="categories-img" src={url} alt={alt} />
          </Col>
        ))}
        <Col md={2}></Col>
      </Row>

      <Row>
        <Col md={2}></Col>
        {[
          {
            categoryimgcon: "office supplies",
            url: "https://via.placeholder.com/200x300?text=Categoryimages",
            alt: "office-supplies",
          },
          {
            categoryimgcon: "gifts",
            url: "https://via.placeholder.com/200x300?text=Categoryimages",
            alt: "gifts",
          },
          {
            categoryimgcon: "toys",
            url: "https://via.placeholder.com/200x300?text=Categoryimages",
            alt: "toys",
          },
          {
            categoryimgcon: "covid safety",
            url: "https://via.placeholder.com/200x300?text=Categoryimages",
            alt: "covid-safety",
          },
        ].map(({ categoryimgcon, url, alt }) => (
          <Col xs={12} sm={12} md={2} className="mt-4">
            <p className="categories-con text-center">{categoryimgcon}</p>
            <img className="categories-img" src={url} alt={alt} />
          </Col>
        ))}
        <Col md={2}></Col>
      </Row>
      <Footer />
    </Fragment>
  );
};

export default Vendor;
