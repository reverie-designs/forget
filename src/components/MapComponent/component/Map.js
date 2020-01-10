import React, { useRef } from "react";
import { useGoogleMap, useMap } from "../hooks/map_hook.js";
import { useGeolocation } from "../hooks/useGeolocation.js"


const mapApiKey = process.env.REACT_APP_GMAPS_API_KEY;
// const geocodeApiKey = REACT_APP_GEOCODE_KEY;

const initialConfig = {
  zoom: 18,
  center: {lat:43.644174, lng: -79.402206},
  type: null,
};

const homePosition = {lat:43.644174, lng: -79.402206}; // light house labs
// const homePosition = {lat:43.715251, lng: -79.722510}; // BCC mall

const Map = () => {
  const { latitude, longitude, timestamp } = useGeolocation(true, {enableHighAccuracy: true});

  if (latitude && longitude) {
    initialConfig.center.lat = latitude;
    initialConfig.center.lng = longitude;
    initialConfig.type = 'Geolocation'
  }

  const googleMap = useGoogleMap(mapApiKey);
  const mapContainerRef = useRef(null);
  useMap({ googleMap, mapContainerRef, initialConfig, homePosition });
  // useMap({ googleMap, mapContainerRef, initialConfig, homePosition, radius, applyGeofence });
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
