import React, { useEffect } from "react"
import mapboxgl from "mapbox-gl/dist/mapbox-gl"

import "./Map.css"

const Map = (props) => {

 console.log(props.coordinates)

  useEffect(() => {
    const latitude = props.coordinates[0]
    const longitude = props.coordinates[1]

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
    var map = new mapboxgl.Map({
      container: "mapbox",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [latitude, longitude],
      zoom: 14,
    })

    new mapboxgl.Marker().setLngLat([latitude, longitude]).addTo(map)
  },[props.coordinates])

  
  return (
    <div
      id="mapbox"
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  )
}

export default Map
