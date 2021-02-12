import "./MenuComponent.scss";

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import {
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  TabContent,
} from "react-bootstrap";

//Tab menu
const categories = [
  <Link to="/Men" className="men">
    Men
  </Link>,
  <Link to="/" className="women">
    Women
  </Link>,
  <Link to="/" className="Babies">
    Babies & Kids
  </Link>,
  <Link to="/" className="Home">
    Home & Furnishing
  </Link>,
  <Link to="/" className="Office">
    Office Supplies
  </Link>,
  <Link to="/" className="Gift">
    Gift
  </Link>,
  <Link to="/" className="Toys">
    Toys
  </Link>,
  <Link to="/" className="Essentials">
    Essentials
  </Link>,
  <Link to="/" className="Safety">
    Safety
  </Link>,
];
const Tabmenu = categories.map((tabmenu) => <Tab> {tabmenu}</Tab>);

//Topwear;
const topWear = [
  <Link to="/CatalogPage">T-shirts & Polos</Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Shirts" id="nav-dropdown">
      <NavDropdown.Item eventKey="1.1">Casual Shirts</NavDropdown.Item>
      <NavDropdown.Item eventKey="1.2">Formal Shirts </NavDropdown.Item>
    </NavDropdown>
  </Link>,
  <Link to="">Shirts</Link>,
  <Link to="">Sweatshirts</Link>,
  <Link to="">Jackets</Link>,
  <Link to="">Sweaters</Link>,
  <Link to="">
    <NavDropdown
      aria-expanded="false"
      title="Suits & Blazers"
      id="nav-dropdown"
    >
      <NavDropdown.Item eventKey="1.2.1">Suits</NavDropdown.Item>
      <NavDropdown.Item eventKey="1.2.2">Blazers</NavDropdown.Item>
      <NavDropdown.Item eventKey="1.2.3">Waistcoats</NavDropdown.Item>
    </NavDropdown>
  </Link>,
];
const topwear = topWear.map((Topwear) => <TabContent>{Topwear}</TabContent>);
//Ethnicwear
const ethnicwear = [
  <Link to="">Kurta Sets</Link>,
  <Link to="">Kurtas</Link>,
  <Link to="">Dhotis</Link>,
  <Link to="">Mundus & Lungis</Link>,
  <Link to="">Nehru Jackets & Vests</Link>,
  <Link to="">Sherwanis</Link>,
  <Link to="">Pyjamas</Link>,
  <Link to="">Stoles</Link>,
];
const Ethnicwear = ethnicwear.map((ethnicWear) => (
  <TabContent>{ethnicWear}</TabContent>
));
//Innerwear & Sleepwear
const innerwear = [
  <Link to="">Vests</Link>,
  <Link to="">Briefs</Link>,
  <Link to="">Boxers</Link>,
  <Link to="">Trunks</Link>,
  <Link to="">Pyjamas & Lounge Pants</Link>,
  <Link to="">Pyjama Sets & Night Suits</Link>,
  <Link to="">Lounge Shorts</Link>,
  <Link to="">Sleep Robes</Link>,
];
const Innerwear = innerwear.map((innerWear) => (
  <TabContent>{innerWear}</TabContent>
));

//Accessories
const accessories = [
  <Link to="">Sunglasses</Link>,
  <Link to="">Wallets</Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Bags & Luggage" id="nav-dropdown">
      <NavDropdown.Item eventKey="5.1">Bags & Backpacks</NavDropdown.Item>
      <NavDropdown.Item eventKey="5.2">Laptop Bags </NavDropdown.Item>
      <NavDropdown.Item eventKey="5.3"> School Bags</NavDropdown.Item>
      <NavDropdown.Item eventKey="5.4">Gym Bags</NavDropdown.Item>
      <NavDropdown.Item eventKey="5.4">Briefcases</NavDropdown.Item>
    </NavDropdown>
  </Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Watches" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1">Analog</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Digital </NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Smart Watches</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.4">Chronograph</NavDropdown.Item>
    </NavDropdown>
  </Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title=" Jewellery" id="nav-dropdown">
      <NavDropdown.Item eventKey="6.1">Bracelets & Kada</NavDropdown.Item>
      <NavDropdown.Item eventKey="6.2">Chains </NavDropdown.Item>
      <NavDropdown.Item eventKey="6.3"> Pendants</NavDropdown.Item>
      <NavDropdown.Item eventKey="6.4">Earrings</NavDropdown.Item>
    </NavDropdown>
  </Link>,
];
const Accessories = accessories.map((Acessories) => <Tab>{Acessories}</Tab>);

