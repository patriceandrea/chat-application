import { Navigate } from "react-router-dom";
import UserContext, { AccountContext } from "./AccountContext";

const { Outlet } = require("react-router-dom");


const useAuht = () => {
  const { user } = UserContext(AccountContext);
  return user && user.loggedIn;
};

const PrivateRoutes = () => {
  const isAuth = useAuht();
  return isAuth ? <Outlet /> : <Navigate to="/" />
};

export default PrivateRoutes; 