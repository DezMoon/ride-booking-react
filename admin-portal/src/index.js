import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Check user's theme preference and apply it
const theme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", theme);

// Use createRoot for rendering
const root = createRoot(document.getElementById("root"));
root.render(<App />);
