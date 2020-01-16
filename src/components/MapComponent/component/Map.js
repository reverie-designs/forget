import React, { useState, useRef } from "react";
import { useGoogleMap, useMap } from "../hooks/map_hook.js";
import { useGeolocation } from "../hooks/useGeolocation.js";
import getDistance from "../helper/distanceBetweenPoints";
import MuiAlert from "@material-ui/lab/Alert";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const mapApiKey = process.env.REACT_APP_GMAPS_API_KEY;
// const geocodeApiKey = REACT_APP_GEOCODE_KEY;
const initialConfig = {
  zoom: 18,
  center: {lat:43.644174, lng: -79.402206},
  type: null,
};
let inFence;
const Map = (props) => {
  console.log(props)
  const [homePosition, setLocation] = useState(props.settings && props.settings.lat && props.settings.lng ? {lat: parseFloat(props.settings.lat), lng: parseFloat(props.settings.lng) } : '')
  const [radius, setradius] = useState(props.geofence ? Number(props.geofence.radius) : '');
  const [geofence, applyGeofence] = useState(props.geofence ? props.geofence.radius_on : '')
  
  const { latitude, longitude, timestamp} = useGeolocation(true, {enableHighAccuracy: true});
  // const { latitude, longitude, timestamp } = useGeolocation(true, {enableHighAccuracy: true});
  if (latitude && longitude) {
    initialConfig.center.lat = latitude;
    initialConfig.center.lng = longitude;
    initialConfig.type = 'Geolocation'
    if (props && props.geofence && props.geofence.radius_on){
      inFence = getDistance(initialConfig.center, homePosition) <= radius;
    }
  }
  const googleMap = useGoogleMap(mapApiKey);
  const mapContainerRef = useRef(null);
  // useMap({ googleMap, mapContainerRef, initialConfig, homePosition });
  useMap({ googleMap, mapContainerRef, initialConfig, homePosition, radius, geofence });
  return (
    <div>
    <div      
     style={{
        width: "90%",
        margin: "auto",
        marginTop: "10px",
     }}>
      {(props && props.geofence && props.geofence.radius_on === false ?
         <Alert icon={false} variant="outlined" severity="info">GEOFENCE HAS BEEN DISABLED</Alert> :
          (inFence) ? <Alert icon={false} severity="info">PATIENT IS WITHIN SAFETY ZONE</Alert> : 
          <Alert icon={false} variant="outlined" severity="error">PATIENT OUTSIDE OF SAFETY ZONE</Alert>)}
    </div>
    <div
      style={{
        height: "450px",
        width: "90%",
        margin: "auto",
        marginTop: "10px"
      }}
      ref={mapContainerRef}
    />
    </div>
  );
};
export default Map;