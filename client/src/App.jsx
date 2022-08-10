import Login from "./components/Login/Login"
import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Form/Footer/Footer";
import NavBar from './components/NavBar/NavBar'
import Form from "./components/Form/Form";
import styled from 'styled-components'
const ContainerApp = styled.div`
  width:  90rem;
  overflow: hidden;
  margin: 2rem auto;
`

function App() {
  return (
    <>
    <NavBar/>
    <ContainerApp>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/box/:idBox" element={<BoxDetail />} />
          <Route path="/product/:idProduct" element={<ProductDetail />} />
      </Routes>
    </ContainerApp>
    <Footer />
    </>
    
  )
}

export default App;
