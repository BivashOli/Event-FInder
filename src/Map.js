// import ReactMapGL from "react-map-gl"
import React, { useRef, useEffect, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom"
import mapboxgl from 'mapbox-gl'

const Map = () => {
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvY2ttaW5lcngiLCJhIjoiY2tzdXZvdzNoMTMwNzJvcXoza3hqcjdieiJ9.RSOERNWq8FkRBi9Z4Q4hbg'
      const map = useRef(null)
      const mapContainer = useRef(null)
      const [longitude, setLongitude] = useState(-70.9)
      const [latitude, setLatitude] = useState(42.35)
      const [zoom, setZoom] = useState(9)
      useEffect(() => {
            if (map.current) {
                  return;
            }
            map.current = new mapboxgl.Map({
                  container: mapContainer.current,
                  style: 'mapbox://styles/mapbox/streets-v12',
                  center: [longitude, latitude],
                  zoom: zoom
            })
            // const popup = new mapboxgl.Popup({ offset: 25 }).setText('YOOOO');
            // const marker = new mapboxgl.Marker()
            //       .setLngLat([longitude, latitude])
            //       .setPopup(popup)
            //       .addTo(map.current);
            // let data = {}
            // let lng = 0;
            // let lat = 0;
            fetch('http://127.0.0.1:5000/events-all').then(res => {
                  return res.json()
            }
            )
                  .then(
                        json => {
                              console.log(json)
                              for (let i = 0; i < Object.keys(json).length; i++) {
                                    const lng = json[i]["longitude"]
                                    const lat = json[i]["latitude"]
                                    console.log(lng + " " + lat)
                                    const eventName = json[i]["event_name"]

                                    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(eventName + "<img src='d.png' alt='Girl in a jacket' width='125' height='150'>")
                                    const marker = new mapboxgl.Marker()
                                          .setLngLat([lng, lat])
                                          .setPopup(popup)
                                          .addTo(map.current)
                              }
                        }
                  )




      })

      // navigator.geolocation.getCurrentPosition()
      // const [viewport, setViewport] = useState({
      //       latitude : 45,
      //       longitude : -75,
      //       zoom : 10
      // })

      return (
            <div className="map">
                  <div ref={mapContainer} className="map-container"></div>
                  {/* <ReactMapGL 
                  {...viewport} 
                  mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                  onView
                  width="100%"
                  height="100%"
                  mapStyle="mapbox://styles/sankarr/clffwqnm700jl01mr0lnc1z2s"
                  
                  >
                  </ReactMapGL> */}
            </div>
      );
}

export default Map;