import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
import { redirect , Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import Cookies from 'js-cookie'

const EventForm = () => {
     const [email, setEmail] = useState("")
     const [name, setName] = useState("")
     const [streetAddress, setStreetAddress] = useState("")
     const [zipcode, setZipcode] = useState("")
     const [city, setCity] = useState("")
     const [state, setState] = useState("")
     const [country, setCountry] = useState("")
     const [description, setDescription] = useState("")
     const [image, setImage] = useState(null)
     const navigate = useNavigate()

     useEffect(() => {
          // const cookieDecoded = decodeURIComponent(document.cookie).split(";")

          if (cookieDecoded.length === 0) {
               console.log("uh oh")
               navigate("/login")
               Cookies.h
          } else {
               let JWT; 
               
               console.log(Cookies.get('JWT'))
          }
     }, [])

     const handleSubmit = () => {
          console.log("Asd")
          streetAddress.replace(" ", "%20")
          country.replace(" ", "%20")
          state.replace(" ", "%20")
          mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvY2ttaW5lcngiLCJhIjoiY2tzdXZvdzNoMTMwNzJvcXoza3hqcjdieiJ9.RSOERNWq8FkRBi9Z4Q4hbg'

          fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + streetAddress + "%20" + city + "%20" + state + "%20" + zipcode + "%20" + country + ".json?access_token=" + mapboxgl.accessToken)
               .then(coordsRaw => { return coordsRaw.json() })
               .then(coords => {
                    if (coords.hasOwnProperty("features")) {
                         const [lng, lat] = coords["features"][0]["center"]

                         const data = { email, name, lng, lat, description }
                         fetch('http://127.0.0.1:5000/create-event', {
                              method: 'POST',
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify(data)
                         }).then(() => {

                         })

                    }
               })
     }

     return (
          <div className="eventform">
               <div className="email">
                    <label>Email</label>
                    <br />
                    <input onChange={e => setEmail(e.target.value)} />
               </div>
               <div className="name">
                    <label>Name</label>
                    <br />
                    <input onChange={e => setName(e.target.value)} />
               </div>
               <div className="street-address">
                    <label>Street Address</label>
                    <br />
                    <input onChange={e => setStreetAddress(e.target.value)} />
               </div>
               <div className="zipcode">
                    <label>Zipcode</label>
                    <br />
                    <input onChange={e => setZipcode(e.target.value)} />
               </div>
               <div className="city">
                    <label>City</label>
                    <br />
                    <input onChange={e => setCity(e.target.value)} />
               </div>
               <div className="state">
                    <label>State</label>
                    <br />
                    <input onChange={e => setState(e.target.value)} />
               </div>
               <div className="country">
                    <label>Country</label>
                    <br />
                    <input onChange={e => setCountry(e.target.value)} />
               </div>
               <div className="description">
                    <label>Description</label>
                    <br />
                    <input onChange={e => setDescription(e.target.value)} />
               </div>
               <div className="image">
                    <label>Image</label>
                    <br />
                    <input type="file" id="file" accept=".jpg" name="image" onChange={e => setImage(e.target.files[0])} />
                    <br />
                    {/* <img alt=" " width={"250px"} src={getImage()} /> */}
               </div>

               <div className="submit">
                    <button onClick={handleSubmit}>Submit</button>
               </div>
          </div>
     );
}

export default EventForm;