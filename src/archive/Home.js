import { Link, Route, Routes } from "react-router-dom"

const Home = () => {
     return (
          <div>
               <h1>Home</h1>
               <br />
               <Link to="/login">Login</Link>
               <br />

               <Link to="/map">Map</Link>

               <br />
               <Link to="/eventform">Create an Event!</Link>

          </div>
     );
}

export default Home;