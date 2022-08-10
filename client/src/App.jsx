import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Footer } from "./components/Form/Footer/Footer";
import NavBar from './components/NavBar/NavBar'
import Form from "./components/Form/Form";
import { Cart } from "./components";
import styled from 'styled-components'
const ContainerApp = styled.div`
  width:  90rem;
  overflow: hidden;
  margin: 2rem auto;
`

function App() {
  return (
    <>
    <ToastContainer />
    <NavBar/>
    <ContainerApp>
      <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/box/:idBox" element={<BoxDetail />} />
          <Route path="/product/:idProduct" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </ContainerApp>
    <Footer />
    </>
    
  )
}

export default App;
