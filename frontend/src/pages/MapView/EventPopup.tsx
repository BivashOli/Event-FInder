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
               <div className="eventHostPfp" style={{ backgroundImage: `url(${props.eventHostPfp})` }}>
               </div>
               <div className="eventHostUsername">
                    <Link to={`/userview/${encodeURIComponent(props.eventHostUsername)}`}>@{props.eventHostUsername}</Link>
               </div>
               <div className="eventViewLink">
                    <Link to={`/eventview/${encodeURIComponent(props.eventTitle)}/${encodeURIComponent(props.eventDescription)}/${encodeURIComponent(props.eventDate)}/${encodeURIComponent(props.eventDate)}/${encodeURIComponent(props.eventHostUsername)}/${"blank"}`} >
                         See more</Link>
               </div>
               <div className="eventAttendingNumber">
                    xyz are attending {props.eventTitle}
               </div>
          </div >
     )
}

export default EventPopup