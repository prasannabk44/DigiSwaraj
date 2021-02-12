import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

import "./ProductImgSidebar.scss";

const ProductDetails = () => {
  //   const [likeCount, setLikeCount] = useState(0);
  const Productimages = [
    "https://img5.cfcdn.club/09/9e/09b082fdbf0e529a9df11be1b43f509e_350x350.jpg",
    "https://img5.cfcdn.club/09/9e/09b082fdbf0e529a9df11be1b43f509e_350x350.jpg",
    "https://img5.cfcdn.club/09/9e/09b082fdbf0e529a9df11be1b43f509e_350x350.jpg",
    "https://img5.cfcdn.club/09/9e/09b082fdbf0e529a9df11be1b43f509e_350x350.jpg",
  ];
  const Productpics = Productimages.map((Productimage) => (
    <img src={Productimage} alt="Logo" id="imageoptions" />
  ));

  const Productimageview = [
    "https://img5.cfcdn.club/09/9e/09b082fdbf0e529a9df11be1b43f509e_350x350.jpg",
  ];
  const Productview = Productimageview.map((Productview) => (
    <img src={Productview} alt="Logo" id="Fullview" />
  ));

  return (
    <Fragment>
      <Row className="first">{Productpics}</Row>
      <div>
        <Row>
          <Col xs={12} sm={12} md={12}></Col>
        </Row>
        {Productview}
      </div>
    </Fragment>
  );
};

export default ProductDetails;
