import { useContext } from "react";
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const PrivateRoute = ({ children }) => {
  console.log("santhosh");

  let loginDatas = useContext(UserContext).user;

  if (loginDatas === null) {
    console.log(loginDatas);
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;

export const AuthRoute = ({ children }) => {
  console.log("santhosh");

  let loginDatas = useContext(UserContext).user;

  if (loginDatas !== null) {
    console.log(loginDatas);
    return <Navigate to="/dashboard" />;
  }

  return children;
};
