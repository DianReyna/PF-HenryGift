import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import { Route, Router, Routes } from 'react-router-dom';
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<BoxDetail />} />
        </Routes>
        {/* <Footer /> */}
        
      {/* <Routes>
        <Route path="/" element={< Home/> }></Route>
        <Route path= "/boxDetail" element={< BoxDetail/> }></Route>
      </Routes>
      <Footer />  */}
      </div>
  )
}

export default App;
