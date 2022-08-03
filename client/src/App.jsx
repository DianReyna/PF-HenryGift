import Home from "./components/Home/home";
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< Home/> }></Route>
      </Routes>
      </div>
  )
}

export default App;
