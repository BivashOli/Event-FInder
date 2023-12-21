import React, { useRef, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import mapboxgl from "mapbox-gl";

const Map = () => {
      mapboxgl.accessToken =
            "pk.eyJ1Ijoic2hvY2ttaW5lcngiLCJhIjoiY2tzdXZvdzNoMTMwNzJvcXoza3hqcjdieiJ9.RSOERNWq8FkRBi9Z4Q4hbg";
      const map = useRef(null);
      const mapContainer = useRef(null);
      const [longitude, setLongitude] = useState(-70.9);
      const [latitude, setLatitude] = useState(42.35);
      const [zoom, setZoom] = useState(9);
      
      useEffect(() => {
            if (map.current) {
                  return;
            }
            map.current = new mapboxgl.Map({
                  container: mapContainer.current,
                  style: "mapbox://styles/mapbox/streets-v12",
                  center: [longitude, latitude],
                  zoom: zoom,
            });
            fetch("http://127.0.0.1:5000/events-all")
                  .then((res) => {
                        return res.json();
                  })
                  .then((json) => {
                        console.log(json);
                        for (let i = 0; i < Object.keys(json).length; i++) {
                              const lng = json[i]["longitude"];
                              const lat = json[i]["latitude"];
                              console.log(lng + " " + lat);
                              const eventName = json[i]["name"];

                              const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                                    eventName +
                                    "<img src='img_girl.jpg' alt='Girl in a jacket' width='125' height='150'>"
                              );
                              const marker = new mapboxgl.Marker()
                                    .setLngLat([lng, lat])
                                    .setPopup(popup)
                                    .addTo(map.current);
                        }
                  });
      });

      return (
            <div className="map">
                  <div ref={mapContainer} className="map-container"></div>
            </div>
      );
};

export default Map;
