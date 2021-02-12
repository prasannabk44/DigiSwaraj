import "./Navigation.scss";

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
import { Link } from "react-router-dom";

var logo = require("../../images/swaraj_logo.png");

/**
 * Navigation component.
 * @return - A fragment with navigation of digiswaraj.
 */
export default function Navigation({
  user: { name, shopname },
}: // signin,
{
  user: {
    name: string;
    shopname: string;
  };

  // signin: string;
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
        <Link to="/" className="nav-brand">
          <img src={logo} alt="brand" className="brand-image" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto search-nav">
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
          <Nav>
            {name ? (
              <div className="user-info-on-nav text-size">
                <span>
                  <strong>{name},</strong>
                  {shopname}
                </span>
              </div>
            ) : null}
          </Nav>
          <Link to="/Signin">
            <div className="text-dark text-center text-size">
              <span>
                <strong>SignIn | SignUp</strong>
              </span>
            </div>
          </Link>
          <Nav>
            {[
              {
                href: "/Notification",
                count: notificationCount,
                icon: faBell,
                label: "bell",
              },
              {
                href: "/LikeCount",
                count: likeCount,
                icon: faHeart,
                label: "likeCount",
              },
            ].map(({ href, count, icon, label }) => (
              <Nav.Link href={href} key={label}>
                <span className="count-items text-center">{count}</span>
                <FontAwesomeIcon icon={icon} />
              </Nav.Link>
            ))}
            <Nav.Link href="/Cart" style={cartStyle}>
              <div className="cart-nav-link">
                <FontAwesomeIcon icon={faCartPlus} className="mr-1" />
                Cart <span className="ml-2">{cartItemsCount}</span> items
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

const cartStyle = { backgroundColor: "#000", color: "#fff", margin: "auto" };
