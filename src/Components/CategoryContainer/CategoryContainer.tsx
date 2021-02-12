import "./CategoryContainer.scss";

import MenuComponent from "./MenuComponent";
import React, { Fragment } from "react";
import { Tab, Tabs } from "react-tabs";

export default function CategoryContainer() {
  return (
    <Fragment>
      <Tabs>
        <Tab>
          <MenuComponent />
        </Tab>
      </Tabs>
    </Fragment>
  );
}
