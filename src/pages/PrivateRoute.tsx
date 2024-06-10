import { ReactNode, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

interface Private {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Private) => {
  const { loggedin } = useContext(AppContext);

  if (loggedin) {
    return children;
  } else {
    <Navigate to="/login" />;
  }
};

export default PrivateRoute;
