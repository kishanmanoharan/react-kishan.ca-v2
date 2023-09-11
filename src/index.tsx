import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
