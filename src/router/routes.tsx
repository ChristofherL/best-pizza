import { createBrowserRouter } from "react-router-dom";
import { Checkout, CheckoutConfirmation, Home } from "../pages";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../libs/stripe";
import { PrivateRoute } from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/checkout",
    element: (
      <PrivateRoute>
        <Elements
          stripe={stripePromise}
          options={{ mode: "payment", amount: 100, currency: "brl" }}
        >
          <Checkout />
        </Elements>
      </PrivateRoute>
    ),
  },
  {
    path: "/checkout-confirmation",
    element: <CheckoutConfirmation />,
  },
]);
