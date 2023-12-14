import { Route, Routes } from "react-router-dom"
import MapView from "./pages/MapView";
import Navbar from "./components/Navbar/Navbar";

function App() {


  return (
    <div className="app">
      <Routes>
        
        <Route path="/map" element={<MapView/>} />
        <Route path="/navbar" element={<Navbar/>} />


      </Routes>

    </div>
  );
}

export default App;
