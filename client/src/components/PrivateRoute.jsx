import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";


const useAuth = () => {
  const { user } = useSelector(
    (state) => state.auth
  )
  return user
};

const PrivateRoute = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to="/login" />; //SingIn
};

const AdminRoute = () => {
  const isAuth = useAuth()
  return isAuth.is_Admin ? <Outlet /> : <Navigate to="/" />; //SingIn
};

export {PrivateRoute, AdminRoute};
