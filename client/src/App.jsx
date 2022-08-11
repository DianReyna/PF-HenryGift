import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Form/Footer/Footer";
import { Cart, SendBox, Checkout, Login, Home	,BoxDetail	,ProductDetail	,NavBar	,Form	
	,Dashboard	,Boxes	,Products	,Users	,Providers	,CreateProvider	,ProvidersList
	,ProductsList	,HomeAdmin	,FormProvider	,FormBox	,FormProduct	,UserProfileCreate } from "./components";
import styled from "styled-components";


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
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/box/:idBox" element={<BoxDetail />} />
          <Route path="/product/:idProduct" element={<ProductDetail />} />
          <Route path="/userprofile" element={<UserProfileCreate />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/send" element={<SendBox />} />
          <Route path="/payment" element={<Checkout />} />
          //Dashboard
          <Route path="/admin" element={<Dashboard />}>
            <Route path="home" element={<HomeAdmin />} />
            <Route path="boxes" element={<Boxes />}>
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
              <Route path="create-user" element={<CreateProvider />} />
            </Route>
          </Route>
          // End Dashboard
          <Route path="/" element={<Home />} />
        </Routes>
      </ContainerApp>
      {/* <Footer /> */}
    </>
  );
}
export default App;
