import React from 'react'
import './usercard.css'

const UserCard = (props) => {
     const sampleUserPfp = require('../../res/test_images/party-emoji.webp')

     return (
          <div className="UserCard">
               <div className="user-profile-pic flex-item">
                    <img src={sampleUserPfp} alt="" width="64" height="64"/>
               </div>
               <div className="user-username flex-item">
                    <a href="">@{props.username}</a>
               </div>
          </div>
     )
}

export default UserCard