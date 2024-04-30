import { ReactNode, useContext, useEffect } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

type PrivateRouteProps = {
  children: ReactNode;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { totalItems } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      if (!totalItems) {
        navigate("/");
      }
    })();
  }, [totalItems, navigate]);

  return children;
}
