import Home from "./components/Home/Home";
import { Route, Router, Routes } from 'react-router-dom';
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/home" element={<Footer />}/> */}
        </Routes>
        <Footer />
        
      </div>
  )
}

export default App;
