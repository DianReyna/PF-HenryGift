import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Form/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";
import styled from "styled-components";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Boxes from "./components/Admin/Boxes/Boxes";
import Products from "./components/Admin/Products/Products";
import Users from "./components/Admin/Users/Users";
import Providers from "./components/Admin/Providers/Providers";
import ProvidersList from "./components/Admin/Providers/ProvidersList";
import ProductsList from "./components/Admin/Products/ProductsList";
import HomeAdmin from "./components/Admin/HomeAdmin/HomeAdmin";
import FormProvider from "./components/Form/FormProvider";
import FormBox from "./components/Form/FormBox";
import FormProduct from "./components/Form/FormProduct";
import UserProfileCreate from "./components/User/UserProfileCreate";
import { Cart, SendBox, Checkout } from "./components";
import UsersList from "./components/Admin/Users/UsersList";
import BoxesList from "./components/Admin/Boxes/BoxesList";
import Error404 from "./components/Error/Error404";
import PrivateRoute from "./components/PrivateRoute";

const ContainerApp = styled.div`
  /* width: 90rem; */
  overflow: hidden;
  margin: 2rem auto;
`;

function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <ContainerApp>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/form" element={<Form />} />
          <Route path="/box/:idBox" element={<BoxDetail />} />
          <Route path="/product/:idProduct" element={<ProductDetail />} />
          <Route path="/userprofile" element={<UserProfileCreate />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/send" element={<SendBox />} />
          <Route path="/payment" element={<Checkout />} />
          //Dashboard
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<Dashboard />}>
              <Route index element={<HomeAdmin />} />
              <Route path="boxes" element={<Boxes />}>
                <Route index element={<BoxesList />} />
                <Route path="create-box" element={<FormBox />} />
              </Route>
              <Route path="products" element={<Products />}>
                <Route index element={<ProductsList />} />
                <Route path="create-product" element={<FormProduct />} />
              </Route>
              <Route path="providers" element={<Providers />}>
                <Route index element={<ProvidersList />} />
                <Route path="create-provider" element={<FormProvider />} />
              </Route>
              <Route path="users" element={<Users />}>
                <Route index element={<UsersList />} />
              </Route>
            </Route>
          </Route>
          // End Dashboard
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </ContainerApp>
      {/* <Footer /> */}
    </>
  );
}
export default App;
