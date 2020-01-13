import React, { useRef, useEffect, useState } from "react";
import { useGoogleMap, useMap } from "../hooks/map_hook.js";
import { useGeolocation } from "../hooks/useGeolocation.js"


const mapApiKey = process.env.REACT_APP_GMAPS_API_KEY;

// const homePosition = {lat:43.715251, lng: -79.722510}; // BCC mall

const Map = (props) => {
  //let homePosition = {lat:43.644174, lng: -79.402206}; // light house labs
  const [radius, setRadius] = useState(3);
  const [geofence, applyGeofence] = useState(false);
  const [homePosition, setHomePosition] = useState({lat:43.644174, lng: -79.402206});
  const [config, setConfig] = useState({ zoom: 18, center: {lat:43.644174, lng: -79.402206}, type: null, });
  
  const { latitude, longitude, timestamp } = useGeolocation(true, {enableHighAccuracy: true});
  useEffect(() => {
    if (latitude && longitude) {
      initialConfig.center.lat = latitude;
      initialConfig.center.lng = longitude;
      initialConfig.type = 'Geolocation'
    }
  }, [latitude, longitude])
  

  const googleMap = useGoogleMap(mapApiKey);
  const mapContainerRef = useRef(null);
  useMap({ googleMap, mapContainerRef, config, homePosition, radius, geofence });
  return (
    <div
      style={{
        height: "400px",
        width: "80%",
        margin: "auto",
        marginTop: "10px"
      }}
      ref={mapContainerRef}
    />
  );
};

export default Map;
