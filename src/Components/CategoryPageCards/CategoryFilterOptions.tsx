import { Card } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import React from "react";
import "./CategoryFilterOptions.scss";
import DoubleRangeSlider from "./PriceSlider";

const Category = () => {
  //options for Category
  const Subcategoriesoptions = [
    "Sub-Category-1",
    "Sub-Category-2",
    "Sub-Category-3",
    "Sub-Category-4",
    "Sub-Category-5",
    "Sub-Category-6",
  ];
  const Categoriesoptions = Subcategoriesoptions.map((Subcategoriesoption) => (
    <li className="list-unstyled" id="sub-category" key={Subcategoriesoption}>
      <Checkbox color="default"> </Checkbox>
      {Subcategoriesoption}
    </li>
  ));

  //options for Brands
  const BrandsApparels = [
    "Allen Solly(100)",
    "Arrow(50)",
    "Blackberrys(20)",
    "Calvin Klein(40)",
    "Levizo(5)",
  ];
  const Brandsoptions = BrandsApparels.map((BrandsApparel) => (
    <li className="list-unstyled" id="Brand-options" key={BrandsApparel}>
      <Checkbox color="default"> </Checkbox>
      {BrandsApparel}
    </li>
  ));

  //options for Discount
  const Discountoffers = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];
  const Discount = Discountoffers.map((Discountoffer) => (
    <li className="list-unstyled" id="Brand-options" key={Discountoffer}>
      <Checkbox color="default"> </Checkbox>
      {Discountoffer}
    </li>
  ));

  //options for color
  const ColorPalettes = [
    "White",
    "Black",
    "Blue",
    "Navy Blue",
    "Grey",
    "Red",
    "Green",
    "Yellow",
    "Orange",
    "Pink",
    "Brown",
    "Maroon",
    "Khaki",
  ];
  const Coloroptions = ColorPalettes.map((ColorPalette) => (
    <li className="list-unstyled" id="Brand-options" key={ColorPalette}>
      <Checkbox color="default"> </Checkbox>
      {ColorPalette}
    </li>
  ));

  //opttions for sizes
  const SizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
  const Sizes = SizeOptions.map((Sizeoption) => (
    <li className="list-unstyled" id="Brand-options" key={Sizeoption}>
      <Checkbox color="default"> </Checkbox>
      {Sizeoption}
    </li>
  ));
  //Card for categories Apparel section

  return (
    <Card className="card-width">
      {/* Card for Categories Apparel */}
      <Card.Body>
        <Card.Title>
          <b>Categories Apparel</b>
        </Card.Title>
        <Card.Text className="text-center">
          {Categoriesoptions}
          {/* <Link to="/"></Link> */}
        </Card.Text>
      </Card.Body>

      {/* Horizontal line  */}
      <hr></hr>

      {/* //Card for Brands Apparel section */}
      <Card.Body>
        <Card.Title>
          <b>Brands Apparel</b>
        </Card.Title>
        <Card.Text>{Brandsoptions}</Card.Text>
      </Card.Body>

      {/* Horizontal line  */}
      <hr></hr>

      {/* //Card for Discount section */}
      <Card.Body>
        <Card.Title>
          <b>Discounts</b>
        </Card.Title>
        <Card.Text>{Discount}</Card.Text>
      </Card.Body>

      {/* Horizontal line  */}
      <hr></hr>
      <Card.Body>
        {/* card for Price range */}
        <Card.Title>
          <b>Price Range</b>
        </Card.Title>
        <Card.Text>
          <DoubleRangeSlider />
        </Card.Text>
      </Card.Body>

      {/* Horizontal line  */}
      <hr></hr>

      {/* Card for colour options */}
      <Card.Body>
        <Card.Title>
          <b>Colour</b>
        </Card.Title>
        <Card.Text>{Coloroptions}</Card.Text>
      </Card.Body>

      {/* Horizontal line  */}
      <hr></hr>

      {/* Card for Size */}
      <Card.Body>
        <Card.Title>
          <b>Sizes</b>
        </Card.Title>
        <Card.Text>{Sizes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Category;
