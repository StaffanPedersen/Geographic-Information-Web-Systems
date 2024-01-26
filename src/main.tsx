import React from "react";
import ReactDOM from "react-dom/client";
import { MapApplication } from "./modules/application/MapApplication";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <MapApplication />
  </React.StrictMode>,
);
