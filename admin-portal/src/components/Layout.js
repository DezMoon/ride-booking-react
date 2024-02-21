import React from "react";
import NavigationBar from "./NavigationBar";
import { Routes } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <NavigationBar />
        </div>
        <div className="col-10">
          <Routes>{children}</Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
