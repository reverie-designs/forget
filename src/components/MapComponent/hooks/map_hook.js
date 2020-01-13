import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useGoogleMap from "./useGoogleMap"
import createMarker from "../helper/createMarker"
import createFence from "../helper/createFence"
import getDistance from "../helper/distanceBetweenPoints"

const baseIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
const homeIcon = "http://maps.google.com/mapfiles/ms/icons/homegardenbusiness.png"
const lhlIcon = "https://image.flaticon.com/icons/svg/365/365009.svg"

// updateLOcation() will be used for the patient to send locations
// getLocation() cargiver gets the patient location from patient posts

const useMap = ({ googleMap, mapContainerRef, config, homePosition, radius, applyGeofence }) => {
  const [map, setMap] = useState(null);
  useEffect(
    () => {
      if (!googleMap || !mapContainerRef.current) {
        return;
      }
      const map = new googleMap.maps.Map(
        mapContainerRef.current,
        config
      );
      let bounds  = new googleMap.maps.LatLngBounds()
      let loc = new googleMap.maps.LatLng(config.center.lat, config.center.lng);
      bounds.extend(loc);
      const m1 = createMarker(googleMap,config.center,map,baseIcon,'Current Location');
      
      if (homePosition){ // needs an additional condiitional to see if patient has preset radius
        loc = new googleMap.maps.LatLng(homePosition.lat, homePosition.lng);
        bounds.extend(loc);
        
        const m2 = createMarker(googleMap,homePosition,map,homeIcon,'Home');
        
        if (applyGeofence) {
          //const radius = 2.5 // remove when props are avialable
          const isInside = getDistance(config.center, homePosition) <= radius;
          
          setInterval(() => {
            
          }, 5000)
        
          let fence = createFence(googleMap,bounds,loc,homePosition,map,radius,true);
          fence.setOptions({fillColor: isInside ? '#0000FF': '#FF0000'});
          if (!isInside) {
            // produce notifications on geofence extractions
          }
            // on fence radius change
         // googleMap.maps.event.addListener(fence, 'radius_changed', function() {
         //   let newRadius = Math.round(fence.getRadius() / 10)/100;
         //   let newPosition = getDistance(initialConfig.center, homePosition) <= newRadius;
         //   fence.setOptions({fillColor: newPosition ? '#0000FF': '#FF0000'});
         //   m2.setLabel({ text: `Fence ${radius} km`, color: "white", fontSize: "12px" });
         // });
        }
        
        // googleMap.maps.event.addListener(fence, 'center_changed', () => {
        //   fence.setCenter(homePosition);
        // });
      };
      map.fitBounds(bounds);
      map.panToBounds(bounds); 
      setMap(map);
    },
    [config, googleMap, mapContainerRef, homePosition, radius, applyGeofence]
    );
    return map;
  };
  
  export { useGoogleMap, useMap };
  