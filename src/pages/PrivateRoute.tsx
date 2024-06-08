import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

interface Context {
  loggedin: boolean;
}

const PrivateRoute = ({ children }) => {
  const { loggedin } = useContext(AppContext) as Context;

  if (loggedin) {
    return children;
  } else {
    <Navigate to="/login" />;
  }
};

export default PrivateRoute;
