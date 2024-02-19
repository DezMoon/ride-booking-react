import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Check user's theme preference and apply it
const theme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", theme);

ReactDOM.render(<App />, document.getElementById("root"));
