import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./RouteSwitch";
import "./styles/App.css";
import "./styles/Home.css";
import "./styles/Nav.css";
import "./styles/Shop.css";
import "./styles/About.css";
import "./styles/Contact.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
