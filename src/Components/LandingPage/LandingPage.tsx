import "./LandingPage.scss";

import { Container, Row } from "react-bootstrap";
import React, { Fragment, useEffect, useState } from "react";

import Banner from "../FullWidthImage/FullWidthImage";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import CustomCorousel from "../Corousel/Corousel";
import ExploreCategoryContainer from "../ExploreCategories/ExploreCategoryContainer/ExploreCategoryContainer";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import ProductList from "../ProductList/ProductList";
import UserTypeContainer from "../UserTypeContainer/UserTypeContainer";
import productsDataJson from "../../LandingPageProductsData";
import VendorPage from "../VendorPage/Vendor";
import TrackingHead from "../Tracking/TrackingHead";
import Tracking from "../Tracking/Tracking";
import SellerPage from "../SellerPage/SellerPage";

function LandingPage() {
  const [productsData, setProductsData] = useState(productsDataJson);
  useEffect(() => {
    setProductsData(productsDataJson);
  }, [productsData]);
  const SetofProducts = [
    {
      sectionHeading: "Top Sellers",
      more: "more...",
      displayProducts: productsData.topSellersProducts,
    },
    {
      sectionHeading: "Top Offers",
      more: "more...",
      displayProducts: productsData.topOffersProducts,
    },
    {
      sectionHeading: "Top Deals",
      more: "more...",
      displayProducts: productsData.topDealsProducts,
    },
  ];
  return (
    <Fragment>
      <Navigation
        user={{
          name: "Sonu",
          shopname: "Own Shop ST ",
        }}
      />
      <Banner
        src="http://via.placeholder.com/1400x90"
        alt="Banner"
        className="full-width-image"
      />
      {/* <CategoryContainer /> */}

      <CustomCorousel />
      <Container fluid>
        <UserTypeContainer />

        <Row>
          {SetofProducts.map((productList) =>
            productList.displayProducts ? (
              <>
                <ProductList
                  key={productList.sectionHeading[0]}
                  {...productList.more}
                  {...productList.displayProducts[0]._id}
                  {...productList}
                />
                <ExploreCategoryContainer />
                <ProductList
                  key={productList.sectionHeading[1]}
                  {...productList.more}
                  {...productList.displayProducts[1]._id}
                  {...productList}
                />
                <Tracking />
                <ProductList
                  key={productList.sectionHeading[2]}
                  {...productList.more}
                  {...productList.displayProducts[2]._id}
                  {...productList}
                />
              </>
            ) : null
          )}
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default LandingPage;
