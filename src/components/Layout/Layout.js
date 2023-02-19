import React, { Fragment } from "react";

import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <main>{children}</main>
      <Navigation />
    </Fragment>
  );
};

export default Layout;
