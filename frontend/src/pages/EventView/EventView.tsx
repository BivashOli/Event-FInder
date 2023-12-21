import React, { useState } from 'react'
import UserCard from '../../components/UserCard';
import Navbar from '../../components/Navbar';
import { Link, useLocation, useParams } from 'react-router-dom';
import "./eventview.css"
import FollowButton from '../../components/FollowButton';
import AttendButton from '../../components/AttendButton';

const EventView = () => {
     
     const params = useParams()
    

     return (
          <div className="EventView">
               <div className="top-section-container">
                    <div className="top-section-item user-info">
                         <UserCard userProfilePic="" username={params.eventHostUsername} />
                         <FollowButton/>

                    </div>
                    <div className="top-section-item event-info">
                         <h1>{params.eventTitle}</h1>
                         <h4>{params.eventStartDate}</h4>
                         <p>xyz people are attending</p>
                         <AttendButton />
                         <p>{params.eventDescription}</p>

                    </div>
               </div>
               <div className="empty-area"></div>
               <div className="content">
               </div>

               <Navbar />
          </div>
     )
}

export default EventView;