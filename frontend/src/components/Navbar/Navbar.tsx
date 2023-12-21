import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './navbar.css'

const Navbar = () => {

     return (
          <div className="Navbar">
               <div className="flex-container">
                    <div className="item item-1">
                         <Link to='/feed'>
                         🏠
                              {/* <img src={require('../../res/navbar/icons8-home-64.png')} alt="" /> */}
                         </Link>
                    </div>
                    <div className="item item-2">
                         <Link to='/map'>
                         🌐
                         </Link>
                    </div>
                    <div className="item item-3">
                         <Link to='/create-event'>
                         ➕
                         </Link>
                    </div>
                    <div className="item item-4">
                         <Link to='/notifications'>
                         ❤️
                         </Link>
                    </div>
                    <div className="item item-5">
                         <Link to='/my-profile'>
                         😺
                         </Link>
                    </div>
               </div>

          </div>
     )
}

export default Navbar