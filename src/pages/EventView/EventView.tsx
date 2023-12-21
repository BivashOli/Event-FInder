import React, { useState } from 'react'
import UserCard from '../../components/UserCard';
import Navbar from '../../components/Navbar';
import { Link, useLocation, useParams } from 'react-router-dom';
import "./eventview.css"
import FollowButton from '../../components/FollowButton';

const EventView = (props) => {
     console.log(props
     )

          console.log(useParams())

     const params = useParams()
     const {state} = useLocation()
     console.log(state)
     // const userUsername = state.state ? state.state.userUsername : null;
     const [isFollowing, setFollowing] = useState(false) // initial value should be retrieved from database not just false
     const [isAttending, setAttending] = useState(false) // initial value should be retrieved from database not just false


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


                         {
                         (isAttending) ? (<button onClick={() => setAttending(false)} className="unattend-button">Unattend</button>
                         ) : (<button onClick={() => setAttending(true)} className="attend-button">Attend</button>
                         )
                         }

                         {/* <Link to="" className="attend-button">Attend</Link> */}
                         <p>{params.eventDescription}</p>
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