import { Route, Routes } from "react-router-dom"
import MapView from "./pages/MapView";
import Navbar from "./components/Navbar/Navbar";
import EventView from "./pages/EventView";
import EventPopup from "./pages/MapView/EventPopup";

function App() {


  return (
    <div className="app">
      <Routes>
        
        <Route path="/map" element={<MapView/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/eventview" element={<EventView/>} />


      </Routes>

    </div>
  );
}

export default App;
