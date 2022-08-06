import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";

import Form from "./components/Form/Form";


function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/box/:idBox" element={<BoxDetail />} />

        </Routes>
        {/* <Footer /> */}

      </div>
  )
}

export default App;
