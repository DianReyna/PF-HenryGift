import Home from "./components/Home/Home";
import BoxDetail from "./components/Box/BoxDetail";
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Home/> }></Route>
        <Route path= "/boxDetail" element={< BoxDetail/> }></Route>
      </Routes>
      </div>
  )
}

export default App;
