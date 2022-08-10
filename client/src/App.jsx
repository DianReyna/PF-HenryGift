import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import 'react-toastify/dist/ReactToastify.css';
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
import CreateProvider from "./components/Admin/Providers/CreateProvider";
import ProvidersList from "./components/Admin/Providers/ProvidersList";
import ProductsList from "./components/Admin/Products/ProductsList";
import HomeAdmin from "./components/Admin/HomeAdmin/HomeAdmin"; // Home de panel admin
import { Cart } from "./components";
// import styled from 'styled-components'

const ContainerApp = styled.div`
  width: 90rem;
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
          <Route path="/form" element={<Form />} />
          <Route path="/box/:idBox" element={<BoxDetail />} />
          <Route path="/product/:idProduct" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="home" element={<HomeAdmin />} />
            <Route path="boxes" element={<Boxes />}>
              <Route path="create-box" element={<CreateProvider />} />
            </Route>
            <Route path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
              <Route path="create-product" element={<CreateProvider />} />
            </Route>
            <Route path="providers" element={<Providers />}>
              <Route index element={<ProvidersList />} />
              <Route path="create-provider" element={<CreateProvider />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route path="create-user" element={<CreateProvider />} />
            </Route>
          </Route>
        </Routes>

      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </ContainerApp>
    <Footer />
    </>
  );
}

export default App;
