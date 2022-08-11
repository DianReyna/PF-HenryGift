import { Outlet } from "react-router-dom";
import Home from "./Home/Home";

const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const PrivateRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Home />; //SingIn
};

export default PrivateRoute;