//Bottomwear
const bottomwear = [
  <Link to="">Jeans</Link>,
  <Link to="">Shorts</Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Trousers" id="nav-dropdown">
      <NavDropdown.Item eventKey="3.1">Casual Trousers</NavDropdown.Item>
      <NavDropdown.Item eventKey="3.2">Formal Trousers </NavDropdown.Item>
    </NavDropdown>
  </Link>,
];
const Bottomwear = bottomwear.map((bottomWear) => (
  <TabContent>{bottomWear}</TabContent>
));

//Unstiched Fabric
const fabric = [
  <Link to="">Shirts</Link>,
  <Link to="">Trousers</Link>,
  <Link to="">Suits</Link>,
  <Link to="">Fabric Sets</Link>,
];
const Fabric = fabric.map((Fabrics) => <TabContent>{Fabrics}</TabContent>);

//Swimwear
const swimwear = [
  <Link to="">Shorts</Link>,
  <Link to="">Briefs</Link>,
  <Link to="">Trunks</Link>,
];
const Swimwear = swimwear.map((swimWear) => (
  <TabContent>{swimWear}</TabContent>
));

//Footwear
const footwear = [
  <Link to="">Skin Care</Link>,
  <Link to="">Health & Personal Care</Link>,
  <Link to="">Sports Shoes</Link>,
  <Link to="">Sandals & Floaters</Link>,
  <Link to="">Slippers & Flip-Flops</Link>,
];
const Footwear = footwear.map((footWear) => (
  <TabContent>{footWear}</TabContent>
));

//Grooming
const grooming = [
  <Link to="">Casual Shoes</Link>,
  <Link to="">Formal Shoes</Link>,
  <Link to="">Kits & Gift Sets</Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Movember Store" id="nav-dropdown">
      <NavDropdown.Item eventKey="7.1">Trimmers</NavDropdown.Item>
      <NavDropdown.Item eventKey="7.2">Electric Shavers </NavDropdown.Item>
      <NavDropdown.Item eventKey="7.3"> Manual Shavers</NavDropdown.Item>
      <NavDropdown.Item eventKey="7.4">Shaving Accessories</NavDropdown.Item>
      <NavDropdown.Item eventKey="7.5">Shaving Foams & Gels</NavDropdown.Item>
      <NavDropdown.Item eventKey="7.6">Aftershave Treatments</NavDropdown.Item>
    </NavDropdown>
  </Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Shave" id="nav-dropdown">
      <NavDropdown.Item eventKey="8.1">Manual Shavers</NavDropdown.Item>
    </NavDropdown>
  </Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Hair Care" id="nav-dropdown">
      <NavDropdown.Item eventKey="9.1">Oil & Shampoosa</NavDropdown.Item>
    </NavDropdown>
  </Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Fragrances" id="nav-dropdown">
      <NavDropdown.Item eventKey="10.1">Perfume</NavDropdown.Item>
      <NavDropdown.Item eventKey="10.2">Eau de Toilette </NavDropdown.Item>
      <NavDropdown.Item eventKey="10.3"> Eau de Parfum</NavDropdown.Item>
      <NavDropdown.Item eventKey="10.4">Eau de Cologne</NavDropdown.Item>
    </NavDropdown>
  </Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Bath & Shower" id="nav-dropdown">
      <NavDropdown.Item eventKey="11.1">Soaps & Body Washes</NavDropdown.Item>
      <NavDropdown.Item eventKey="11.2">Bath </NavDropdown.Item>
      <NavDropdown.Item eventKey="11.3">
        Deodarants & Antiperspirants
      </NavDropdown.Item>
    </NavDropdown>
  </Link>,
  <Link to="">
    <NavDropdown aria-expanded="false" title="Oral Care" id="nav-dropdown">
      <NavDropdown.Item eventKey="12.1">Power Toothbrushes</NavDropdown.Item>
      <NavDropdown.Item eventKey="12.2">
        Mouthwash & Breath Fresheners
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="12.3">Manual Toothbrushes</NavDropdown.Item>
      <NavDropdown.Item eventKey="12.4">Dental Floss</NavDropdown.Item>
    </NavDropdown>
  </Link>,
];
const Grooming = grooming.map((groming) => <TabContent>{groming}</TabContent>);

