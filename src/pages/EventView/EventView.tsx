import React, { useState } from 'react'
import UserCard from '../../components/UserCard';
import Navbar from '../../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import "./eventview.css"

const EventView = (props) => {
     console.log(props
     )

     const location = useLocation()
     const userUsername = location.state ? location.state.userUsername : null;
     const [isFollowing, setFollowing] = useState(false) // initial value should be retrieved from database not just false
     const [isAttending, setAttending] = useState(false) // initial value should be retrieved from database not just false


     return (
          <div className="EventView">
               <div className="top-section-container">
                    <div className="top-section-item user-info">
                         <UserCard userProfilePic="" username={userUsername} />
                         {(isFollowing) ? (<button onClick={() => setFollowing(false)} className="unfollow-button">Unfollow</button>
                         ) : (<button onClick={() => setFollowing(true)} className="follow-button">Follow</button>
                         )}

                    </div>
                    <div className="top-section-item event-info">
                         <h1>🧘🏾Morning stretches meetup!</h1>
                         <h4>Dec 17th 9 am</h4>
                         <p>xyz people are attending</p>


                         {
                         (isAttending) ? (<button onClick={() => setAttending(false)} className="unattend-button">Unattend</button>
                         ) : (<button onClick={() => setAttending(true)} className="attend-button">Attend</button>
                         )
                         }

                         {/* <Link to="" className="attend-button">Attend</Link> */}
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