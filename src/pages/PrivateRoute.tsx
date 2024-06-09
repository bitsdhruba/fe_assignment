// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import { Navigate } from "react-router-dom";

// interface Context {
//   children?: React.ReactNode;
//   loggedin: boolean;
// }

// const PrivateRoute: React.FC<Context> = ({ children }) => {
//   const { loggedin } = useContext(AppContext) as Context;

//   if (loggedin) {
//     return children;
//   } else {
//     <Navigate to="/login" />;
//   }
// };

// export default PrivateRoute;
