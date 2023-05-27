import {Link, Route, Routes} from "react-router-dom"

const Home = () => {
     return (
          <div>
               <h1>Home</h1>
               <Link to ="/createuser">Create User</Link>
               <br/>
               <Link to = "/map">Map</Link>
          </div>
     );
}

export default Home;