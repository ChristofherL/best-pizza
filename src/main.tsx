import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routes";
import "./styles/global.scss";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={routes} />
    </ShoppingCartProvider>
  </React.StrictMode>
);