//Women
//Western Wear
const western = [
  <Link to="">Tops</Link>,
  <Link to="">Tshirts</Link>,
  <Link to="">Tunics</Link>,
  <Link to="">Shirts</Link>,
  <Link to="">Dresses & Jumpsuits</Link>,
  <Link to="">Jeans</Link>,
  <Link to="">Skirts & Shorts</Link>,
  <Link to="">Leggings & Jeggings</Link>,
  <Link to="">Suits & Blazers</Link>,
  <Link to="">Sweaters & Sweatshirts</Link>,
  <Link to="">Jackets & Shrugs</Link>,
  <Link to="">Scarfs</Link>,
];
const Western = western.map((westerns) => <TabContent>{westerns}</TabContent>);

//Indian Wear
const indian = [
  <Link to="">Sarees & Blouses</Link>,
  <Link to="">Kurtas & Suits</Link>,
  <Link to="">Kurtis, Tunics & Tops</Link>,
  <Link to="">Dress Material</Link>,
  <Link to="">Lehenga Cholis</Link>,
  <Link to="">Ethnic Gowns</Link>,
  <Link to="">Chunnis & Dupattas</Link>,
  <Link to="">Leggings, Salwars & Chudidars</Link>,
  <Link to="">Suits & Blazers</Link>,
  <Link to="">Sweaters & Sweatshirts</Link>,
  <Link to="">Jackets & Shrugs</Link>,
  <Link to="">Scarfs</Link>,
];
const Indian = indian.map((indians) => <TabContent>{indians}</TabContent>);

//Sleepwear
const sleepwear = [
  <Link to="">Skirts & Palazzos</Link>,
  <Link to="">Bras & Lingerie Sets</Link>,
  <Link to="">Briefs</Link>,
  <Link to="">Bath Robe</Link>,
  <Link to="">Camisoles</Link>,
  <Link to="">Lounge Pants & Shorts</Link>,
  <Link to="">Nights Suits & Dresses</Link>,
  <Link to="">Pyjamas and Sleep Shirts</Link>,
  <Link to="">Swimwear & Accessories</Link>,
  <Link to="">Shapewear</Link>,
  <Link to="">Stockings</Link>,
  <Link to="">Thermal Tops & Bottoms</Link>,
];
const Sleepwear = sleepwear.map((sleepwears) => (
  <TabContent>{sleepwears}</TabContent>
));

//Sports & Active Wear
const sports = [
  <Link to="">Capris & Tshirts</Link>,
  <Link to="">Sports Bra</Link>,
  <Link to="">Sports Shoes</Link>,
  <Link to="">Sweatshirts</Link>,
  <Link to="">Shorts</Link>,
  <Link to="">Socks</Link>,
  <Link to="">Sports Accessories</Link>,
  <Link to="">Sports Sandals</Link>,
  <Link to="">Tights</Link>,
  <Link to="">Track Pants</Link>,
  <Link to="">Tops</Link>,
  <Link to="">Tracksuits</Link>,
];
const Sports = sports.map((sport) => <TabContent>{sport}</TabContent>);

