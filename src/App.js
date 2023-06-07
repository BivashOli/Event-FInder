import { Route, Routes } from "react-router-dom"
import CreateUser from "./CreateUser";
import Home from "./Home";
import Map from "./Map"
import Navbar from "./Navbar";
import EventForm from "./EventForm";

// import Login from "./Login";
// import { useEffect } from "react";
// import { gapi } from 'gapi-script'

const clientId = "720725769227-mk5l4rkn2u05ma0ja44n2qt146br88qi.apps.googleusercontent.com"


function App() {

  // useEffect(() => {
  //   gapi.client.init({
  //     clientId : clientId,
  //     scope: ""
  //   })
  //   gapi.load('client:auth2', start)
  // })
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/map" element={<Map />} />
        <Route path="/eventform" element={<EventForm />} />

        {/* <Route path="/login" element={<Login />}/> */}
      </Routes>
    </div>
  );
}

export default App;
