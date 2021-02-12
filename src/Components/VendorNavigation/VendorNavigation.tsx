import "./VendorNavigation.scss";

import { Button, FormControl, FormLabel, Nav, Navbar } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import {
  faBell,
  faCartPlus,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NUMBER_OF_LINES_IN_HAMBURGER } from "../../common/Constants";

var logo = require("../../images/swaraj_logo.jpeg");

/**
 * Navigation component.
 * @return - A fragment with navigation of digiswaraj.
 */
export default function Navigation({
  vLabel,
  signin,
}: {
  [key: string]: string;
}) {
  const [searchInput, setSearchInput] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const handleSearchInputChange = (event: any) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
  /**
   * Populate  numbers of horizontal lines inside our hamburger button.
   */
  const hamburgerHorizontalLines: any[] = [];
  for (let i = 0; i < NUMBER_OF_LINES_IN_HAMBURGER; ++i) {
    hamburgerHorizontalLines.push(
      <span key={`hamburger-line-${i + 1}`} className="horizontal-line" />
    );
  }
  return (
    <Fragment>
      <div className="div-hamburger">{hamburgerHorizontalLines}</div>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="light"
        className="nav-border"
      >
        <Navbar.Brand href="#home" className="nav-brand">
          <img src={logo} alt="brand" className="brand-image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto bg-light">
            <FormLabel htmlFor="search" className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </FormLabel>
            <FormControl
              type="text"
              autoComplete="on"
              value={searchInput}
              id="search"
              placeholder="search"
              className="search-input"
              onChange={handleSearchInputChange}
            />
            <Button variant="dark" className="search-button">
              Search
            </Button>
          </Nav>
          <p className="text-center ml-5 mr-5 mt-4 register-label">{vLabel}</p>
          <Nav.Link href="#SigninSignup">
            <div className="text-dark text-center">
              <strong> {signin}</strong>
            </div>
          </Nav.Link>
          <Nav>
            {[
              {
                href: "#notification",
                count: notificationCount,
                icon: faBell,
                label: "bell",
              },
            ].map(({ href, count, icon, label }) => (
              <Nav.Link href={href} key={label}>
                <span className="count-items text-center">{count}</span>
                <FontAwesomeIcon className="text-center" icon={icon} />
              </Nav.Link>
            ))}
            <Nav.Link href="#SignInSignUp" style={cartStyle}>
              <div className="register-nav-link">REGISTER NOW </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

const cartStyle = { backgroundColor: "#000", color: "#fff", margin: "auto" };
