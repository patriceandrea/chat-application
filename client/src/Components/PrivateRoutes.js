import { Navigate } from "react-router-dom";

const { Outlet } = require("react-router-dom");


const useAuht = () => {
  const user = { loggedIn: false }
  return user && user.loggedIn;
};

const PrivateRoutes = () => {
  const isAuth = useAuht();
  return isAuth ? <Outlet /> : <Navigate to="/" />
};

export default PrivateRoutes; 