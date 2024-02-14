import React from "react";
import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <NavigationBar />
        </div>
        <div className="col-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
