import React from "react";
import { useParams } from "react-router-dom";
import UserCard from "../../components/UserCard";
import "./userview.css"

const UserView = () => {
     const params = useParams()
     return (
          <div className="UserView">
               <UserCard username={params.username} />
               
               <div className="other-information">
                    <div className="flex-item">189</div>
                    <div className="flex-item">40.k</div>
                    <div className="flex-item">23</div>

               </div>
               <div className="other-information-headings">
                    <div className="flex-itemv2">Following</div>
                    <div className="flex-itemv2">Followers</div>
                    <div className="flex-itemv2">Events</div>

               </div>

               <div className="event-info">
                    <h1>EVENTS I'M HOSTING</h1>
                    <h1>EVENTS I'M ATTENDING</h1>

               </div>
          </div>


     );
}

export default UserView;