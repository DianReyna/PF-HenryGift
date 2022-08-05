import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import { Route, Routes } from 'react-router-dom';
// import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/box/:idBox" element={<BoxDetail />} />
        </Routes>
        {/* <Footer /> */}

      </div>
  )
}

export default App;
