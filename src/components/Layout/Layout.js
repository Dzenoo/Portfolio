import React, { Fragment } from "react";

import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
