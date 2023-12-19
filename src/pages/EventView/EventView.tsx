import React from 'react'
import UserCard from '../../components/UserCard';
import Navbar from '../../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import "./eventview.css"

const EventView = (props) => {
     console.log(props
     )

     const location = useLocation()
     const userUsername = location.state ? location.state.userUsername : null;

          
     return (
          <div className="EventView">
               <div className="top-section-container">
                    <div className="top-section-item user-info">
                         <UserCard userProfilePic="" username={userUsername} />
                         <Link to="" className="follow-button">Follow</Link>

                    </div>
                    <div className="top-section-item event-info">
                         <h1>🧘🏾Morning stretches meetup!</h1>
                         <h4>Dec 17th 9 am</h4>
                         <p>xyz people are attending</p>
                         <Link to="" className="attend-button">Attend</Link>
                         <p>Description</p>
                    </div>
               </div>
               <div className="empty-area">asdsd</div>
               <div className="content">
               </div>

               <Navbar />
          </div>
     )
}

export default EventView;