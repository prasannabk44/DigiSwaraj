import React, { Fragment } from "react";
import "./ProductDetailsText.scss";

import { Col, Row } from "react-bootstrap";
import { MDBFormInline, MDBInput } from "mdbreact";

const ProductDetailsText = () => {
  const AboutProduct = [
    "Levizo 100% cotton plain solid casual shirt Full Sleeves for Men ",
  ];
  const ProductInfo = AboutProduct.map((Information) => <h5>{Information}</h5>);

  const AboutPrice = [
    "Bulk Price Rs.599.00 + Rs.649.00 + GST(Upto 55% OFF)MRP 899",
  ];
  const PriceDetails = AboutPrice.map((ProductPrice) => <p>{ProductPrice}</p>);

  const MinimumPrice = ["628-681 including GST Minimum order Quantity-5Pcs"];
  const MinPrice = MinimumPrice.map((Details) => <p>{Details}</p>);

  const Productimages = [
    "https://img5.cfcdn.club/09/9e/09b082fdbf0e529a9df11be1b43f509e_350x350.jpg",
    "https://img5.cfcdn.club/09/9e/09b082fdbf0e529a9df11be1b43f509e_350x350.jpg",
  ];
  const ColorOptions = Productimages.map((Productimage) => (
    <Row>
      <img src={Productimage} alt="Logo" id="Variety" />
    </Row>
  ));

  const SizesText = ["L", "M", "XL", "S", "XS", "L"];
  const SizeList = SizesText.map((Sizeoption) => <> {Sizeoption},</>);

  const SizesCounter = ["L", "M", "XL", "S", "XS"];
  const Counter = SizesCounter.map((Size) => (
    <>
      <input type="button" value={Size} id="buttonblock" />
      <input type="button" value="-" id="counter" />
      <input type="text" name="quantity" value="0" id="number" />
      <input type="button" value="+" />
    </>
  ));

  const Discounts = [
    "15% for 20 + Pcs(135)",
    "20% for 50 + Pcs(180)",
    "25% for 100 + Pcs(224)",
  ];
  const Discountblock = Discounts.map((Discount) => (
    <>
      <MDBInput
        label={Discount}
        type="radio"
        id="radio1"
        containerClass="mr-5"
      />
    </>
  ));

  return (
    <Fragment>
      <Row>
        <Col xs={12} sm={12} md={12}>
          {ProductInfo}
          {PriceDetails}
          {MinPrice}
        </Col>

        <Col xs={12} sm={12} md={12}>
          <MDBFormInline>
            <MDBInput
              label="Free Choice"
              type="radio"
              id="radio1"
              containerClass="mr-5"
              checked
            />
            <MDBInput
              label="Set"
              type="radio"
              id="radio2"
              containerClass="mr-5"
            />
          </MDBFormInline>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={12} md={12}>
          <MDBFormInline>
            <h6>
              Colour <span>Teal</span>
            </h6>

            <br />
            {ColorOptions}
          </MDBFormInline>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <h6>Sizes {SizeList}</h6>

          <div className="containerblock">{Counter}</div>
          <div className="DiscountOptions">
            <h6>Bulk Discounts(Your Profit)</h6>
            <MDBFormInline>{Discountblock}</MDBFormInline>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductDetailsText;
