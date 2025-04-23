import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./Project/home.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./Project/detail.jsx";
import KawahPutihApp from "./Project/app.jsx";
import Kontak from "./Project/kontak.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KawahPutihApp />
  </React.StrictMode>
);
