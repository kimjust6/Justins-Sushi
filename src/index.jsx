import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
