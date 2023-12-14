import React from 'react'
import './navbar.css'

const Navbar = () => {



     return (
          <div className="Navbar">

               <div className="grid-container">

                    <div className="grid-item grid-item1">
                         <div className="grid-sub">HEADER</div>
                         <div className="grid-sub">HEADER</div>
                         <div className="grid-sub">HEADER</div>
                         <div className="grid-sub">HEADER</div>

                    </div>
                    <div className="grid-item grid-item2">
                         <div className="grid-sub">SIDEBAR</div>
                         <div className="grid-sub">SIDEBAR</div>
                    </div>

                    <div className="grid-item grid-item3">
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                    </div>

                    <div className="grid-item grid-item4">
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>

                    </div>

                    <div className="grid-item grid-item5">
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>
                         <div className="grid-sub">BLOCK</div>

                    </div>

               </div>

               {/* <ul className ="Navbar-ul">
                    <li>
                         <a href="">Feed</a>
                    </li>
                    <li>
                         <a href="">Map</a>
                    </li>
                    <li>
                         <a href="">Post</a>
                    </li>
                    <li>
                         <a href="">Noti</a>
                    </li>
                    <li>
                         <a href="">Me</a>
                    </li>

               </ul> */}
          </div>
     )
}

export default Navbar