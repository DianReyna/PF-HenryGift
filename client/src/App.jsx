import Home from "./components/Home/Home";
import BoxDetail from "./components/BoxDetail/BoxDetail";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
<<<<<<< HEAD
import Form from './components/Form/Form'

=======
import Form from "./components/Form/Form";
>>>>>>> 65feaa97d88c392a5094fd0ef0f8bd730296d4bf

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/box/:idBox" element={<BoxDetail />} />

        </Routes>
        {/* <Footer /> */}

      </div>
  )
=======
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/detail" element={<BoxDetail />} /> */}
        <Route path="/form" element={<Form />} />
        <Route path="/box/:idBox" element={<BoxDetail />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );

>>>>>>> 65feaa97d88c392a5094fd0ef0f8bd730296d4bf
}

export default App;
