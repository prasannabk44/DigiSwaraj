import "./Footer.scss";
import { MDBCol, MDBRow, MDBFooter, MDBBtn } from "mdbreact";

import React from "react";

var { SocialIcon } = require("react-social-icons");

const Footer = () => {
  //List for categories section
  const Categorieslinks = [
    "Category 1",
    "About us",
    "Testimonials",
    "Price Table",
    "Crew",
    "Portfolio",
  ];
  const CategoryItems = Categorieslinks.map((Categorieslink) => (
    <li className="list-unstyled">
      <a href="#!">{Categorieslink}</a>
    </li>
  ));

  //list for Link section
  const Importantlinks = [
    "About DigiSwaraj",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
    "Lorem Ipsum",
  ];
  const Linkitems = Importantlinks.map((Importantlink) => (
    <li className="list-unstyled">
      <a href="#!">{Importantlink}</a>
    </li>
  ));
  //Social-icons
  const socialitems = [
    { socialitem: "http://twitter.com", id: "twitter-id" },
    { socialitem: "http://facebook.com", id: "facebood-id" },
    { socialitem: "http://instagram.com", id: "instagram-id" },
  ];

  const socialimage = socialitems.map(({ socialitem, id }) => (
    <span className="mx-2">
      <SocialIcon key={socialitem} url={socialitem} id={id} />
    </span>
  ));

  return (
    <MDBFooter
      color="black"
      className="font-small pt-4 mt-4 text-center footer"
    >
      <MDBRow>
        {/*first column Service Policy and Social Links*/}
        <MDBCol xs="4" sm="4" md="4">
          <h5 className="title">SERVICE POLICY</h5>
          <p>
            India’s no. 1 online fashion destination justifies its fashion
            relevance by bringing something new and chic to the table on the
            daily. Fashion trends seem to change at lightning speed
          </p>
          {socialimage}
        </MDBCol>

        {/*Second column Categories and important Links*/}

        {/* div class for vertical line */}
        <div className="vertical"></div>
        <MDBCol xs="2" sm="2" md="2" className="text-center">
          <h5 className="title">CATEGORIES</h5>
          {CategoryItems}
        </MDBCol>

        <MDBCol xs="2" sm="2" md="2" className="text-center">
          <h5 className="title links">LINKS</h5>
          {Linkitems}
        </MDBCol>

        {/*Third  column  Contact us */}
        <div className="vertical"></div>
        <MDBCol xs="3" sm="3" md="3" className="text-center">
          <MDBBtn className="btn-dark">Contact us</MDBBtn>
        </MDBCol>
        <MDBCol xs="1" sm="1" md="1" className="text-center"></MDBCol>
      </MDBRow>

      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://www.DigiSwaraj.com">DigiSwaraj.com </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
