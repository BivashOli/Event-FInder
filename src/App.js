import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import Map from "./Map"
import Navbar from "./Navbar";
import EventForm from "./EventForm";
import Login from "./Login";
import UserEvents from "./UserEvents";

function App() {


  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/map" element={<Map />} />
        <Route path="/eventform" element={<EventForm />} />
        <Route path="/event" element={<UserEvents />} />

      </Routes>
    </div>
  );
}

export default App;
