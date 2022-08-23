import HowDoesItWork from "./components/HowDoesItWork/HowDoesItWork"
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
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
import FormProvider from "./components/Form/FormProvider/FormProvider";
import FormBox from "./components/Form/FormBox/FormBox";
import FormProduct from "./components/Form/FormProduct/FormProduct";
import ProfilePanel from "./components/User/ProfilePanel";
import { Cart, SendBox } from "./components";
import UsersList from "./components/Admin/Users/UsersList";
import BoxesList from "./components/Admin/Boxes/BoxesList";
import Error404 from "./components/Error/Error404";
import {PrivateRoute, AdminRoute} from "./components/PrivateRoute";
import UserProfileEdit from "./components/User/UserProfileEdit";
import RedeemCoupon from "./components/User/RedeemCoupon";
import Category from "./components/Admin/Category/Category";
import CategoryList from "./components/Admin/Category/CategoryList";
import FormCategory from "./components/Admin/Category/FormCategory";
import GiftDetail from "./components/User/Gift/GiftDetail";
import QRCode from "./components/QRCode/QRCode";
import OrderHistory from "./components/User/OrderHistory";
import Favs from "./components/Favs/Favs";
import CheckOutSuccess from "./components/CheckOutSuccess.jsx/CheckOutSuccess";
import GiftProductDetail from "./components/User/Gift/GiftProductDetail";



const ContainerApp = styled.div`
  min-height: 70vh;
`;

function App() {
  return (
    <>
      <ToastContainer
        //theme="dark"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <NavBar />
      <ContainerApp>
        <Routes>
          <Route path="/how-does-it-work" element={<HowDoesItWork />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/forgot-password" element={<ForgotPassword />} />
          <Route path="/login/reset-password/:email" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/form" element={<Form />} />
          <Route path="/box/:idBox" element={<BoxDetail />} />
          <Route path="/codebox" element={<RedeemCoupon />} />
          <Route path="/editprofile" element={<UserProfileEdit />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/giftdetail/:idBox" element={<GiftDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-success" element={<CheckOutSuccess />} />
          <Route path="/send" element={<SendBox />} />
          <Route path="/onlyproviders" element={<QRCode />} />
          <Route path="/giftproduct/:idProduct" element={<GiftProductDetail />} />
          //Dashboard
          <Route element={<PrivateRoute />}>
            <Route path="/favs" element={<Favs />} />
            <Route path="/product/:idProduct" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userprofile" element={<ProfilePanel />} />
          </Route>
          <Route element={<AdminRoute />}>
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
              <Route path="categories" element={<Category />}>
                <Route index element={<CategoryList />} />
                <Route path="create-categories" element={<FormCategory />} />
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
      <Footer />
    </>
  );
}
export default App;
