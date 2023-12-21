import React, { useState } from 'react'
import './usercard.css'
import { Link } from 'react-router-dom'

const UserCard = (props) => {
     const sampleUserPfp = require('../../res/test_images/party-emoji.webp')
     console.log(props.username)
     return (
          <div className="UserCard">
               <div className="user-profile-pic flex-item">
                    <img src={sampleUserPfp} alt="" width="64" height="64"/>
               </div>
               <div className="user-username flex-item">
                    {/* <a href="">@{props.username}</a> */}
                    <Link to={`/userview/${encodeURIComponent(props.username)}`}>@{props.username}</Link>

               </div>

               
          </div>
     )
}

export default UserCard