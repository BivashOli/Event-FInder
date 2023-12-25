import { Route, Routes } from "react-router-dom"
import MapView from "./pages/MapView";
import Navbar from "./components/Navbar/Navbar";
import EventView from "./pages/EventView";
import EventPopup from "./pages/MapView/EventPopup";
import UserView from "./pages/UserView";
import Login from "./pages/Login"

function App() {


  return (
    <div className="app">
      <Navbar />
      <Routes>

        <Route path="/map" element={<MapView />} />
        <Route path="/eventview/:eventTitle/:eventDescription/:eventStartDate/:eventEndDate/:eventHostUsername/:eventHostPfp"
          element={<EventView />} />
        <Route path="/userview/:username" element={<UserView/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