//WomenJewellery
const womenjewellery = [
  <Link to="">Earrings</Link>,
  <Link to="">Chains & Necklaces</Link>,
  <Link to="">Bangles & Bracelets</Link>,
  <Link to="">Rings</Link>,
  <Link to="">Pendants</Link>,
  <Link to="">Jewellery Sets</Link>,
  <Link to="">Mangalsutras</Link>,
  <Link to="">Nose RIngs & Pins</Link>,
  <Link to="">Toe Rings</Link>,
  <Link to="">Anklets</Link>,
  <Link to="">Brooches & Pins</Link>,
  <Link to="">Beads & Charms</Link>,
  <Link to="">Coins & Bars</Link>,
];
const WomenJewellery = womenjewellery.map((Womenjewellery) => (
  <TabContent>{Womenjewellery}</TabContent>
));

//Women Footwear
const wfootwear = [
  <Link to="">Flats</Link>,
  <Link to="">Heels</Link>,
  <Link to="">Casual Shoes</Link>,
  <Link to="">Sports Shoes</Link>,
  <Link to="">Flip Flops & Slippers</Link>,
  <Link to="">Sandals</Link>,
  <Link to="">Formal Shoes</Link>,
  <Link to="">Sports Sandals</Link>,
  <Link to="">Boots</Link>,
  <Link to="">Ethnic Footwear</Link>,
  <Link to="">Sneakers</Link>,
];
const Womenfootwear = wfootwear.map((Wfootwear) => (
  <TabContent>{Wfootwear}</TabContent>
));
const MenuComponent = () => {
  return (
    <Fragment>
      <Tabs>
        <TabList>{Tabmenu}</TabList>
        <TabPanel>
          <Row>
            <Col xs={1} sm={1} md={1}></Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Topwear</h6>
              </TabContent>
              {topwear}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Ethnic Wear</h6>
              </TabContent>
              {Ethnicwear}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Innerwear & Sleepwear</h6>
              </TabContent>
              {Innerwear}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Accessories</h6>
              </TabContent>
              {Accessories}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Bottomwear</h6>
              </TabContent>
              {Bottomwear}
            </Col>
            <Col xs={1} sm={1} md={1}></Col>
          </Row>
          <br />
          <Row>
            <Col xs={1} sm={1} md={1}></Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Grooming</h6>
              </TabContent>
              {Grooming}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Swimwear</h6>
              </TabContent>
              {Swimwear}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Footwear</h6>
              </TabContent>
              {Footwear}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Unstiched Fabric</h6>
              </TabContent>
              {Fabric}
            </Col>
            <Col xs={1} sm={1} md={1}></Col>
          </Row>
          <br />
          <br />
        </TabPanel>
        <TabPanel>
          <Row>
            <Col xs={1} sm={1} md={1}></Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Western Wear</h6>
              </TabContent>
              {Western}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Indian Wear</h6>
              </TabContent>
              {Indian}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Lingerie & Sleepwear</h6>
              </TabContent>
              {Sleepwear}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Sports & Active Wear</h6>
              </TabContent>
              {Sports}
            </Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Women Footwear</h6>
              </TabContent>
              {Womenfootwear}
            </Col>
            <Col xs={1} sm={1} md={1}></Col>
          </Row>
          <br />

          <Row>
            <Col xs={1} sm={1} md={1}></Col>
            <Col xs={2} sm={2} md={2}>
              <TabContent>
                <h6 className="submenu-title">Women Jewellery</h6>
              </TabContent>
              {WomenJewellery}
            </Col>
            <Col xs={1} sm={1} md={1}></Col>
          </Row>
          <br />
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};

export default MenuComponent;
