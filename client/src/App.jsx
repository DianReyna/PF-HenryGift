import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import { Route, Routes } from 'react-router-dom';
import { Footer } from "./components/Footer/Footer";
import Form from './components/Form/Form'

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/detail" element={<BoxDetail />} />
            <Route path="/form" element={<Form />} />
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
