import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './eventpopup.css'

const EventPopup = (props) => {

     return (
          <div>
               <div className="eventTitle">
                    <h1>{props.eventTitle}</h1>
               </div>
               <div className="eventDescription">
                    <p>{props.eventDescription}</p>
               </div>
               <div className="eventDate">
                    <p>
                         {props.eventDate}
                    </p>
               </div>
               <div className="eventHostPfp" style={{backgroundImage: `url(${props.eventHostPfp})`}}>
               </div>
               <div className="eventHostUsername">
                    <a href="">@{props.eventHostUsername}</a>
               </div>
               <div className="eventViewLink">
                    {/* <Link to={"/" + props.eventLink}>See more</Link> */}
               </div>
          </div>
     )
}

export default EventPopup