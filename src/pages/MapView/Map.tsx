import React, { useRef, useEffect, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom"
import mapboxgl from 'mapbox-gl'
import EventIcon from './EventIcon';
import './map.css'
import Navbar from '../../components/Navbar'

const Map = () => {
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvY2ttaW5lcngiLCJhIjoiY2tzdXZvdzNoMTMwNzJvcXoza3hqcjdieiJ9.RSOERNWq8FkRBi9Z4Q4hbg'
      const map = useRef(null)
      const mapContainer = useRef(null)

      let longitude: number = -70.9
      let latitude: number = 42.35

      const [zoom, setZoom] = useState(13)

      const { coordinates, emojis, eventTitles, eventDescriptions, eventDates, hostUsernames } = require("./MapSampleData.ts")
      console.log(eventDates.length)

      const markers: mapboxgl.Marker[] = []


      useEffect(() => {
            console.log("render")
            if (map.current) {
                  return;
            }



            map.current = new mapboxgl.Map({
                  container: mapContainer.current,
                  style: 'mapbox://styles/mapbox/streets-v12',
                  center: [longitude, latitude],
                  zoom: zoom
            })

            map.current.on('zoom', () => {

                  // if (map.current.getZoom() < 11) {
                  // const scale = 1 + 5 * Math.log(map.current.getZoom())
                  // const scale = 1 + ()
                  // markers.forEach((marker, i, arr) => {
                  //       const markerIcon = marker.getElement()
                  //       markerIcon.style.transform = `scale(0.3)`
                  //       // markerIcon.style.transform = `scale(${scale}, ${scale})`
                  //       markerIcon.style.transformOrigin = 'bottom'
                  //       markerIcon.style.scale = `${scale}` 
                  // })
                  // }
            })

            navigator.geolocation.getCurrentPosition(
                  (position) => {
                        console.log("latitude " + latitude + " long" + longitude)
                        longitude = position.coords.longitude
                        latitude = position.coords.latitude
                        map.current.setCenter([longitude, latitude])
                  }, (error) => {
                        console.log("error")
                  }
            )





            const markerImg = require('../../res/test_images/party-emoji.webp')

            for (let i = 0; i < 32; i++) {
                  console.log(i)
                  const markerElement = document.createElement('div')
                  markerElement.className = "custom-marker"
                  // markerElement.style.backgroundImage = `url(${markerImg})`
                  markerElement.innerHTML = emojis[i]
                  markerElement.style.fontSize = '50px'

                  const popupElement = document.createElement('div')
                  const eventTitleElement = document.createElement('h1')
                  eventTitleElement.innerText = eventTitles[i]
                  popupElement.appendChild(eventTitleElement)

                  const eventDescriptionElement = document.createElement('p')
                  eventDescriptionElement.innerText = eventDescriptions[i]
                  popupElement.appendChild(eventDescriptionElement)


                  const dateElement = document.createElement('p')
                  const formattedTime = new Intl.DateTimeFormat('en-US', {
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                  }).format(eventDates[i][0])

                  dateElement.innerHTML = formattedTime
                  popupElement.appendChild(dateElement)

                  const eventHostPfp = document.createElement('div')
                  eventHostPfp.style.backgroundImage = `url(${markerImg})`
                  eventHostPfp.style.float = "right"
                  eventHostPfp.style.backgroundSize = 'cover'
                  eventHostPfp.style.width = '30px'
                  eventHostPfp.style.height = '30px'
                  // eventHostPfp.style.marginTop = '8px'
                  popupElement.appendChild(eventHostPfp)

                  const eventHostUsername = document.createElement('a')
                  eventHostUsername.href = "/x"
                  eventHostUsername.innerText = "@" + hostUsernames[i]
                  eventHostUsername.style.textAlign = "right"
                  eventHostUsername.style.float = "right"
                  popupElement.appendChild(eventHostUsername)

                  const popup = new mapboxgl.Popup({ offset: 25 }).setDOMContent(popupElement)
                  const marker: mapboxgl.Marker = new mapboxgl.Marker(markerElement)
                        // .setLngLat([longitude, latitude])
                        .setLngLat([coordinates[i][1], coordinates[i][0]])
                        .setPopup(popup)
                        .addTo(map.current)

                  markers.push(marker)
            }

            // fetch('http://127.0.0.1:5000/events-all').then(res =>  {
            //       return res.json()
            // }
            // )
            //       .then(
            //             json => {
            //                   console.log(json)
            //                   for (let i = 0; i < Object.keys(json).length; i++) {
            //                         const lng = json[i]["longitude"]
            //                         const lat = json[ i]["latitude"]
            //                         console.log(lng + " " + lat)
            //                         const eventName = json[i]["name"]

            //                         const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(eventName + "<img src='img_girl.jpg' alt='Girl in a jacket' width='125' height='150'>")
            //                         const marker = new mapboxgl.Marker()
            //                               .setLngLat([lng, lat])
            //                               .setPopup(popup)
            //                               .addTo(map.current)
            //                   }
            //             }
            //       )
      })

      return (
            <div className="map">

                  <div ref={mapContainer} className="map-container"></div>



                  <div className="navbar">
                        <Navbar />
                  </div>

            </div>
      );
}

export default Map;